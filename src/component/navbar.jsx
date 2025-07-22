"use client";
import Link from "next/link";
import TimeZoneClock from "./time-zone";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="sticky top-0 z-50 p-4 bg-[var(--background)] backdrop-blur-md">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-bold text-[var(--font-color-navbar)]">
          AlyaaN.Orbit
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-4 text-[var(--font-color-navbar)] items-center">
          <Link href="#home" className="hover:text-yellow-400 transition-colors">Home</Link>
          <Link href="#education" className="hover:text-yellow-400 transition-colors">Education</Link> 
          <Link href="#experience" className="hover:text-yellow-400 transition-colors">Experience</Link> 
          <Link href="#projects" className="hover:text-yellow-400 transition-colors">Project</Link> 
          <Link href="#contact" className="hover:text-yellow-400 transition-colors">Contact</Link> 
          <TimeZoneClock />       
        </div>

        {/* Mobile Hamburger Button */}
        <button 
          className="md:hidden text-[var(--font-color-navbar)] focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <div className="space-y-1">
            <div className={`w-6 h-0.5 bg-current transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
            <div className={`w-6 h-0.5 bg-current transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></div>
            <div className={`w-6 h-0.5 bg-current transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
          </div>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${
        isMenuOpen 
          ? 'max-h-64 opacity-100 mt-4' 
          : 'max-h-0 opacity-0 overflow-hidden'
      }`}>
        <div className="flex flex-col space-y-3 text-[var(--font-color-navbar)] bg-[var(--background)] rounded-lg p-4 border border-gray-700">
          <Link 
            href="#home" 
            className="hover:text-yellow-400 transition-colors py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link 
            href="#education" 
            className="hover:text-yellow-400 transition-colors py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Education
          </Link> 
          <Link 
            href="#experience" 
            className="hover:text-yellow-400 transition-colors py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Experience
          </Link> 
          <Link 
            href="#projects" 
            className="hover:text-yellow-400 transition-colors py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Project
          </Link>
          <Link 
            href="#contact" 
            className="hover:text-yellow-400 transition-colors py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
          <div className="pt-2 border-t border-gray-700">
            <TimeZoneClock />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
