import FormService from "@/component/form_service";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      id="contact"
      className="relative w-full bg-gradient-to-b from-black via-[#1c1c1c] to-[#2a2a2a] text-white overflow-hidden px-[85px] pt-[100px] pb-[40px] flex flex-col items-center justify-center"
    >
      {/* Title */}
      <div className="text-center mb-10 max-w-2xl">
        <p className="h3">Let's Connect</p>
        <p className="body">
          Have an idea, project, or collaboration in mind? Feel free to reach
          out!
        </p>
      </div>

      {/* Form */}
      <div className="w-full max-w-xl">
        <FormService />
      </div>

      {/* Social Media */}
      <div className="flex space-x-6 mt-12 text-xl text-white">
        <a
          href="https://instagram.com/alyaa_rn.ry"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition"
        >
          <FaInstagram />
        </a>
        <a
          href="https://github.com/AlyaaRana"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition"
        >
          <FaGithub />
        </a>
        <a
          href="http://linkedin.com/in/alyaa-rana-raya-32a763271/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition"
        >
          <FaLinkedin />
        </a>
      </div>

      {/* Divider */}
      <div className="w-full h-[1px] bg-gray-700 mt-12 mb-6" />

      {/* Copyright */}
      <p className="text-sm text-gray-500 text-center">
        © {new Date().getFullYear()} Alyaa Dev. Built with ❤️ using Next.js &
        TailwindCSS
      </p>
    </footer>
  );
};

export default Footer;
