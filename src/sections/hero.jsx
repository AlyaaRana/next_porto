const Hero = () => {
  return (
    <section
      id="home"
      className="scroll-mt-20 relative w-full min-h-screen flex justify-center bg-black text-white overflow-hidden px-[85px] pt-[120px] pb-[50px]"
    >
      <div className=" text-center ">
        <div className="relative w-full bg-[#1f1f1f] rounded-xl h-[210px] flex flex-col items-center z-10 mb-[60px]">
          <img
            src="/alyaa-img.png"
            alt="Alyaa"
            className="absolute left-1/2 -translate-x-1/2 -top-[90px] w-[350px] h-[300px] object-cover z-20"
          />
          <h1 className="absolute left-1/2 -translate-x-1/2 -bottom-[32px] w-full text-center text-[90px] font-extrabold leading-none z-30">
            <span className="bg-gradient-to-b from-white to-pink-300 bg-clip-text text-transparent">
              ALYAA RANA RAYA
            </span>
          </h1>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start space-y-6 md:space-y-0 md:space-x-6">
          <p className="job">Flutter & Fullstack developer</p>
          <a
            href="https://linkedin.com/in/alyaa-rana-raya-32a763271/"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black transition px-6 py-2 rounded-full text-sm cursor-pointer inline-block text-center"
          >
            Let's connect →
          </a>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:space-y-0 md:space-x-[100px] mt-4 py-[50px]">
          <p className="headline">
            Hi, I'm Alyaa a developer who crafts clean and intuitive Flutter
            apps, always putting users first.
          </p>
          <p className="body">
            I'm a Computer Science student at Binus University with a background
            in vocational software engineering. I specialize in Flutter and am
            expanding into full-stack and data science. Known for being
            disciplined, curious, and always on time, I build apps that are both
            functional and meaningful. Outside coding, I enjoy space topics and
            mentoring others.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
