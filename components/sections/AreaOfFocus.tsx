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

  // Create 10 rows for coverage
  const logoRows = [
    techLogos,
    techLogos,
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
    <section id="focus" className="text-black py-[clamp(2.5rem,8vh,4rem)]" style={{ backgroundColor: '#D3D3D3' }}>
      {/* Section Title - Outside logo wall area */}
      <div className="max-w-7xl mx-auto px-6 mb-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={springTransition}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-[clamp(2.25rem,5vw,3rem)] font-bold tracking-tight">Area of Focus</h2>
        </motion.div>
      </div>

      {/* Logo Wall + Cards Container */}
      <div className="relative min-h-[50vh]">
        {/* Animated Logo Wall - behind cards */}
        <div className="absolute inset-0 flex flex-col justify-evenly pointer-events-none z-0">
          <LogoMarquee logos={logoRows[0]} direction="left" duration={50} opacity={0.6} />
          <LogoMarquee logos={logoRows[1]} direction="right" duration={50} opacity={0.65} />
          <LogoMarquee logos={logoRows[2]} direction="left" duration={50} opacity={0.55} />
          <LogoMarquee logos={logoRows[3]} direction="right" duration={50} opacity={0.62} />
          <LogoMarquee logos={logoRows[4]} direction="left" duration={50} opacity={0.58} />
          <LogoMarquee logos={logoRows[5]} direction="right" duration={50} opacity={0.63} />
          <LogoMarquee logos={logoRows[6]} direction="left" duration={50} opacity={0.6} />
          <LogoMarquee logos={logoRows[7]} direction="right" duration={50} opacity={0.65} />
          <LogoMarquee logos={logoRows[8]} direction="left" duration={50} opacity={0.55} />
          <LogoMarquee logos={logoRows[9]} direction="right" duration={50} opacity={0.62} />
        </div>

        {/* Cards - floating on top of logo wall */}
        <div className="max-w-7xl mx-auto px-6 relative z-20 py-6">

          {/* Cards Grid */}
          <div className="grid grid-cols-[repeat(auto-fit,minmax(min(280px,100%),1fr))] gap-8 max-w-6xl mx-auto">
          {/* Backend Development Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ...springTransition, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
          >
            <h3 className="text-2xl font-bold mb-6 tracking-tight">Backend Development</h3>
            
            {/* Bullet Points */}
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-2">
                <span className="text-lg mt-1">•</span>
                <span>RESTful API design and implementation</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-lg mt-1">•</span>
                <span>Database architecture and optimization</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-lg mt-1">•</span>
                <span>Microservices and cloud infrastructure</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-lg mt-1">•</span>
                <span>Authentication and security protocols</span>
              </li>
            </ul>

            {/* Divider Line */}
            <div className="w-full h-px bg-gray-300 mb-4"></div>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-gray-200 rounded-full text-sm font-medium">Node.js</span>
              <span className="px-3 py-1 bg-gray-200 rounded-full text-sm font-medium">Python</span>
              <span className="px-3 py-1 bg-gray-200 rounded-full text-sm font-medium">PostgreSQL</span>
              <span className="px-3 py-1 bg-gray-200 rounded-full text-sm font-medium">Docker</span>
            </div>
          </motion.div>

          {/* Frontend Development Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ...springTransition, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
          >
            <h3 className="text-2xl font-bold mb-6 tracking-tight">Frontend Development</h3>
            
            {/* Bullet Points */}
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-2">
                <span className="text-lg mt-1">•</span>
                <span>Modern responsive web applications</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-lg mt-1">•</span>
                <span>Component-based architecture</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-lg mt-1">•</span>
                <span>State management and data flow</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-lg mt-1">•</span>
                <span>Performance optimization and accessibility</span>
              </li>
            </ul>

            {/* Divider Line */}
            <div className="w-full h-px bg-gray-300 mb-4"></div>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-gray-200 rounded-full text-sm font-medium">React</span>
              <span className="px-3 py-1 bg-gray-200 rounded-full text-sm font-medium">Next.js</span>
              <span className="px-3 py-1 bg-gray-200 rounded-full text-sm font-medium">TypeScript</span>
              <span className="px-3 py-1 bg-gray-200 rounded-full text-sm font-medium">Tailwind</span>
            </div>
          </motion.div>

          {/* AI/Machine Learning Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ...springTransition, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
          >
            <h3 className="text-2xl font-bold mb-6 tracking-tight">AI & Machine Learning</h3>
            
            {/* Bullet Points */}
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-2">
                <span className="text-lg mt-1">•</span>
                <span>Machine learning model development</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-lg mt-1">•</span>
                <span>Natural language processing</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-lg mt-1">•</span>
                <span>Computer vision and image recognition</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-lg mt-1">•</span>
                <span>Data analysis and predictive modeling</span>
              </li>
            </ul>

            {/* Divider Line */}
            <div className="w-full h-px bg-gray-300 mb-4"></div>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-gray-200 rounded-full text-sm font-medium">Python</span>
              <span className="px-3 py-1 bg-gray-200 rounded-full text-sm font-medium">TensorFlow</span>
              <span className="px-3 py-1 bg-gray-200 rounded-full text-sm font-medium">PyTorch</span>
              <span className="px-3 py-1 bg-gray-200 rounded-full text-sm font-medium">Scikit-learn</span>
            </div>
          </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
