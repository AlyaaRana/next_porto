"use client";
import { projectData } from "@/data/project-data";
import { useMemo, useState, useEffect } from "react";
import Tag from "@/component/tag";
import QRCode from "react-qr-code";

const ProjectDesc = ({ projectId }) => {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  const project = useMemo(
    () => projectData.find((p) => p.id === Number(projectId)),
    [projectId]
  );

  // Get QR code value: prioritize barcode field, then first link
  const qrCodeValue = useMemo(() => {
    if (!project) return null;
    
    if (project.barcode) return project.barcode;
    
    
    return null;
  }, [project]);

  console.log("Project data:", project); // Debug log
  console.log("QR Code value:", qrCodeValue); // Debug log

  if (!project) {
    return <p className="text-white">Project not found 😵</p>;
  }

  return (
    <section className="relative w-full h-auto bg-[#2C2C2C] text-white overflow-hidden mx-[60px] px-[60px] py-[90px]">
      <div className="flex flex-col md:flex-row gap-10">
        {/* LEFT SIDE */}
        <div className={`text-left ${qrCodeValue ? 'w-full md:w-1/2' : 'w-full'}`}>
          {/* Title + Links */}
          <p className="h3">{project.title}</p>
          {project.links?.length > 0 ? (
            <div className="flex gap-3 flex-wrap items-center">
              {project.links.map((link, idx) => (
                <a
                  key={idx}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline flex items-center gap-1"
                >
                  🔗 {link.type}
                </a>
              ))}
            </div>
          ) : (
            <p className="text-sm text-gray-400 italic mt-2">No links available</p>
          )}

          {/* Project Info: Status, Start Date, End Date */}
          <div className="mt-6 space-y-2">
            {/* Status */}
            {project.status && (
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-400">Status:</span>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  project.status === 'Done' 
                    ? 'bg-green-900 text-green-300' 
                    : project.status === 'In Progress'
                    ? 'bg-yellow-900 text-yellow-300'
                    : 'bg-gray-700 text-gray-300'
                }`}>
                  {project.status}
                </span>
              </div>
            )}

            {/* Timeline */}
            {(project.startDate || project.endDate) && (
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-400">Timeline:</span>
                <span className="text-sm text-white">
                  {project.startDate && project.endDate 
                    ? `${project.startDate} - ${project.endDate}`
                    : project.startDate 
                    ? `${project.startDate} - Present`
                    : project.endDate 
                    ? `Completed ${project.endDate}`
                    : 'Timeline not specified'
                  }
                </span>
              </div>
            )}
          </div>

          {/* Description */}
          <p className="body mt-4">{project.description}</p>
        </div>

        {/* RIGHT SIDE - QR Code - Only show if barcode exists */}
        {qrCodeValue && (
          <div className="flex items-center justify-center w-full md:w-1/2">
            <div className="flex flex-col items-center gap-2">
              <div className="bg-white p-4 rounded-lg">
                {mounted ? (
                  <QRCode 
                    value={qrCodeValue} 
                    size={160}
                    style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                  />
                ) : (
                  <div className="w-40 h-40 bg-gray-200 animate-pulse rounded flex items-center justify-center">
                    <p className="text-gray-500 text-sm">Loading QR...</p>
                  </div>
                )}
              </div>
              <p className="text-sm text-gray-300">Scan to view prototype</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectDesc;
