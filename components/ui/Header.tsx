"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Future Projects", id: "projects" },
  { label: "Area of Focus", id: "focus" },
  { label: "My Journey", id: "timeline" },
  { label: "Orbit", id: "orbit" },
  { label: "Contact", id: "contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setMenuOpen(false);
    if (id === "contact") {
      const el = document.getElementById("contact");
      el?.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      const offset = 60;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  const springTransition = {
    type: "spring" as const,
    stiffness: 300,
    damping: 30,
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={springTransition}
      className="fixed top-[clamp(0.375rem,1vw,0.75rem)] left-0 right-0 z-[100] px-[clamp(0.5rem,2.5vw,4rem)]"
      style={{ backgroundColor: "transparent" }}
    >
      <nav className="flex items-center justify-between gap-2 lg:gap-3 px-3 sm:px-[clamp(0.5rem,1.5vw,1rem)] py-2.5 sm:py-[clamp(0.25rem,0.75vw,0.375rem)] rounded-lg bg-black/80 backdrop-blur-md border border-white/10 shadow-xl shadow-black/10 w-full max-w-[90%] sm:max-w-[50%] mx-auto min-h-[44px] sm:min-h-0">
        {/* Brand */}
        <button
          onClick={() => {
            setMenuOpen(false);
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="px-2 py-1.5 text-base sm:text-base font-bold text-white hover:text-zinc-300 transition-colors rounded-full min-h-[44px] min-w-[44px] flex items-center justify-center sm:min-h-0 sm:min-w-0"
        >
          MK
        </button>

        {/* Desktop: inline links */}
        <div className="flex items-center pr-1 gap-0.5 hidden sm:flex">
          {navItems.slice(0, -1).map(({ label, id }) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className="px-1.5 md:px-2 py-1 text-[10px] md:text-xs font-medium text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-all"
            >
              {label}
            </button>
          ))}
          <div className="w-px h-2 bg-white/10 mx-1" />
          <a
            href="#contact"
            className="px-2 md:px-2.5 py-0.5 md:py-1 text-[10px] md:text-xs font-medium bg-white text-black rounded-full hover:bg-zinc-200 transition-colors"
          >
            Contact
          </a>
        </div>

        {/* Mobile: menu button only */}
        <div className="flex items-center sm:hidden">
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            className="p-2.5 rounded-full text-white hover:bg-white/10 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label="Open menu"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[99] sm:hidden"
              onClick={() => setMenuOpen(false)}
              aria-hidden="true"
            />
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={springTransition}
              className="fixed top-[clamp(0.375rem,1vw,0.75rem)] left-[clamp(0.5rem,2.5vw,4rem)] right-[clamp(0.5rem,2.5vw,4rem)] z-[101] sm:hidden mt-14 rounded-xl bg-black/95 backdrop-blur-md border border-white/10 shadow-xl py-2"
            >
              <div className="flex items-center justify-between px-4 py-2 border-b border-white/10">
                <span className="text-sm font-semibold text-white">Sections</span>
                <button
                  type="button"
                  onClick={() => setMenuOpen(false)}
                  className="p-2 rounded-full text-white hover:bg-white/10 transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="py-2">
                {navItems.map(({ label, id }) => (
                  <button
                    key={id}
                    type="button"
                    onClick={() => scrollToSection(id)}
                    className="w-full text-left px-4 py-3.5 text-[15px] font-medium text-white hover:bg-white/10 transition-colors rounded-lg mx-1"
                  >
                    {label}
                  </button>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
