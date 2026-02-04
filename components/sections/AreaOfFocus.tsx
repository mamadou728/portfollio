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
            className="bg-white/95 rounded-xl p-4 shadow-lg hover:shadow-xl transition-shadow min-h-[410px]"
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
                <span className="text-xs">Event-driven architecture for live notifications and instant chat</span>
              </li>
              <li className="flex items-start gap-1">
                <span className="text-xs mt-0.5">•</span>
                <span className="text-xs">Secure handling of sensitive data with privacy-first design</span>
              </li>
              <li className="flex items-start gap-1">
                <span className="text-xs mt-0.5">•</span>
                <span className="text-xs">Containerized deployment and cloud infrastructure</span>
              </li>
            </ul>

            <div className="w-full h-px bg-gray-300 mb-3"></div>

            <div className="flex flex-wrap gap-1">
              <span className="px-1.5 py-0.5 bg-gray-200 rounded-full text-[10px] font-medium">Java</span>
              <span className="px-1.5 py-0.5 bg-gray-200 rounded-full text-[10px] font-medium">Python</span>
              <span className="px-1.5 py-0.5 bg-gray-200 rounded-full text-[10px] font-medium">C</span>
              <span className="px-1.5 py-0.5 bg-gray-200 rounded-full text-[10px] font-medium">C++</span>
              <span className="px-1.5 py-0.5 bg-gray-200 rounded-full text-[10px] font-medium">Dart</span>
              <span className="px-1.5 py-0.5 bg-gray-200 rounded-full text-[10px] font-medium">Node.js</span>
              <span className="px-1.5 py-0.5 bg-gray-200 rounded-full text-[10px] font-medium">PostgreSQL</span>
              <span className="px-1.5 py-0.5 bg-gray-200 rounded-full text-[10px] font-medium">MongoDB</span>
              <span className="px-1.5 py-0.5 bg-gray-200 rounded-full text-[10px] font-medium">JWT</span>
              <span className="px-1.5 py-0.5 bg-gray-200 rounded-full text-[10px] font-medium">FastAPI</span>
              <span className="px-1.5 py-0.5 bg-gray-200 rounded-full text-[10px] font-medium">Docker</span>
              <span className="px-1.5 py-0.5 bg-gray-200 rounded-full text-[10px] font-medium">WebSocket</span>
            </div>
          </motion.div>

          {/* Frontend Development Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ...springTransition, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white/95 rounded-xl p-4 shadow-lg hover:shadow-xl transition-shadow min-h-[410px]"
          >
            <h3 className="text-xl font-bold mb-4 tracking-tight">Frontend Development</h3>
            
            <ul className="space-y-2 mb-4">
              <li className="flex items-start gap-1">
                <span className="text-xs mt-0.5">•</span>
                <span className="text-xs">Building consistent experiences across mobile and web platforms</span>
              </li>
              <li className="flex items-start gap-1">
                <span className="text-xs mt-0.5">•</span>
                <span className="text-xs">Designing chat interfaces with streaming responses for natural AI interaction</span>
              </li>
              <li className="flex items-start gap-1">
                <span className="text-xs mt-0.5">•</span>
                <span className="text-xs">State management with modern hooks and patterns</span>
              </li>
              <li className="flex items-start gap-1">
                <span className="text-xs mt-0.5">•</span>
                <span className="text-xs">Component-based architecture with reusable design patterns</span>
              </li>
              <li className="flex items-start gap-1">
                <span className="text-xs mt-0.5">•</span>
                <span className="text-xs">Performance optimization and accessibility</span>
              </li>
            </ul>

            <div className="w-full h-px bg-gray-300 mb-3"></div>

            <div className="flex flex-wrap gap-1">
              <span className="px-1.5 py-0.5 bg-gray-200 rounded-full text-[10px] font-medium">React</span>
              <span className="px-1.5 py-0.5 bg-gray-200 rounded-full text-[10px] font-medium">React Native</span>
              <span className="px-1.5 py-0.5 bg-gray-200 rounded-full text-[10px] font-medium">Next.js</span>
              <span className="px-1.5 py-0.5 bg-gray-200 rounded-full text-[10px] font-medium">TypeScript</span>
              <span className="px-1.5 py-0.5 bg-gray-200 rounded-full text-[10px] font-medium">HTML</span>
              <span className="px-1.5 py-0.5 bg-gray-200 rounded-full text-[10px] font-medium">CSS</span>
              <span className="px-1.5 py-0.5 bg-gray-200 rounded-full text-[10px] font-medium">Tailwind</span>
            </div>
          </motion.div>

          {/* AI/Machine Learning Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ...springTransition, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-white/95 rounded-xl p-4 shadow-lg hover:shadow-xl transition-shadow min-h-[410px]"
          >
            <h3 className="text-xl font-bold mb-4 tracking-tight">AI & Machine Learning</h3>
            
            <ul className="space-y-2 mb-4">
              <li className="flex items-start gap-1">
                <span className="text-xs mt-0.5">•</span>
                <span className="text-xs">Building autonomous agents that can plan, execute tools, and reason</span>
              </li>
              <li className="flex items-start gap-1">
                <span className="text-xs mt-0.5">•</span>
                <span className="text-xs">Implementing vector databases for semantic memory and context retrieval</span>
              </li>
              <li className="flex items-start gap-1">
                <span className="text-xs mt-0.5">•</span>
                <span className="text-xs">Designing local-first or private pipelines for sensitive document analysis</span>
              </li>
              <li className="flex items-start gap-1">
                <span className="text-xs mt-0.5">•</span>
                <span className="text-xs">Natural language interfaces with voice and intent classification</span>
              </li>
              <li className="flex items-start gap-1">
                <span className="text-xs mt-0.5">•</span>
                <span className="text-xs">Prompt engineering and context optimization</span>
              </li>
              <li className="flex items-start gap-1">
                <span className="text-xs mt-0.5">•</span>
                <span className="text-xs">Classification and linear regression models</span>
              </li>
            </ul>

            <div className="w-full h-px bg-gray-300 mb-3"></div>

            <div className="flex flex-wrap gap-1">
              <span className="px-1.5 py-0.5 bg-gray-200 rounded-full text-[10px] font-medium">Python</span>
              <span className="px-1.5 py-0.5 bg-gray-200 rounded-full text-[10px] font-medium">OpenAI API</span>
              <span className="px-1.5 py-0.5 bg-gray-200 rounded-full text-[10px] font-medium">LangChain</span>
              <span className="px-1.5 py-0.5 bg-gray-200 rounded-full text-[10px] font-medium">LangGraph</span>
              <span className="px-1.5 py-0.5 bg-gray-200 rounded-full text-[10px] font-medium">RAG</span>
              <span className="px-1.5 py-0.5 bg-gray-200 rounded-full text-[10px] font-medium">Qdrant</span>
              <span className="px-1.5 py-0.5 bg-gray-200 rounded-full text-[10px] font-medium">HuggingFace</span>
              <span className="px-1.5 py-0.5 bg-gray-200 rounded-full text-[10px] font-medium">Ollama</span>
              <span className="px-1.5 py-0.5 bg-gray-200 rounded-full text-[10px] font-medium">NLP</span>
              <span className="px-1.5 py-0.5 bg-gray-200 rounded-full text-[10px] font-medium">MCP</span>
            </div>
          </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
