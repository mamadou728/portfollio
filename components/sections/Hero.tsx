"use client";

import Image from "next/image";
import { motion } from "framer-motion";

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
      className="min-h-[75vh] text-black pt-32 pb-20 flex items-center overflow-hidden"
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
            <div className="relative w-64 h-80 rounded-[2rem] overflow-hidden shadow-2xl shadow-black/5 ring-1 ring-black/5">
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
        <div className="space-y-5 flex flex-col items-center text-center max-w-xl">
          {/* Greeting */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...springTransition, delay: 0.2 }}
            className="text-2xl lg:text-4xl font-bold leading-tight text-black tracking-tight"
          >
            Hi, I'm Mamadou Kabore <span className="inline-block hover:animate-wave origin-[70%_70%]">👋</span>
          </motion.h1>

          {/* Sub-Headline */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...springTransition, delay: 0.3 }}
            className="text-base text-zinc-700 font-medium tracking-wide"
          >
            Student • Software Engineer •{" "}
            <span className="italic text-black font-semibold">Explorer</span> •{" "}
            <span className="italic text-black font-semibold">Builder</span>
          </motion.p>

          {/* About Me Blurb */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...springTransition, delay: 0.4 }}
            className="text-sm text-zinc-600 leading-relaxed"
          >
            I am a Computer Science student at Carleton University, but I
            define myself by what I ship. Whether it is engineering
            privacy-first AI systems like Lexi-RAG or studying ancient Roman
            technology, I am obsessed with understanding how complex things
            work—and how to build them better.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
