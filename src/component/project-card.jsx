const ProjectCard = ({ title, description, image }) => {
    return (
      <div className="project-card mx-auto">
        
        <div className="flex flex-row justify-between items-center h-[65px] label-project-card">
            <text className="text-sm sm:text-base md:text-lg lg:text-xl">{title}</text>
            <button>
                <img src="/arrow.svg" alt="arrow" className="w-4 h-4 md:w-5 md:h-5" />
            </button>
        </div>
        <img src={image} alt={title} className="w-full h-auto object-cover max-h-150" />
      </div>
    );
  };
  
  export default ProjectCard; 