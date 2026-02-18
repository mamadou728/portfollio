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
    <section id="projects" className="min-h-0 bg-white text-black px-6 pt-[clamp(0.75rem,2vh,1.5rem)] pb-[clamp(2rem,5vh,3rem)]">
      <div className="max-w-4xl mx-auto">
        {/* Section Title */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={springTransition}
          viewport={{ once: true }}
          className="mb-8 text-center"
        >
          <h2 className="text-[clamp(1.75rem,4.5vw,2.5rem)] font-bold tracking-tight">Featured Projects</h2>
        </motion.div>

        {/* Project Grid */}
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(280px,100%),1fr))] gap-6 max-w-3xl mx-auto [&>*:last-child:nth-child(odd)]:col-start-1 [&>*:last-child:nth-child(odd)]:col-end-[-1] [&>*:last-child:nth-child(odd)]:max-w-[calc(50%-0.75rem)] [&>*:last-child:nth-child(odd)]:mx-auto">
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
