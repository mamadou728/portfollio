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

  // Create 8 rows (3 last lines removed)
  const logoRows = [
    techLogos,
    techLogos,
    techLogos,
    techLogos,
    techLogos,
    techLogos,
    techLogos,
    techLogos,
  ];

  return (
    <section id="focus" className="text-black pt-[clamp(0.5rem,1.5vh,1rem)] pb-[clamp(1.5rem,3.75vh,2.25rem)]" style={{ backgroundColor: '#D3D3D3' }}>
      {/* Section Title - scaled to 3/4 */}
      <div className="max-w-7xl mx-auto px-6 mb-3">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={springTransition}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-[clamp(1.3rem,3.4vw,1.875rem)] font-bold tracking-tight">Area of Focus</h2>
        </motion.div>
      </div>

      {/* Logo Wall + Cards Container */}
      <div className="relative">
        
        {/* Independent Logo Wall Wrapper - matches content height */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
          <div className="relative h-full">
            {/* Animated Logo Wall - behind cards */}
            <div className="absolute inset-0 flex flex-col justify-evenly [&>div]:flex-shrink-0 [&>div]:min-h-[2.5rem]">
              <LogoMarquee logos={logoRows[0]} direction="left" duration={50} opacity={0.6} />
              <LogoMarquee logos={logoRows[1]} direction="right" duration={50} opacity={0.65} />
              <LogoMarquee logos={logoRows[2]} direction="left" duration={50} opacity={0.55} />
              <LogoMarquee logos={logoRows[3]} direction="right" duration={50} opacity={0.62} />
              <LogoMarquee logos={logoRows[4]} direction="left" duration={50} opacity={0.58} />
              <LogoMarquee logos={logoRows[5]} direction="right" duration={50} opacity={0.63} />
              <LogoMarquee logos={logoRows[6]} direction="left" duration={50} opacity={0.6} />
              <LogoMarquee logos={logoRows[7]} direction="right" duration={50} opacity={0.65} />
            </div>
          </div>
        </div>

        {/* Cards - floating on top of logo wall, scaled to 3/4 */}
        <div className="max-w-7xl mx-auto px-6 relative z-20 py-3">

          {/* Cards Grid */}
          <div className="grid grid-cols-[repeat(auto-fit,minmax(min(150px,100%),1fr))] gap-4 max-w-4xl mx-auto">
          {/* Backend Development Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ...springTransition, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg hover:shadow-xl transition-shadow min-h-[410px]"
          >
            <h3 className="text-xl font-bold mb-4 tracking-tight">Backend Development</h3>
            
            <ul className="space-y-2 mb-4">
              <li className="flex items-start gap-1">
                <span className="text-xs mt-0.5">•</span>
                <span className="text-xs">RESTful API design and implementation</span>
              </li>
              <li className="flex items-start gap-1">
                <span className="text-xs mt-0.5">•</span>
                <span className="text-xs">Database architecture and optimization</span>
              </li>
              <li className="flex items-start gap-1">
                <span className="text-xs mt-0.5">•</span>
                <span className="text-xs">Microservices and cloud infrastructure</span>
              </li>
              <li className="flex items-start gap-1">
                <span className="text-xs mt-0.5">•</span>
                <span className="text-xs">Authentication and security protocols</span>
              </li>
            </ul>

            <div className="w-full h-px bg-gray-300 mb-3"></div>

            <div className="flex flex-wrap gap-1">
              <span className="px-1.5 py-0.5 bg-gray-200 rounded-full text-[10px] font-medium">Node.js</span>
              <span className="px-1.5 py-0.5 bg-gray-200 rounded-full text-[10px] font-medium">Python</span>
              <span className="px-1.5 py-0.5 bg-gray-200 rounded-full text-[10px] font-medium">PostgreSQL</span>
              <span className="px-1.5 py-0.5 bg-gray-200 rounded-full text-[10px] font-medium">Docker</span>
            </div>
          </motion.div>

          {/* Frontend Development Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ...springTransition, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg hover:shadow-xl transition-shadow min-h-[410px]"
          >
            <h3 className="text-xl font-bold mb-4 tracking-tight">Frontend Development</h3>
            
            <ul className="space-y-2 mb-4">
              <li className="flex items-start gap-1">
                <span className="text-xs mt-0.5">•</span>
                <span className="text-xs">Modern responsive web applications</span>
              </li>
              <li className="flex items-start gap-1">
                <span className="text-xs mt-0.5">•</span>
                <span className="text-xs">Component-based architecture</span>
              </li>
              <li className="flex items-start gap-1">
                <span className="text-xs mt-0.5">•</span>
                <span className="text-xs">State management and data flow</span>
              </li>
              <li className="flex items-start gap-1">
                <span className="text-xs mt-0.5">•</span>
                <span className="text-xs">Performance optimization and accessibility</span>
              </li>
            </ul>

            <div className="w-full h-px bg-gray-300 mb-3"></div>

            <div className="flex flex-wrap gap-1">
              <span className="px-1.5 py-0.5 bg-gray-200 rounded-full text-[10px] font-medium">React</span>
              <span className="px-1.5 py-0.5 bg-gray-200 rounded-full text-[10px] font-medium">Next.js</span>
              <span className="px-1.5 py-0.5 bg-gray-200 rounded-full text-[10px] font-medium">TypeScript</span>
              <span className="px-1.5 py-0.5 bg-gray-200 rounded-full text-[10px] font-medium">Tailwind</span>
            </div>
          </motion.div>

          {/* AI/Machine Learning Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ...springTransition, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg hover:shadow-xl transition-shadow min-h-[410px]"
          >
            <h3 className="text-xl font-bold mb-4 tracking-tight">AI & Machine Learning</h3>
            
            <ul className="space-y-2 mb-4">
              <li className="flex items-start gap-1">
                <span className="text-xs mt-0.5">•</span>
                <span className="text-xs">Machine learning model development</span>
              </li>
              <li className="flex items-start gap-1">
                <span className="text-xs mt-0.5">•</span>
                <span className="text-xs">Natural language processing</span>
              </li>
              <li className="flex items-start gap-1">
                <span className="text-xs mt-0.5">•</span>
                <span className="text-xs">Computer vision and image recognition</span>
              </li>
              <li className="flex items-start gap-1">
                <span className="text-xs mt-0.5">•</span>
                <span className="text-xs">Data analysis and predictive modeling</span>
              </li>
            </ul>

            <div className="w-full h-px bg-gray-300 mb-3"></div>

            <div className="flex flex-wrap gap-1">
              <span className="px-1.5 py-0.5 bg-gray-200 rounded-full text-[10px] font-medium">Python</span>
              <span className="px-1.5 py-0.5 bg-gray-200 rounded-full text-[10px] font-medium">TensorFlow</span>
              <span className="px-1.5 py-0.5 bg-gray-200 rounded-full text-[10px] font-medium">PyTorch</span>
              <span className="px-1.5 py-0.5 bg-gray-200 rounded-full text-[10px] font-medium">Scikit-learn</span>
            </div>
          </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
