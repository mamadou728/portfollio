"use client";

import { motion } from "framer-motion";
import LogoMarquee from "@/components/animations/LogoMarquee";
import { techLogos } from "@/data/techLogos";

export default function AreaOfFocus() {
  // Design Rules: Spring physics
  const springTransition = {
    type: "spring",
    stiffness: 300,
    damping: 30,
  };

  // Create 6 rows - each row uses all logos for full coverage
  // We can shuffle or offset them for variety if needed
  const logoRows = [
    techLogos,
    techLogos,
    techLogos,
    techLogos,
    techLogos,
    techLogos,
  ];

  return (
    <section id="focus" className="min-h-[60vh] text-black px-6 pt-16 pb-20 relative overflow-hidden" style={{ backgroundColor: '#D3D3D3' }}>
      {/* Animated Logo Wall - on top of gray background */}
      <div className="absolute inset-0 flex flex-col justify-evenly pointer-events-none z-0">
        <LogoMarquee logos={logoRows[0]} direction="left" duration={50} opacity={0.6} />
        <LogoMarquee logos={logoRows[1]} direction="right" duration={50} opacity={0.65} />
        <LogoMarquee logos={logoRows[2]} direction="left" duration={50} opacity={0.55} />
        <LogoMarquee logos={logoRows[3]} direction="right" duration={50} opacity={0.62} />
        <LogoMarquee logos={logoRows[4]} direction="left" duration={50} opacity={0.58} />
        <LogoMarquee logos={logoRows[5]} direction="right" duration={50} opacity={0.63} />
      </div>

      {/* Main Content - sits on top of logo wall */}
      <div className="max-w-7xl mx-auto relative z-20">
        {/* Section Title */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={springTransition}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold tracking-tight">Area of Focus</h2>
        </motion.div>
      </div>
    </section>
  );
}
