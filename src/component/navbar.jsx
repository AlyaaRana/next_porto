import Link from "next/link";
import TimeZoneClock from "./time-zone";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 p-4 flex justify-between items-center bg-[var(--background)] backdrop-blur-md">
      <div className="text-xl font-bold text-[var(--font-color-navbar)]">AlyaaN.Orbit</div>
      <div className="space-x-4 text-[var(--font-color-navbar)]">
        <Link href="#home">Home</Link>
        <Link href="#education">Education</Link> 
        <Link href="#experience">Experience</Link> 
        <Link href="#projects">Project</Link> 
        {/* <Link href="#testimonial">Testimoni</Link>  */}
        {/* <Link href="/">Digital Product</Link>  */}
        {/* <Link href="#contact">Contact</Link>  */}
        <TimeZoneClock />       
      </div>
    </nav>
  );
};

export default Navbar;
