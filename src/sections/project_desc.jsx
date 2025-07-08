"use client";
import { projectData } from "@/data/project-data";
import { useMemo } from "react";
import Tag from "@/component/tag";

const ProjectDesc = ({ projectId }) => {
  const project = useMemo(() => 
    projectData.find((p) => p.id === Number(projectId)), 
    [projectId]
  );

  if (!project) {
    return <p className="text-white">Project not found 😵</p>;
  }

  return (
    <section className="relative w-full h-auto bg-[#2C2C2C] text-white overflow-hidden mx-[60px] px-[60px] py-[90px]">
      <div className="text-left w-1/2">
        <p className="h3 ">{project.title}</p>
        <p className="body">{project.description}</p>
        {(project.additional?.length || project.skills?.length) > 0 && (
          <div className="flex flex-wrap gap-3 mt-6">
            {project.additional?.map((item, idx) => (
              <Tag key={`additional-${idx}`} type="additional">
                {item.title}
              </Tag>
            ))}
            {project.skills?.map((skill, idx) => (
              <Tag key={`skill-${idx}`} type="skill">
                {skill}
              </Tag>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectDesc;
