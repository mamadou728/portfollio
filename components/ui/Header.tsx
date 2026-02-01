"use client";

import { motion } from "framer-motion";

export default function Header() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100; // Adjusted for floating header
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
      className="fixed top-[clamp(0.75rem,2vw,1.5rem)] left-0 right-0 z-[100] px-[clamp(1rem,5vw,8rem)]"
      style={{ backgroundColor: 'transparent' }}
    >
      <nav className="flex items-center justify-between gap-4 lg:gap-6 px-[clamp(1rem,3vw,2rem)] py-[clamp(0.5rem,1.5vw,0.75rem)] rounded-xl bg-black/80 backdrop-blur-md border border-white/10 shadow-xl shadow-black/10 w-full">
        {/* Brand */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="px-4 py-2 text-base md:text-lg font-bold text-white hover:text-zinc-300 transition-colors rounded-full"
        >
          MK.
        </button>

        {/* Navigation Links */}
        <div className="flex items-center pr-2 gap-1">
          {["Work", "Journey", "Orbit"].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item === "Work" ? "projects" : item === "Journey" ? "timeline" : "skills")}
              className="px-3 md:px-4 py-2 text-xs md:text-sm font-medium text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-all hidden sm:block"
            >
              {item}
            </button>
          ))}

          {/* Separator */}
          <div className="w-px h-4 bg-white/10 mx-2 hidden sm:block" />

          {/* Contact Button */}
          <a 
            href="#contact"
            className="px-4 md:px-5 py-1.5 md:py-2 text-xs md:text-sm font-medium bg-white text-black rounded-full hover:bg-zinc-200 transition-colors"
          >
            Contact
          </a>
        </div>
      </nav>
    </motion.header>
  );
}
