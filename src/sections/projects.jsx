"use client";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation"; 
// import { projectData } from "@/data/project-data";
import ProjectCard from "@/component/project-card";
import { projectData } from "@/data/project-data"

const Projects = () => {
  const [selected, setSelected] = useState("All");
  const scrollRef = useRef(null);
  const [scrollPercent, setScrollPercent] = useState(0);
  const router = useRouter(); 
  const cardData = projectData;
  // const cardData = [
  //   {id: 1, type: "Web", title: "AyamKu App", description: "Description 1", image: "/ayamku-1.jpeg"},
  //   {id: 2, type: "Mobile", title: "Garapan App", description: "Description 2", image: "/garapan-1.png"},  
  //   {id: 3, type: "Web", title: "ILearn App", description: "Description 3", image: "/ilearn-1.jpeg"},
  // ]

  const filtered =
    selected === "All"
      ? projectData
      : projectData.filter((project) => project.type === selected);

  // Scroll event handler to update scroll percent
  useEffect(() => {
    const handleScroll = () => {
      const container = scrollRef.current;
      if (!container) return;

      const scrollTop = container.scrollTop;
      const scrollHeight = container.scrollHeight - container.clientHeight;
      const percent = (scrollTop / scrollHeight) * 100;

      setScrollPercent(percent);

      // Loop to the top if scrolled to the bottom
      if (scrollTop >= scrollHeight - 2) {
        setTimeout(() => {
          container.scrollTo({ top: 0, behavior: "smooth" });
        }, 500); // Delay to avoid abrupt behavior
      }
    };

    const container = scrollRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  const handleProjectClick = (projectId) => {
    router.push(`/project?id=${projectId}`);
  };

  return (
    <section id="projects" className="scroll-mt-20 relative w-full min-h-screen flex flex-col items-center justify-center bg-black text-white overflow-hidden px-6 md:px-20">
      <div className="text-center space-y-[15px]">
        <p className="h3">Projects</p>
        <p className="body">
          lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum
          dolor sit amet lorem ipsum dolor sit amet
        </p>

        <div className="relative mt-12 flex items-start justify-center">
          <div
            ref={scrollRef}
            className="relative max-h-[452px] overflow-y-scroll scrollbar-hide pr-[25px]"
            style={{
              scrollSnapType: "y mandatory",
            }}
          >
            <div className="relative">
              {cardData.map((project, idx) => (
                <div
                  key={project.id}
                  className="scroll-snap-start cursor-pointer"
                  style={{
                    height: "392px",
                    marginTop: idx === 0 ? "0" : "-58px",
                    paddingTop: idx !== 0 ? "5px" : "0",
                    zIndex: cardData.length - idx,
                  }}
                  onClick={() => handleProjectClick(project.id)} 
                >
                  <div className="relative z-10">
                    <ProjectCard 
                      title={project.title}
                      description={project.description}
                      image={project.image}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Custom Scrollbar */}
          <div className="absolute right-0 h-[392px] w-[10px] bg-[var(--color-secondary)] rounded-[30px] overflow-hidden">
            <div
              className="bg-[var(--color-back-scroll)] rounded-[30px] transition-all duration-300"
              style={{
                height: `${scrollPercent}%`,
                width: "100%",
              }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;