"use client";

import { motion } from "framer-motion";
import { timeline } from "@/data/timeline";
import { cn } from "@/lib/utils";
import { FileText, Award } from "lucide-react";

export default function JourneyPath() {
  return (
    <section id="timeline" className="text-black py-[clamp(2rem,6vh,3rem)] overflow-hidden" style={{ backgroundColor: '#F5F5F5' }}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <div className="mb-6 text-center -mt-1">
          <h2 className="text-[clamp(2rem,4.5vw,2.5rem)] font-bold mb-2 tracking-tight">My Journey</h2>
          <p className="text-black/60 text-[clamp(0.8rem,1.5vw,0.875rem)]">
            A non-linear story of learning, building, and evolving.
          </p>
        </div>

        {/* Dual Wave Visualization */}
        <div className="relative w-full h-[320px] mb-12">
          {/* Waves */}
          <div className="absolute inset-0 flex items-center">
            <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1000 200">
              {/* Blue Wave (Projects) */}
              <motion.path
                d="M0 100 Q 250 0, 500 100 T 1000 100"
                fill="none"
                stroke="#2563EB" // blue-600
                strokeWidth="3"
                className="opacity-100"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
              {/* Orange Wave (Certifications) */}
              <motion.path
                d="M0 100 Q 250 200, 500 100 T 1000 100"
                fill="none"
                stroke="#F97316" // orange-500
                strokeWidth="3"
                className="opacity-100"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
              />
            </svg>
          </div>

          {/* Timeline Items */}
          <div className="absolute inset-0">
            {timeline.map((item, index) => {
              // Calculate position along the wave
              const totalItems = timeline.length;
              const progress = (index + 1) / (totalItems + 1);
              const xPercent = progress * 100;
              const xPos = progress * 1000;
              
              let yPos = 100;
              
              if (item.type === "project") {
                 // Blue wave logic: M0 100 Q 250 0... (hump first)
                 const phase = (xPos / 1000) * (Math.PI * 2); 
                 yPos = 100 - (Math.sin(phase) * 50); // Approx matching Q curves
              } else {
                 // Orange wave logic: M0 100 Q 250 200... (trough first)
                 const phase = (xPos / 1000) * (Math.PI * 2);
                 yPos = 100 + (Math.sin(phase) * 50); // Approx matching Q curves
              }

              const isTop = yPos < 100;
              
              return (
                <motion.div
                  key={index}
                  className="absolute"
                  style={{ left: `${xPercent}%`, top: `${(yPos / 200) * 100}%` }}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.2 }}
                >
                  {/* Node */}
                  <div className={cn(
                    "w-12 h-12 rounded-full flex items-center justify-center text-xs font-bold text-white z-10 relative -translate-x-1/2 -translate-y-1/2 shadow-md hover:scale-110 transition-transform duration-300",
                    item.type === "project" ? "bg-blue-600" : "bg-orange-500"
                  )}>
                    {item.year}
                  </div>

                  {/* Connector Line */}
                  <div 
                    className={cn(
                      "absolute w-0.5 border-l-2 border-dashed border-gray-300 h-16 left-0 -translate-x-1/2 z-0",
                       isTop ? "top-0" : "bottom-0"
                    )}
                  />

                  {/* Card */}
                  <div className={cn(
                    "absolute w-48 bg-white p-4 rounded-xl shadow-lg border border-gray-100 z-20 hover:shadow-xl transition-shadow duration-300",
                    isTop ? "top-16" : "bottom-16",
                    "-translate-x-1/2"
                  )}>
                    <div className="flex items-center gap-2 mb-2">
                       {item.type === "project" ? (
                         <FileText className="w-4 h-4 text-blue-600" />
                       ) : (
                         <Award className="w-4 h-4 text-orange-500" />
                       )}
                       <span className="text-xs font-bold uppercase tracking-wider text-gray-400">{item.type}</span>
                    </div>
                    <h3 className="font-bold text-sm mb-1">{item.title}</h3>
                    <p className="text-xs text-gray-500 leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Additional Context */}
        <div className="max-w-3xl mx-auto text-center mt-20">
          <p className="text-black/70 text-[clamp(0.8rem,1.5vw,0.875rem)] leading-relaxed">
            My path has never been linear. Each turn represents a moment of curiosity,
            a challenge overcome, or a skill mastered. From ancient technology to
            modern AI systems, I believe in learning by doing.
          </p>
        </div>
      </div>
    </section>
  );
}
