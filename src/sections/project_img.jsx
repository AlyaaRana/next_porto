"use client";
import { projectData } from "@/data/project-data";

const ProjectImg = ({ projectId }) => {
  const project = projectData.find((p) => p.id === Number(projectId));

  if (!project) return null;

  return (
    <section className="w-full h-auto bg-[#FDF7F2] flex items-center justify-center">
      <div className="max-w-[1200px] w-full p-[20px]">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-auto object-cover rounded-[10px]"
        />
      </div>
    </section>
  );
};

export default ProjectImg;
