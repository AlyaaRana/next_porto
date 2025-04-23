"use client";
import { useState, useRef, useEffect } from "react";
import { projectData } from "@/data/project-data";
import ProjectCard from "@/component/project-card";

const Projects = () => {
  const [selected, setSelected] = useState("All");
  const scrollRef = useRef(null);
  const [scrollPercent, setScrollPercent] = useState(0);

  const filtered =
    selected === "All"
      ? projectData
      : projectData.filter((project) => project.type === selected);

  // Scroll event handler buat update scroll percent
  useEffect(() => {
    const handleScroll = () => {
      const container = scrollRef.current;
      if (!container) return;

      const scrollTop = container.scrollTop;
      const scrollHeight = container.scrollHeight - container.clientHeight;
      const percent = (scrollTop / scrollHeight) * 100;

      setScrollPercent(percent);

      // Loop ke awal kalau udah sampe bawah
      if (scrollTop >= scrollHeight - 2) {
        setTimeout(() => {
          container.scrollTo({ top: 0, behavior: "smooth" });
        }, 500); // delay biar nggak kerasa terlalu mendadak
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

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center bg-black text-white overflow-hidden px-[85px] py-[100px]">
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
              {filtered.map((project, idx) => (
                <div
                  key={project.id}
                  className="scroll-snap-start"
                  style={{
                    height: "392px",
                    marginTop: idx === 0 ? "0" : "-58px",
                    paddingTop: idx !== 0 ? "5px" : "0",
                    zIndex: filtered.length - idx,
                  }}
                >
                  <div className="relative z-10">
                    <ProjectCard {...project} />
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
