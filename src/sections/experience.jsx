import React, { useRef, useEffect, useState } from "react";
import {
  IconArrowWaveRightUp,
  IconTableColumn
} from "@tabler/icons-react";
import { cn } from "@/lib/utils";

const items = [
  {
    title: "Flutter Developer Intern at PIKPO, Singapore",
    description:
      "Contributed to production-level Flutter apps using BLoC architecture. Conducted weekly code reviews, implemented UI from Figma, and explored automation workflows using Retool. Practiced effective team collaboration and used English in daily communication.",
    date: "Nov 2024 – Mar 2025",
    location: "Remote · Singapore",
    header: (
      <img
        src="/pikpo-1.jpeg"
        alt="PIKPO Internship"
        className="w-full h-full object-cover object-top rounded-xl"
      />
    ),
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />
  },
  {
    title: "Software Developer Intern at Polytron Indonesia",
    description:
      "Developed real-time dashboards & alert systems using PHP & CodeIgniter. Collaborated with engineering teams on IoT-integrated systems. Gained hands-on experience in backend/frontend dev and worked closely with interns from BINUS, UNDIP, and Sanata Dharma.",
    date: "Oct 2024 – Mar 2025",
    location: "On-site · Kudus, Central Java",
    header: (
      <img
        src="/pkl-1.jpg"
        alt="Polytron Internship"
        className="w-full h-full object-cover object-top rounded-xl"
      />
    ),
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />
  }
];



const Experience = () => {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const repeatedItems = [...items, ...items];

  useEffect(() => {
    const el = scrollRef.current;

    const handleScroll = () => {
      const index = Math.round(el.scrollLeft / el.clientWidth) % items.length;
      setActiveIndex(index);

      if (el.scrollLeft >= el.scrollWidth / 2) {
        el.scrollLeft = 0;
      }
    };

    const autoScroll = setInterval(() => {
      const nextIndex = (activeIndex + 1) % items.length;
      scrollToIndex(nextIndex);
    }, 5000);

    el.addEventListener("scroll", handleScroll);
    return () => {
      el.removeEventListener("scroll", handleScroll);
      clearInterval(autoScroll);
    };
  }, [activeIndex]);

  const scrollToIndex = (index) => {
    const el = scrollRef.current;
    if (el) {
      el.scrollTo({
        left: index * el.clientWidth,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="w-full" style={{ backgroundColor: "#1f1f1f" }}>
      <section id="experience" className="scroll-mt-25 relative w-full flex justify-center text-white overflow-hidden px-0 pt-[100px] pb-[30px]">
        <div className="w-full max-w-7xl text-center space-y-6">
          <div className="text-4xl font-bold">Experience</div>
          <p className="mt-4 text-gray-400 max-w-xl mx-auto">
            Here are some of my work experiences, internships, social activities,
            
          </p>
          <div
            ref={scrollRef}
            className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth scrollbar-hide"
          >
            {repeatedItems.map((item, i) => (
              <div
                key={i}
                className="snap-start shrink-0 w-full relative transition-transform duration-700 ease-in-out"
              >
                <ExperienceCard
                  title={item.title}
                  description={item.description}
                  date={item.date}
                  location={item.location}
                  header={item.header}
                  icon={item.icon}
                />
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-4 gap-2">
            {items.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollToIndex(i)}
                className={cn(
                  "w-2.5 h-2.5 rounded-full",
                  activeIndex === i
                    ? "bg-white"
                    : "bg-neutral-500 opacity-50"
                )}
              ></button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Experience;

const ExperienceCard = ({ title, description, header, icon, date, location }) => {
  return (
    <div className="w-full h-full px-4 md:px-16 box-border">
      <div className="w-full flex flex-col rounded-xl border border-neutral-200 bg-white p-6 dark:border-white/[0.2] dark:bg-black shadow-md hover:shadow-xl transition-transform duration-700 ease-in-out">
        <div className="w-full h-64 md:h-80 rounded-xl overflow-hidden mb-4">
          {header}
        </div>
        <div className="flex items-center gap-2 text-neutral-500 mb-1">
          {icon}
        </div>
        <div className="text-lg font-bold text-neutral-700 dark:text-neutral-100">{title}</div>
        <div className="text-sm text-neutral-400 dark:text-neutral-400">{date} · {location}</div>
        <div className="text-sm text-neutral-600 dark:text-neutral-300 mt-2">{description}</div>
      </div>
    </div>
  );
};
