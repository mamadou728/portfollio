"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Linkedin, Github } from "lucide-react";

export default function Hero() {
  // Design Rules: Spring physics default
  const springTransition = { 
    type: "spring", 
    stiffness: 300, 
    damping: 30,
    mass: 1
  };

  return (
    <section 
      className="min-h-[min(60vh,600px)] text-black pt-[calc(clamp(4rem,8vh,4.5rem)+22px)] pb-[clamp(2rem,6vh,3rem)] flex items-center overflow-hidden"
    >
      <div className="w-full flex flex-col items-center gap-8 max-w-2xl mx-auto">
        {/* Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ ...springTransition, delay: 0.1 }}
          className="flex justify-center"
        >
          <div className="relative group">
            {/* Depth/Glow Effect behind image */}
            <div className="absolute -inset-1 bg-gradient-to-r from-zinc-200 to-white rounded-[2rem] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
            
            {/* Image Container */}
            <div className="relative w-[clamp(8rem,20vw,10.67rem)] h-[clamp(10rem,25vw,13.33rem)] rounded-[2rem] overflow-hidden shadow-2xl shadow-black/5 ring-1 ring-black/5">
              <Image
                src="/images/profile pics/IMG_4950.jpg"
                alt="Mamadou Kabore"
                fill
                className="object-cover scale-105 group-hover:scale-110 transition-transform duration-700 ease-out"
                priority
              />
            </div>
          </div>
        </motion.div>

        {/* Text Content - Centered */}
        <div className="space-y-4 flex flex-col items-center text-center max-w-xl">
          {/* Greeting */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...springTransition, delay: 0.2 }}
            className="text-[clamp(1rem,2.67vw,1.5rem)] font-bold leading-tight text-black tracking-tight"
          >
            Hi, I'm Mamadou <span className="inline-block hover:animate-wave origin-[70%_70%]">👋</span>
          </motion.h1>

          {/* Sub-Headline */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...springTransition, delay: 0.3 }}
            className="text-[clamp(0.75rem,1.5vw,0.875rem)] text-zinc-700 font-medium tracking-wide"
          >
            Student • Software engineering •{" "}
            <span className="italic text-black font-semibold">Builder</span> •{" "}
            <span className="italic text-black font-semibold">Explorer</span>
          </motion.p>

          {/* About Me Blurb */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...springTransition, delay: 0.4 }}
            className="text-[clamp(0.8rem,1.5vw,0.875rem)] text-zinc-600 leading-relaxed max-w-lg"
          >
            I am a Computer Science student at Carleton University, but I
            define myself by what I ship. Whether it is engineering
            privacy-first AI systems like Lexi-RAG or studying ancient Roman
            technology, I am obsessed with understanding how complex things
            work—and how to build them better.
          </motion.p>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...springTransition, delay: 0.5 }}
            className="flex items-center gap-3 pt-2"
          >
            <a
              href="https://www.linkedin.com/in/mamadou-kabore-a31026216/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110 group"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 text-black group-hover:text-blue-600 transition-colors" />
            </a>
            <a
              href="https://github.com/mamadou728"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110 group"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5 text-black group-hover:text-gray-700 transition-colors" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
