"use client";

import { motion } from "framer-motion";
import { 
  Workflow, 
  ScrollText, 
  BrainCircuit, 
  Cpu, 
  Database, 
  Globe, 
  Server,
  Code2
} from "lucide-react";

// Helper to get logo URL
const getLogo = (name: string) => {
  // Simplified lookup based on the techLogos file content we saw
  const map: Record<string, string> = {
    python: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
    java: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
    typescript: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
    javascript: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    react: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    nextjs: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
    nodejs: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
    docker: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
    aws: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
    postgresql: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
    mongodb: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
    git: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
    cplusplus: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg",
  };
  return map[name.toLowerCase()] || "";
};

const orbitLevels = [
  {
    level: "Exploring",
    description: "Level 2: Building expertise through continuous iteration",
    color: "from-emerald-400 to-teal-500",
    sizePercent: 93,  // 93% of container
    zIndex: 10,
    items: [
      { type: "text", label: "n8n", icon: Workflow },
      { type: "text", label: "Automation", icon: Cpu },
      { type: "text", label: "Greek Stories", icon: ScrollText },
      { type: "logo", name: "mongodb" },
    ]
  },
  {
    level: "Practicing",
    description: "Level 3: Building expertise through continuous iteration",
    color: "from-orange-400 to-amber-500",
    sizePercent: 67,  // 67% of container
    zIndex: 20,
    items: [
      { type: "logo", name: "react" },
      { type: "logo", name: "nextjs" },
      { type: "logo", name: "docker" },
      { type: "logo", name: "aws" },
      { type: "logo", name: "postgresql" },
      { type: "logo", name: "git" },
    ]
  },
  {
    level: "Mastering",
    description: "Level 4: Building expertise through continuous iteration",
    color: "from-purple-500 to-indigo-600",
    sizePercent: 36,  // 36% of container
    zIndex: 30,
    items: [
      { type: "logo", name: "python" },
      { type: "logo", name: "java" },
      { type: "logo", name: "cplusplus" },
      { type: "text", label: "AI Eng.", icon: BrainCircuit },
    ]
  },
];

export default function TheOrbit() {
  return (
    <section id="orbit" className="py-[clamp(4rem,12vh,6rem)] bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-[clamp(2.5rem,5vw,3rem)] font-bold mb-4">The Orbit</h2>
          <p className="text-black/60 text-sm">
            My learning philosophy: spiraling outward from core to exploration.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          {/* Visual Orbit (Left) */}
          <div className="flex-1 flex justify-center items-center relative w-full">
            <div className="relative w-full max-w-[450px] aspect-square flex items-center justify-center">
              {/* Orbit Rings */}
              {orbitLevels.map((level, lvlIndex) => (
                <motion.div
                  key={level.level}
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ delay: lvlIndex * 0.2, duration: 0.8, type: "spring", bounce: 0.3 }}
                  viewport={{ once: true }}
                  className={`absolute rounded-full bg-gradient-to-br ${level.color} shadow-2xl flex items-center justify-center border border-white/20 backdrop-blur-sm`}
                  style={{
                    width: `${level.sizePercent}%`,
                    height: `${level.sizePercent}%`,
                    zIndex: level.zIndex,
                    boxShadow: "0 20px 50px rgba(0,0,0,0.15), inset 0 2px 10px rgba(255,255,255,0.3)",
                  }}
                >
                  {/* Distributed Icons/Logos */}
                  {level.items.map((item, itemIndex) => {
                    // Distribute items along the circle using percentage-based positioning
                    const totalItems = level.items.length;
                    const angle = (itemIndex / totalItems) * 2 * Math.PI - Math.PI / 2; // Start from top
                    
                    // Calculate position as percentage of orbit radius (37.5% = 75% of 50% radius)
                    const radiusPercent = (level.sizePercent / 2) * 0.75;
                    const xPercent = Math.cos(angle) * radiusPercent;
                    const yPercent = Math.sin(angle) * radiusPercent;

                    return (
                      <motion.div
                        key={itemIndex}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 + lvlIndex * 0.2 + itemIndex * 0.1 }}
                        className="absolute flex flex-col items-center justify-center"
                        style={{ 
                          left: '50%',
                          top: '50%',
                          transform: `translate(calc(-50% + ${xPercent}%), calc(-50% + ${yPercent}%))` 
                        }}
                      >
                        {item.type === "logo" ? (
                          <div className="w-8 h-8 md:w-10 md:h-10 bg-white rounded-full p-1.5 shadow-md flex items-center justify-center hover:scale-110 transition-transform cursor-pointer" title={item.name}>
                            <img 
                              src={getLogo(item.name || "")} 
                              alt={item.name}
                              className="w-full h-full object-contain"
                            />
                          </div>
                        ) : (
                          <div className="flex flex-col items-center group">
                            <div className="w-8 h-8 md:w-10 md:h-10 bg-white/90 rounded-full p-2 shadow-md flex items-center justify-center text-black hover:scale-110 transition-transform cursor-pointer">
                              {item.icon && <item.icon className="w-full h-full" />}
                            </div>
                            <span className="text-[10px] font-bold text-white mt-1 bg-black/20 px-1.5 py-0.5 rounded-full backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                              {item.label}
                            </span>
                          </div>
                        )}
                      </motion.div>
                    );
                  })}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Text Content (Right) */}
          <div className="flex-1 space-y-10">
            {orbitLevels.map((level, index) => (
              <motion.div
                key={level.level}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 + 0.3 }}
                viewport={{ once: true }}
                className="flex gap-4"
              >
                {/* Vertical Line Marker */}
                <div className={`w-1 h-auto rounded-full bg-gradient-to-b ${level.color}`} />
                
                <div>
                  <h3 className="text-xl font-bold mb-1">{level.level}</h3>
                  <p className="text-sm text-black/60 leading-relaxed">
                    {level.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
