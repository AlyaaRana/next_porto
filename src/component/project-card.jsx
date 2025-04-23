const ProjectCard = ({ title, description, image }) => {
    return (
      <div className="project-card">
        
        <div className="flex flex-col md:flex-row justify-between h-[58px] label-project-card ">
            <text>{title}</text>
            <button>
                <img src="/arrow.svg" alt="arrow" />
            </button>
        </div>
        <img src={image} alt={title} className="w-full h-auto object-cover max-h-70" />
      </div>
    );
  };
  
  export default ProjectCard;
  