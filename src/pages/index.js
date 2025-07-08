import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Hero from "@/sections/hero";
import Navbar from "@/component/navbar";
import Experience from "@/sections/experience";
import Projects from "@/sections/projects";
import Gallery from "@/sections/gallery";
import Footer from "@/sections/footer";
import Certificate from "@/sections/certificate";
import DigitalProduct from "@/sections/digital_product";

export default function Home() {
  return (
    <div className="bg-[var(--background)] text-[var(--foreground)] min-h-screen ">
      <Navbar className="sticky top-0 z-50" />
      <Hero />
      <Experience />
      <Projects />
      {/* <DigitalProduct /> */}
      {/* <Gallery /> */}
      {/* service sekalian sama contact aja ga si?
      <Service/> */}
      {/* <Certificate /> */}
      <Footer />
    </div>
  );
}
