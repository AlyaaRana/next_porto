import { FaGraduationCap } from "react-icons/fa";

const Education = () => {
  const items = [

    {
      year: "2025 - Present",
      title: "Binus University of Semarang",
      desc: "Currently studying Computer Science at Binus University with a growing interest in data science. I'm actively honing both technical and interpersonal skills through academic work, projects, and networking opportunities building a strong foundation for my future career.",
      position: "right",
      logo: ""
    },
    {
      year: "2022 -2025",
      title: "SMK Raden Umar Said Kudus",
      desc: "Graduated from a vocational high school majoring in Software Engineering (RPL). Learned both frontend and backend development through hands-on practice. Did an internship using PHP & CodeIgniter, and built a mobile app using Flutter with my team as our final project. Gained real experience working in teams and solving practical coding problems.",
      gpa: "GPA: 88.4 / 100",
      position: "left",
      logo: <FaGraduationCap className="text-yellow-400 text-xl" />,
    },
  ];

  return (
    <section id="education" className="scroll-mt-20 relative w-full min-h-screen bg-black text-white px-6 md:px-32 pt-[100px] pb-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold">Education</h2>
        <p className="mt-4 text-gray-400 max-w-xl mx-auto">
          My formal education journey from vocational school to university.
        </p>
      </div>

      <div className="relative flex flex-col items-center">
        {/* Vertical line */}
        <div className="absolute w-1 bg-yellow-400 h-full left-1/2 transform -translate-x-1/2 z-0" />

        {items.map((item, index) => (
          <div
            key={index}
            className={`w-full md:w-1/2 mb-20 z-10 ${item.position === "left"
                ? "self-start text-right pr-6"
                : "self-end text-left pl-6"
              }`}
          >
            <div className="bg-zinc-900 border border-yellow-400 rounded-2xl p-6 shadow-md">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-yellow-300">{item.year}</span>
                {item.logo}
              </div>
              <h3 className="text-lg font-bold">{item.title}</h3>
              <p className="mt-2 text-gray-300 text-sm">{item.desc}</p>
              {item.gpa && (
                <p className="mt-1 text-yellow-300 text-sm font-semibold">{item.gpa}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
