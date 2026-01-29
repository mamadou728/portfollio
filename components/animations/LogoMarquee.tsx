"use client";

import { TechLogo } from "@/data/techLogos";
import Image from "next/image";
import { motion } from "framer-motion";

interface LogoMarqueeProps {
  logos: TechLogo[];
  direction?: "left" | "right";
  duration?: number;
  opacity?: number;
}

export default function LogoMarquee({
  logos,
  direction = "left",
  duration = 40,
  opacity = 0.6,
}: LogoMarqueeProps) {
  // Duplicate logos 2 times for seamless infinite scroll
  const duplicatedLogos = [...logos, ...logos];

  return (
    <div className="relative w-full overflow-hidden py-4">
      <motion.div
        className="flex gap-8 items-center"
        animate={{
          x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: duration,
            ease: "linear",
          },
        }}
        style={{ opacity: opacity }}
      >
        {duplicatedLogos.map((logo, index) => (
          <div
            key={`${logo.name}-${index}`}
            className="flex-shrink-0 w-12 h-12 relative"
          >
            <Image
              src={logo.iconUrl}
              alt={logo.alt}
              width={48}
              height={48}
              className="object-contain"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
