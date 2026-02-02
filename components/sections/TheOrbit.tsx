"use client";

import { motion } from "framer-motion";
import { ScrollText, Cpu } from "lucide-react";

// Helper to get logo URL from devicons
const getLogo = (name: string) => {
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
    n8n: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg", // n8n uses Node.js icon
  };
  return map[name.toLowerCase()] || "";
};

const orbitLevels = [
  {
    level: "Exploring",
    description: "Exploring new tools and technologies",
    color: "from-emerald-400 to-teal-500",
    sizePercent: 93,  // 93% of container (outermost)
    zIndex: 10,
    items: [
      { type: "logo", name: "n8n" },
      { type: "text", label: "Automation", icon: Cpu },
      { type: "logo", name: "mongodb" },
      { type: "text", label: "Stories", icon: ScrollText },
    ]
  },
  {
    level: "Practicing",
    description: "Building proficiency through practice",
    color: "from-orange-400 to-amber-500",
    sizePercent: 67,  // 67% of container (middle)
    zIndex: 20,
    items: [
      { type: "logo", name: "cplusplus" },
      { type: "logo", name: "react" },
      { type: "logo", name: "docker" },
      { type: "logo", name: "aws" },
      { type: "logo", name: "postgresql" },
      { type: "logo", name: "git" },
    ]
  },
  {
    level: "Mastering",
    description: "Core technologies I use most",
    color: "from-purple-500 to-indigo-600",
    sizePercent: 36,  // 36% of container (center)
    zIndex: 30,
    items: [
      { type: "logo", name: "python" },
      { type: "logo", name: "typescript" },
      { type: "logo", name: "nextjs" },
    ]
  },
];

// Design rules: default spring { type: "spring", stiffness: 300, damping: 30 }
const springTransition = { type: "spring" as const, stiffness: 300, damping: 30 };

export default function TheOrbit() {
  return (
    <section id="orbit" className="pt-6 pb-8 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title — design: typography hierarchy, breathable whitespace */}
        <div className="text-center mb-8">
          <h2 className="text-xl font-bold tracking-tight mb-2">The Orbit</h2>
          <p className="text-zinc-500 text-sm">
            My learning philosophy: spiraling outward from core to exploration.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Visual Orbit (Left) */}
          <div className="flex-1 flex justify-center items-center relative w-full">
            <div className="relative w-[254px] h-[254px] flex items-center justify-center">
              {/* Orbit Rings (just the colored circles) */}
              {orbitLevels.map((level, lvlIndex) => (
                <motion.div
                  key={level.level}
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ ...springTransition, delay: lvlIndex * 0.2 }}
                  viewport={{ once: true }}
                  className={`absolute rounded-full bg-gradient-to-br ${level.color} border border-white/20 backdrop-blur-sm`}
                  style={{
                    width: `${level.sizePercent}%`,
                    height: `${level.sizePercent}%`,
                    zIndex: level.zIndex,
                    boxShadow: "0 4px 20px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.2)",
                  }}
                />
              ))}

              {/* Rotating icon containers for each orbit level */}
              {orbitLevels.map((level, lvlIndex) => {
                // Container is 254px, ring size in pixels
                const containerSize = 254;
                const ringSize = (level.sizePercent / 100) * containerSize;
                const ringRadius = ringSize / 2;
                // Position icons at 80% of the ring radius
                const iconRadius = ringRadius * 0.8;
                
                // All rings rotate at the same speed
                const duration = 55; // seconds for full rotation

                return (
                  <motion.div
                    key={`orbit-${level.level}`}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ ...springTransition, delay: 0.3 + lvlIndex * 0.1 }}
                    viewport={{ once: true }}
                    className="absolute"
                    style={{
                      width: ringSize,
                      height: ringSize,
                      zIndex: 40 + lvlIndex,
                      animation: `spin ${duration}s linear infinite`,
                    }}
                  >
                    {level.items.map((item, itemIndex) => {
                      const totalItems = level.items.length;
                      const angle = (itemIndex / totalItems) * 2 * Math.PI - Math.PI / 2;
                      
                      // Calculate pixel offsets from center of this orbit container
                      const xOffset = Math.cos(angle) * iconRadius;
                      const yOffset = Math.sin(angle) * iconRadius;

                      return (
                        <motion.div
                          key={`${level.level}-${itemIndex}`}
                          initial={{ opacity: 0, scale: 0.3 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ ...springTransition, delay: 0.5 + lvlIndex * 0.15 + itemIndex * 0.08 }}
                          viewport={{ once: true }}
                          className="absolute flex flex-col items-center justify-center"
                          style={{ 
                            left: `calc(50% + ${xOffset}px)`,
                            top: `calc(50% + ${yOffset}px)`,
                            transform: 'translate(-50%, -50%)',
                            // Counter-rotate to keep icons upright
                            animation: `spin ${duration}s linear infinite reverse`,
                          }}
                        >
                          {item.type === "logo" ? (
                            <div className="w-6 h-6 md:w-7 md:h-7 bg-white/95 backdrop-blur-sm rounded-full p-1 flex items-center justify-center hover:scale-110 transition-transform cursor-pointer shadow-sm" title={item.name} role="img" aria-label={item.name}>
                              <img 
                                src={getLogo(item.name || "")} 
                                alt={item.name}
                                className="w-full h-full object-contain"
                              />
                            </div>
                          ) : (
                            <div className="flex flex-col items-center group">
                              <div className="w-5 h-5 md:w-6 md:h-6 bg-white/95 backdrop-blur-sm rounded-full p-0.5 shadow-sm flex items-center justify-center text-black hover:scale-110 transition-transform cursor-pointer" role="img" aria-label={item.label}>
                                {item.icon && <item.icon className="w-full h-full" />}
                              </div>
                              <span className="text-[8px] font-bold text-white mt-0.5 bg-black/30 px-1 py-0.5 rounded-full backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                                {item.label}
                              </span>
                            </div>
                          )}
                        </motion.div>
                      );
                    })}
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Text Content (Right) — design: typography hierarchy, muted secondary text */}
          <div className="flex-1 space-y-6">
            {orbitLevels.map((level, index) => (
              <motion.div
                key={level.level}
                initial={{ opacity: 0, x: 12 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ ...springTransition, delay: index * 0.2 + 0.3 }}
                viewport={{ once: true }}
                className="flex gap-3"
              >
                <div className={`w-0.5 h-auto rounded-full bg-gradient-to-b ${level.color}`} />
                <div>
                  <h3 className="text-base font-semibold tracking-tight mb-1">{level.level}</h3>
                  <p className="text-sm text-zinc-500 leading-relaxed">
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
