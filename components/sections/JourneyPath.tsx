"use client";

import React from "react";
import { motion } from "framer-motion";
import { Lightbulb, Award, GraduationCap, Trophy, BrainCircuit, Users } from "lucide-react";

// Design Rules: Spring physics for motion choreography
const springTransition = { type: "spring" as const, stiffness: 300, damping: 30 };

// Microcopy: clear, concise text; Content-First. Display (titles) vs UI (labels, mono dates).
const timelineData = [
  {
    id: 1,
    year: "Fall 2020",
    title: "The Spark",
    subtitle: "High School",
    description: "Java & Python basics. Mini-projects to learn programming fundamentals.",
    category: "personal",
    icon: <Lightbulb className="w-4 h-4 text-yellow-500" />,
  },
  {
    id: 2,
    year: "May 2021",
    title: "Exploration",
    subtitle: "Certifications",
    description: "NumPy certification and Blockchain introduction course.",
    category: "certification",
    icon: <Award className="w-4 h-4 text-blue-500" />,
  },
  {
    id: 3,
    year: "2021 – 2025",
    title: "The Foundation",
    subtitle: "Carleton University",
    description: "Computer Science degree. Algorithms, data structures, system architecture.",
    category: "education",
    icon: <GraduationCap className="w-4 h-4 text-purple-500" />,
  },
  {
    id: 4,
    year: "May 2025",
    title: "Innovation",
    subtitle: "Building Phase",
    description: "WealthNudge and AI Orchestrator for public users.",
    category: "project",
    icon: <BrainCircuit className="w-4 h-4 text-cyan-500" />,
  },
  {
    id: 5,
    year: "Sept 2025",
    title: "Validation",
    subtitle: "Hackathon Winner",
    description: "First hackathon win. Delivered under pressure.",
    category: "achievement",
    icon: <Trophy className="w-4 h-4 text-amber-500" />,
  },
  {
    id: 6,
    year: "Nov 2025",
    title: "Building",
    subtitle: "YesResume & Lexi-RAG",
    description: "YesResume development; early Lexi-RAG concept work.",
    category: "project",
    icon: <BrainCircuit className="w-4 h-4 text-indigo-500" />,
  },
  {
    id: 7,
    year: "Jan 2026",
    title: "Beta & Launch",
    subtitle: "Current Phase",
    description: "YesResume first beta user. Lexi-RAG privacy-first system in progress.",
    category: "project",
    icon: <Users className="w-4 h-4 text-emerald-500" />,
  },
];

export default function JourneyPath() {
  return (
    <section id="timeline" className="text-black pt-4 pb-[clamp(2rem,5vh,3rem)]" style={{ backgroundColor: '#F5F5F5' }}>
      <div className="max-w-7xl mx-auto px-6 pt-4 pb-8">
        {/* Section Title – Typography hierarchy (Display); breathable whitespace */}
        <div className="text-center mb-12">
          <h2 className="text-[clamp(1.3rem,3.4vw,1.875rem)] font-bold tracking-tight text-gray-900">My Journey</h2>
        </div>

        {/* --- DESKTOP VIEW (Zigzag) --- */}
        <div className="hidden md:block relative">
          <div className="overflow-x-auto pb-6 scrollbar-hide">
            <div className="relative h-80 min-w-[1600px]">
              
              {/* The Central Line */}
              <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-300 -translate-y-1/2 rounded-full" />

              {/* The Grid */}
              <div className="grid grid-cols-7 w-full h-full">
              {timelineData.map((item, index) => {
                const isEven = index % 2 === 0;
                return (
                  <div key={item.id} className="relative flex justify-center h-full">
                    
                    {/* The Dot */}
                    <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-gray-100 rounded-full border-[3px] border-blue-500 -translate-x-1/2 -translate-y-1/2 z-10 shadow-md" />

                    {/* The Content Card */}
                    <motion.div
                      initial={{ opacity: 0, y: isEven ? -20 : 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ ...springTransition, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className={`absolute w-48 text-center p-2 transition-all duration-300 hover:scale-105 group cursor-default
                        ${isEven ? "bottom-1/2 mb-8" : "top-1/2 mt-8"}
                      `}
                    >
                      {/* Connector Line */}
                      <div className={`absolute left-1/2 w-px h-8 bg-gray-300 -translate-x-1/2
                        ${isEven ? "-bottom-8" : "-top-8"}
                      `} />

                      {/* Display type: heading; UI type: mono year, muted secondary */}
                      <h3 className="text-base font-bold tracking-tight text-gray-900 group-hover:text-blue-500 transition-colors">
                        {item.title}
                      </h3>
                      <div className="text-blue-500 font-mono text-[10px] font-bold mb-1 uppercase tracking-wide">{item.year}</div>
                      <p className="text-xs font-medium text-gray-600 mb-1">{item.subtitle}</p>
                      <p className="text-[11px] text-zinc-500 leading-tight">
                        {item.description}
                      </p>
                    </motion.div>
                  </div>
                );
              })}
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
          .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}</style>

        {/* --- MOBILE VIEW (Vertical Fallback) --- */}
        <div className="md:hidden space-y-8 pl-4 border-l-2 border-gray-300 ml-4">
          {timelineData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ ...springTransition, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative pl-6"
            >
              <div className="absolute -left-[21px] top-1.5 w-3 h-3 bg-blue-500 rounded-full border-2 border-gray-100" />
              
              <div className="flex flex-col">
                <span className="text-xs font-mono text-blue-500 font-bold mb-1">{item.year}</span>
                <h3 className="text-lg font-bold tracking-tight text-gray-900">{item.title}</h3>
                <p className="text-sm text-gray-600 mb-2">{item.subtitle}</p>
                <p className="text-sm text-zinc-500 leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
