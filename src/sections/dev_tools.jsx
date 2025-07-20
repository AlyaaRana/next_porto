const tools = [
  { src: "/icons/flutter.svg", alt: "Flutter" },
  { src: "/icons/react.svg", alt: "React" },
  { src: "/icons/php.svg", alt: "PHP" },
  { src: "/icons/codeigniter.svg", alt: "CodeIgniter" },
  { src: "/icons/git.svg", alt: "Git" },
  { src: "/icons/vscode.svg", alt: "VS Code" },
  { src: "/icons/figma.png", alt: "Figma" },
  { src: "/icons/laravel.svg", alt: "Laravel" },
  { src: "/icons/mysql.png", alt: "MySQL" },

];

const DevTools = () => {
  return (
    <div className="w-full" style={{ backgroundColor: "#1f1f1f" }}>
      <section className="scroll-mt-25 relative w-full flex justify-center text-white overflow-hidden px-0 pt-[60px] pb-[30px]">
      <div className="w-full max-w-7xl text-center space-y-6">
        <div className="text-center mb-12">
        <p className="text-4xl font-bold">Tools & Technologies</p>
        <p className="mt-4 text-gray-400 max-w-xl mx-auto">
          These are some of the technologies and tools I’ve worked with throughout my journey in software engineering and development.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-10">
        {tools.map((tool, index) => (
          <div
            key={index}
            className="w-24 h-24 flex items-center justify-center grayscale hover:grayscale-0 transition duration-300"
          >
            <img 
              src={tool.src} 
              alt={tool.alt} 
              className="w-20 h-20 object-contain" 
              style={{ 
                width: '80px', 
                height: '80px',
                objectFit: 'contain'
              }}
            />
          </div>
        ))}
      </div>
      </div>
    </section>
    </div>
  );
};

export default DevTools;
