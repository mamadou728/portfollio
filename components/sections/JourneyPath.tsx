"use client";

import { motion } from "framer-motion";

const milestones = [
  { year: "Present", label: "Bayard", description: "Current role" },
  { year: "2024", label: "Certification", description: "AWS Certified" },
  { year: "2023", label: "Etc.", description: "Previous milestone" },
];

export default function JourneyPath() {
  return (
    <section id="timeline" className="min-h-screen text-black px-6 py-24" style={{ backgroundColor: '#F5F5F5' }}>
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="mb-16 text-center">
          <h2 className="text-5xl font-bold mb-4">My Journey</h2>
          <p className="text-black/60 text-sm">
            A non-linear story of learning, building, and evolving.
          </p>
        </div>

        {/* Wave Pathway */}
        <div className="relative mb-16">
          <svg
            className="w-full h-48"
            viewBox="0 0 1200 150"
            preserveAspectRatio="none"
          >
            {/* Fill area between waves */}
            <motion.path
              d="M 0 75 Q 150 20, 300 75 Q 450 130, 600 75 Q 750 20, 900 75 Q 1050 130, 1200 75 
                 L 1200 105 Q 1050 160, 900 105 Q 750 50, 600 105 Q 450 160, 300 105 Q 150 50, 0 105 Z"
              fill="currentColor"
              className="text-black"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeInOut", delay: 0.4 }}
              viewport={{ once: true }}
            />
            
            {/* First Wave */}
            <motion.path
              d="M 0 75 Q 150 20, 300 75 T 600 75 T 900 75 T 1200 75"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              className="text-black"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
              viewport={{ once: true }}
            />
            
            {/* Second Wave - Parallel */}
            <motion.path
              d="M 0 105 Q 150 50, 300 105 T 600 105 T 900 105 T 1200 105"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              className="text-black"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 2, ease: "easeInOut", delay: 0.2 }}
              viewport={{ once: true }}
            />
          </svg>
        </div>

        {/* Timeline Items */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {milestones.map((milestone, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg border border-black/10 hover:border-black/30 transition-colors"
            >
              <div className="text-xs text-black/50 mb-2">{milestone.year}</div>
              <h3 className="text-xl font-bold mb-2">{milestone.label}</h3>
              <p className="text-sm text-black/70">{milestone.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Additional Context */}
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-black/70 text-sm leading-relaxed">
            My path has never been linear. Each turn represents a moment of curiosity,
            a challenge overcome, or a skill mastered. From ancient technology to
            modern AI systems, I believe in learning by doing.
          </p>
        </div>
      </div>
    </section>
  );
}
