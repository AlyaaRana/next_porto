"use client";
import { projectData } from "@/data/project-data";

const ProjectImg = ({ projectId }) => {
  const project = projectData.find((p) => p.id === Number(projectId));

  if (!project) return null;

  return (
    <section className="w-full h-screen bg-[#cacdd1] flex items-center justify-center">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover"
      />
    </section>
  );
};

export default ProjectImg;
