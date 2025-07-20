import ProjectDesc from "@/sections/project_desc";
import ProjectImg from "@/sections/project_img";
import Chat from "@/sections/chat";
import Profile from "@/sections/profile";
import { projectData } from "@/data/project-data";

export default function Project({ projectId, project }) {
  return (
    <div className="bg-[var(--background)] text-[var(--foreground)] min-h-screen px-[40px]">
      <div className="flex flex-col md:flex-row justify-between">
        <Profile />
        <ProjectDesc projectId={projectId} />
        <Chat projectTitle={project?.title} /> 
      </div>
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
