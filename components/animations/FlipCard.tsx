"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

interface FlipCardProps {
  title: string;
  image: string;
  description: string;
  techStack: string[];
  slug: string;
}

export default function FlipCard({
  title,
  image,
  description,
  techStack,
  slug,
}: FlipCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  // Design Rules: Spring physics
  const springTransition = {
    type: "spring",
    stiffness: 300,
    damping: 30,
  };

  return (
    <div
      className="relative w-full h-64 cursor-pointer group"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        className="w-full h-full"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={springTransition}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front of Card */}
        <div
          className="absolute inset-0 overflow-hidden rounded-2xl border border-white/10 shadow-2xl"
          style={{ backfaceVisibility: "hidden" }}
        >
          {/* Project Image Background */}
          <div className="w-full h-full relative bg-gradient-to-br from-zinc-700 to-zinc-900">
            {image ? (
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-white/20">
                <span className="text-xs font-medium">No Image</span>
              </div>
            )}
          </div>

          {/* Dark Overlay with Centered Title */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px] flex items-center justify-center">
            <div className="text-center px-8">
              <h3 className="text-2xl font-bold text-white tracking-tight leading-tight">
                {title}
              </h3>
              <div className="w-12 h-0.5 bg-white/30 mx-auto mt-3"></div>
            </div>
          </div>
        </div>

        {/* Back of Card */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-zinc-900 to-black text-white p-5 flex flex-col justify-between rounded-2xl border border-white/10 shadow-xl"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <div className="space-y-2">
            <h3 className="text-lg font-bold tracking-tight">{title}</h3>
            <p className="text-[11px] text-white/70 leading-relaxed">
              {description}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-1.5 pt-1">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-0.5 bg-white/10 backdrop-blur-sm text-[10px] text-white/90 rounded-lg border border-white/10"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <Link href={`/projects/${slug}`}>
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={springTransition}
              className="w-full py-2 bg-white text-black hover:bg-zinc-100 transition-colors text-xs font-semibold rounded-xl"
            >
              Read Story
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
