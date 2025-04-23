import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Hero from "@/sections/hero";
import Navbar from "@/component/navbar";
import Experience from "@/sections/experience";
import Projects from "@/sections/projects";
import Gallery from "@/sections/gallery";
import Service from "@/sections/services";
import Contact from "@/sections/contact";

export default function Home() {
  return (
    <div className="bg-[var(--background)] text-[var(--foreground)] min-h-screen ">
      <Navbar />
      <Hero />
      {/* <Experience /> */}
      <Projects />
      <Service/>
      <Gallery />
      <Contact />
    </div>
  );
}
