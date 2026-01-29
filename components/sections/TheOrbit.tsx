"use client";

import { motion } from "framer-motion";

const focusAreas = [
  { label: "Learning Focus", level: 1, size: 120 },
  { label: "Exploring", level: 2, size: 180 },
  { label: "Practicing", level: 3, size: 240 },
  { label: "Mastering", level: 4, size: 300 },
];

export default function TheOrbit() {
  return (
    <section id="skills" className="min-h-screen bg-white text-black px-6 py-24">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="mb-20 text-center">
          <h2 className="text-5xl font-bold mb-4">The Orbit</h2>
          <p className="text-black/60 text-sm">
            My learning philosophy: spiraling outward from core to exploration.
          </p>
        </div>

        {/* Spiral Visualization */}
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Visual Spiral */}
          <div className="flex-1 flex justify-center items-center">
            <div className="relative w-[400px] h-[400px] flex items-center justify-center">
              {/* Concentric Circles */}
              {focusAreas.map((area, index) => (
                <motion.div
                  key={index}
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 0.15 + index * 0.1 }}
                  transition={{ delay: index * 0.2, duration: 0.8 }}
                  viewport={{ once: true }}
                  className="absolute rounded-full border-2 border-black/20"
                  style={{
                    width: `${area.size}px`,
                    height: `${area.size}px`,
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                  }}
                />
              ))}
              
              {/* Center Core */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                viewport={{ once: true }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-black rounded-full flex items-center justify-center z-10"
              >
                <span className="text-white text-xs font-bold">Core</span>
              </motion.div>
            </div>
          </div>

          {/* Text Content */}
          <div className="flex-1 space-y-8">
            {focusAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.15 }}
                viewport={{ once: true }}
                className="border-l-2 border-black/20 pl-6"
              >
                <h3 className="text-xl font-bold mb-2">{area.label}</h3>
                <p className="text-sm text-black/70">
                  Level {area.level}: Building expertise through continuous iteration
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
