import ProjectDesc from "@/sections/project_desc";
import ProjectImg from "@/sections/project_img";
import Chat from "@/sections/chat";
import Profile from "@/sections/profile";
import { projectData } from "@/data/project-data";

export default function Project({ projectId, project }) {
  return (
    <div className="bg-[var(--background)] text-[var(--foreground)] min-h-screen px-[20px] md:px-[40px]">
      {/* Desktop Layout */}
      <div className="hidden md:flex flex-row justify-between">
        <Profile />
        <ProjectDesc projectId={projectId} />
        <Chat projectTitle={project?.title} /> 
      </div>
      
      {/* Mobile Layout */}
      <div className="flex md:hidden flex-col">
        {/* Top row: Profile (left) and Chat (right) side by side */}
        <div className="flex flex-row justify-between mb-4">
          <div className="w-1/2 pr-2">
            <Profile />
          </div>
          <div className="w-1/2 pl-2">
            <Chat projectTitle={project?.title} />
          </div>
        </div>
        
        {/* Middle: Project Description (full width) */}
        <div className="w-full mb-4">
          <ProjectDesc projectId={projectId} />
        </div>
      </div>
      
      {/* Project Image (same for both desktop and mobile) */}
      <ProjectImg projectId={projectId} />
    </div>
  );
}

export async function getServerSideProps(context) {
  const { id } = context.query;
  const projectId = id;
  const project = projectData.find((p) => p.id === Number(projectId));

  // If project not found, return 404
  if (!project) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      projectId,
      project,
    },
  };
}
