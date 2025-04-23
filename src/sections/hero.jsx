const Hero = () => {
  return (
    <section className="relative w-full min-h-screen flex justify-center bg-black text-white overflow-hidden px-[85px] py-[100px]">
      
      <div className=" text-center ">

        <h1 className="text-[96px] font-extrabold mb-6">
          ALYAA RANA RAYA
        </h1>

        <div className="flex flex-col md:flex-row justify-between items-start space-y-6 md:space-y-0 md:space-x-6">
          <p className="job">Fullstack developer</p>
          <button className="linkedin border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black transition px-6 py-2 rounded-full text-sm">
            Let’s connect →
          </button> 
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:space-y-0 md:space-x-6 mt-4 py-[50px]">
          <p className="headline">
            Hi, i’m Alyaa a designer and full-stack developer with focus on
            Flutter
          </p>
          <p className="body">
            As a recent graduate and current student, I specialize in Flutter
            and am expanding into full-stack development. With strong
            problem-solving and collaboration skills, I aim to contribute to
            impactful, user-driven projects.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Hero;
