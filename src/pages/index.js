import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Hero from "@/sections/hero";
import Navbar from "@/component/navbar";
import Experience from "@/sections/experience";
import Projects from "@/sections/projects";
import Testimonial from "@/sections/testimonial";
import Education from "@/sections/education";
import Gallery from "@/sections/gallery";
import Footer from "@/sections/footer";
import Certificate from "@/sections/certificate";
import DigitalProduct from "@/sections/digital_product";
import DevTools from "@/sections/dev_tools";
import Languages from "@/sections/languanges";

export default function Home() {
  return (
    <div className="bg-[var(--background)] text-[var(--foreground)] min-h-screen ">
      <Navbar className="sticky top-0 z-50" />
      <Hero />
      <DevTools />
      <Education />
      <Experience />
      <Projects />
      <Languages />
      <Testimonial />
      {/* <DigitalProduct /> */}
      {/* <Gallery /> */}
      {/* service sekalian sama contact aja ga si?
      <Service/> */}
      {/* <Certificate /> */}
      <Footer />
    </div>
  );
}
