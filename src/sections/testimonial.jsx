import Slider from "react-slick";
import { FaQuoteRight } from "react-icons/fa";

const testimonials = [
  {
    name: "Fattah Anggit Al Dzakwan",
    date: "July 2025",
    role: "Friend Team at Vocation High School",
    content:
      "Alyaa anak yang rajin, disiplin, dan suka belajar hal-hal baru. Waktu kita satu tim, aku lihat sendiri gimana dia selalu kasih best effortnya, tanggung jawab banget sama tugasnya, tahu kapan harus minta assist dari teman satu tim, dan cepat banget nyelesain tugas yang dikasih",
  },
  {
    name: "Pak Ardianto",
    date: "July 2025",
    role: "P-Engineering Polytron (PT Hartono Istana Teknologi)",
    content:
      "Saya senang menjadi pembimbing PKL AlyaaRana. Ia memiliki dasar pengetahuan yang kuat di bidang pemrograman web dan menunjukkan kemauan belajar yang besar serta mudah memahami instruksi yang diberikan. Selama PKL, AlyaaRana terlibat dalam proyek Dashboard Data Sensor dan Website Aplikasi Monitoring Gudang , dan berhasil berkontribusi dalam pengembangan front end dari website tersebut. Saya berharap AlyaaRana terus mengembangkan kemampuannya dan berkarya di bidang pemrograman .",
  },
  {
    name: "Syahran Fadhil Dafanindra",
    date: "July 2025",
    role: "Friend Team at Vocation High School",
    content:
      "Alyaa is a highly disciplined and motivated individual. She always shows a strong willingness to start any task as soon as it’s given. She consistently aims to complete her work as quickly as possible, while still maintaining excellent results. Her drive and efficiency make her a valuable contributor to any team.",
  },
  // {
  //   name: "Ratih Shinta Puspitasari",
  //   date: "July 2025",
  //   role: "Friend Team at Vocation High School",
  //   content:
  //     "Alyaa is a very hardworking and responsible person. She always gives her best effort in every task she undertakes. Her dedication and commitment to her work are truly commendable, and she consistently strives to achieve the best results possible.",
  // }
];

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // tablet
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768, // hp
        settings: { slidesToShow: 1 },
      },
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
      </div>

      <Slider {...settings}>
        {testimonials.map((item, i) => (
          <div key={i} className="px-4">
            <div className="bg-zinc-900 text-white p-6 rounded-2xl shadow-md h-full flex flex-col justify-between">
              <p className="text-[15px] leading-relaxed mb-4 text-gray-300 italic">
                "{item.content}"
              </p>
              <div className="flex justify-between items-end">
                <div>
                  <p className="font-semibold text-white">
                    {item.name} •{" "}
                    <span className="text-xs text-gray-500">{item.date}</span>
                  </p>

                  <p className="text-xs text-gray-500">{item.role}</p>
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
