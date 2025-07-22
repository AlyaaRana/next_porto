import { useState } from "react";
import Slider from "react-slick";
import { FaQuoteRight } from "react-icons/fa";
import Image from "next/image";

const testimonials = [
  {
    name: "Fattah Anggit Al Dzakwan",
    date: "July 2025",
    role: "Friend Team at Vocation High School",
    gender: "male",
    content: {
      id: "Alyaa anak yang rajin, disiplin, dan suka belajar hal-hal baru. Waktu kita satu tim, aku lihat sendiri gimana dia selalu kasih best effortnya, tanggung jawab banget sama tugasnya, tahu kapan harus minta assist dari teman satu tim, dan cepat banget nyelesain tugas yang dikasih",
      en: "Alyaa is diligent, disciplined, and loves learning new things. When we were in a team, I saw firsthand how she always gave her best effort, was very responsible with her tasks, knew when to ask for help, and finished tasks quickly.",
    },
  },
  {
    name: "Pak Ardianto",
    date: "July 2025",
    role: "P-Engineering Polytron (PT Hartono Istana Teknologi)",
    gender: "male",
    content: {
      id: "Saya senang menjadi pembimbing PKL AlyaaRana. Ia memiliki dasar pengetahuan yang kuat di bidang pemrograman web dan menunjukkan kemauan belajar yang besar serta mudah memahami instruksi yang diberikan. Selama PKL, AlyaaRana terlibat dalam proyek Dashboard Data Sensor dan Website Aplikasi Monitoring Gudang , dan berhasil berkontribusi dalam pengembangan front end dari website tersebut. Saya berharap AlyaaRana terus mengembangkan kemampuannya dan berkarya di bidang pemrograman.",
      en: "I was glad to be AlyaaRana’s internship mentor. She has a strong foundation in web programming and showed great willingness to learn and easily understood instructions. She contributed to a Sensor Data Dashboard and Warehouse Monitoring Web App. I hope she continues to grow and create in programming.",
    },
  },
  {
    name: "Syahran Fadhil Dafanindra",
    date: "July 2025",
    role: "Friend Team at Vocation High School",
    gender: "male",
    content: {
      id: "Alyaa adalah pribadi yang sangat disiplin dan termotivasi. Dia selalu menunjukkan keinginan yang kuat untuk memulai tugas segera setelah diberikan. Dia secara konsisten menyelesaikan pekerjaannya secepat mungkin dengan hasil yang sangat baik. Semangat dan efisiensinya menjadikannya kontributor berharga bagi tim mana pun.",
      en: "Alyaa is a highly disciplined and motivated individual. She always shows a strong willingness to start any task as soon as it’s given. She consistently aims to complete her work quickly while maintaining excellent results. Her drive and efficiency make her a valuable contributor to any team.",
    },
  },
];

const getAvatar = (gender, name) => {
  if (gender === "male") return "/avatar-male.png";
  if (gender === "female") return "/avatar-female.png";
  return "/avatar-default.png";
};

const Testimonial = () => {
  const [language, setLanguage] = useState("id");

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section
      id="testimonial"
      className="scroll-mt-20 w-full min-h-screen bg-black text-white px-[85px] py-[100px]"
    >
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold">Testimonial</h2>
        <p className="mt-4 text-gray-400 max-w-xl mx-auto">
          Real stories from people I’ve worked with.
        </p>
        <button
          className="mt-6 px-4 py-1 text-sm bg-gray-800 text-gray-300 rounded hover:bg-gray-700 transition"
          onClick={() =>
            setLanguage((prev) => (prev === "id" ? "en" : "id"))
          }
        >
          {language === "id" ? "Translate to English" : "Translate to Indonesian"}
        </button>
      </div>

      <Slider {...settings}>
        {testimonials.map((item, i) => (
          <div key={i} className="px-4">
            <div className="bg-zinc-900 text-white p-6 rounded-2xl shadow-md h-full flex flex-col justify-between">
              <p className="text-[15px] leading-relaxed mb-4 text-gray-300 italic">
                "{item.content[language]}"
              </p>
              <div className="flex justify-between items-end gap-3">
                <div className="flex items-center gap-3">
                  {/* <Image
                    src={getAvatar(item.gender, item.name)}
                    alt="Avatar"
                    width={40}
                    height={40}
                    className="rounded-full object-cover"
                  /> */}
                  <div>
                    <p className="font-semibold text-white text-sm">
                      {item.name} •{" "}
                      <span className="text-xs text-gray-500">{item.date}</span>
                    </p>
                    <p className="text-xs text-gray-500">{item.role}</p>
                  </div>
                </div>
                <FaQuoteRight className="text-xl text-yellow-400" />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Testimonial;
