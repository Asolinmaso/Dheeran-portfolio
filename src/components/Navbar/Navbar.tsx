"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="relative h-[72px] border-b border-cyan-500/20 z-50">
        <div className="h-full px-5 md:px-16 flex items-center justify-between">
          
          {/* Logo */}
          <h1 className="text-[#16D4F0] text-[20px] font-bold">
            DHEERAN
          </h1>

          {/* Desktop Navbar - NO CHANGES */}
          <nav className="hidden md:block absolute left-1/2 -translate-x-1/2">
            <ul className="flex items-center gap-12 text-[#7E7E7E] text-[14px]">
              <li><a href="#about">ABOUT</a></li>
              <li><a href="#projects">PROJECT</a></li>
              <li><a href="#awards">AWARDS</a></li>
              <li><a href="#contact">CONTACT</a></li>
            </ul>
          </nav>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black border-b border-cyan-500/20">
          <nav>
            <ul className="flex flex-col items-center py-6 gap-6 text-white text-sm">
              <li>
                <a href="#about" onClick={() => setIsOpen(false)}>
                  ABOUT
                </a>
              </li>

              <li>
                <a href="#projects" onClick={() => setIsOpen(false)}>
                  PROJECT
                </a>
              </li>

              <li>
                <a href="#awards" onClick={() => setIsOpen(false)}>
                  AWARDS
                </a>
              </li>

              <li>
                <a href="#contact" onClick={() => setIsOpen(false)}>
                  CONTACT
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </>
  );
};

export default Navbar;