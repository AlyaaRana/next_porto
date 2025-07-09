import Link from "next/link";
import TimeZoneClock from "./time-zone";

const Navbar = () => {
  return (
    <nav className="p-4 flex justify-between items-center">
      <div className="text-xl font-bold text-[var(--font-color-navbar)]">AlyaaN.Orbit</div>
      <div className="space-x-4 text-[var(--font-color-navbar)]">
        <Link href="/">Home</Link>
        <Link href="/">Experience</Link> 
        <Link href="/">Project</Link> 
        {/* <Link href="/">Digital Product</Link>  */}
        <Link href="/">Contact</Link> 
        <TimeZoneClock />       
      </div>
    </nav>
  );
};

export default Navbar;
