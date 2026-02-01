"use client";

import { motion } from "framer-motion";
import FlipCard from "@/components/animations/FlipCard";
import { projects } from "@/data/projects";

export default function ProjectGallery() {
  // Design Rules: Spring physics
  const springTransition = {
    type: "spring",
    stiffness: 300,
    damping: 30,
  };

  return (
    <section id="projects" className="min-h-[66vh] bg-white text-black px-6 py-[clamp(3rem,10vh,5rem)]">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={springTransition}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-[clamp(3rem,6vw,3.75rem)] font-bold mb-3 tracking-tight">Featured Projects</h2>
          <p className="text-zinc-600 text-[clamp(0.8rem,1.5vw,0.875rem)] max-w-2xl leading-relaxed mx-auto">
            Mini detail builder — Info about each project with tech stack and context.
          </p>
        </motion.div>

        {/* Project Grid */}
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(320px,100%),1fr))] gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                ...springTransition, 
                delay: index * 0.1 
              }}
              viewport={{ once: true }}
              className="@container"
            >
              <FlipCard
                title={project.title}
                image={project.image}
                description={project.description}
                techStack={project.techStack}
                slug={project.slug}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
