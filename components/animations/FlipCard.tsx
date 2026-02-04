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

  const flipTransition = {
    type: "tween",
    duration: 1.2,
    ease: "easeInOut",
  };

  return (
    <div
      className="relative w-full h-48 @md:h-56 @lg:h-64 cursor-pointer group"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        className="w-full h-full"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={flipTransition}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front of Card */}
        <div
          className="absolute inset-0 overflow-hidden rounded-xl border border-white/10 shadow-xl"
          style={{ backfaceVisibility: "hidden" }}
        >
          {/* Project Image Background */}
          <div className="w-full h-full relative bg-gradient-to-br from-zinc-700 to-zinc-900">
            {image ? (
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover object-left-top"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-white/20">
                <span className="text-xs font-medium">No Image</span>
              </div>
            )}
          </div>

          {/* Dark Overlay with Centered Title */}
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center transition-colors duration-300 group-hover:bg-black/40">
            <div className="text-center px-3 @sm:px-4 @md:px-5">
              <h3 className="text-sm @md:text-base @lg:text-lg font-bold text-white tracking-tight leading-tight drop-shadow-md">
                {title}
              </h3>
              <div className="w-6 h-0.5 bg-white/60 mx-auto mt-1.5 shadow-sm"></div>
            </div>
          </div>
        </div>

        {/* Back of Card */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-zinc-900 to-black text-white p-2 @sm:p-2.5 @md:p-3 flex flex-col justify-between rounded-xl border border-white/10 shadow-xl"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <div className="space-y-1">
            <h3 className="text-xs @sm:text-sm @md:text-base font-bold tracking-tight">{title}</h3>
            <p className="text-[10px] @sm:text-xs text-white/70 leading-snug line-clamp-2">
              {description}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-1 pt-0.5">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-1.5 py-0.5 bg-white/10 backdrop-blur-sm text-[8px] @sm:text-[10px] text-white/90 rounded border border-white/10"
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
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="w-full py-1.5 @md:py-2 bg-white text-black hover:bg-zinc-100 transition-colors text-[10px] @sm:text-xs font-semibold rounded-lg"
            >
              Read More
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
