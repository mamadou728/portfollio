"use client";

import { motion } from "framer-motion";

export default function Header() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 50; // Adjusted for compact floating header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const springTransition = { 
    type: "spring", 
    stiffness: 300, 
    damping: 30 
  };

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={springTransition}
      className="fixed top-[clamp(0.375rem,1vw,0.75rem)] left-0 right-0 z-[100] px-[clamp(0.5rem,2.5vw,4rem)]"
      style={{ backgroundColor: 'transparent' }}
    >
      <nav className="flex items-center justify-between gap-2 lg:gap-3 px-[clamp(0.5rem,1.5vw,1rem)] py-[clamp(0.25rem,0.75vw,0.375rem)] rounded-lg bg-black/80 backdrop-blur-md border border-white/10 shadow-xl shadow-black/10 w-full max-w-[50%] mx-auto">
        {/* Brand */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="px-2 py-1 text-sm md:text-base font-bold text-white hover:text-zinc-300 transition-colors rounded-full"
        >
          MK.
        </button>

        {/* Navigation Links */}
        <div className="flex items-center pr-1 gap-0.5">
          {["Work", "Journey", "Orbit"].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item === "Work" ? "projects" : item === "Journey" ? "timeline" : "skills")}
              className="px-1.5 md:px-2 py-1 text-[10px] md:text-xs font-medium text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-all hidden sm:block"
            >
              {item}
            </button>
          ))}

          {/* Separator */}
          <div className="w-px h-2 bg-white/10 mx-1 hidden sm:block" />

          {/* Contact Button */}
          <a 
            href="#contact"
            className="px-2 md:px-2.5 py-0.5 md:py-1 text-[10px] md:text-xs font-medium bg-white text-black rounded-full hover:bg-zinc-200 transition-colors"
          >
            Contact
          </a>
        </div>
      </nav>
    </motion.header>
  );
}
