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
    <section id="projects" className="min-h-[66vh] bg-white text-black px-6 py-20">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={springTransition}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold mb-3 tracking-tight">Projects</h2>
          <p className="text-zinc-600 text-sm max-w-2xl leading-relaxed">
            Mini detail builder — Info about each project with tech stack and context.
          </p>
        </motion.div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
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
