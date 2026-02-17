"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const springTransition = { type: "spring" as const, stiffness: 300, damping: 30 };

interface ProjectImageGalleryProps {
  images: string[];
  title: string;
}

export default function ProjectImageGallery({ images, title }: ProjectImageGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const openLightbox = (index: number) => {
    setSelectedIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = useCallback(() => setLightboxOpen(false), []);

  const goPrev = useCallback(() => setSelectedIndex((i) => (i <= 0 ? images.length - 1 : i - 1)), [images.length]);
  const goNext = useCallback(() => setSelectedIndex((i) => (i >= images.length - 1 ? 0 : i + 1)), [images.length]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [lightboxOpen, closeLightbox, goPrev, goNext]);

  if (!images?.length) return null;

  return (
    <div className="space-y-4">
      {/* Featured image — click to expand */}
      <motion.button
        type="button"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={springTransition}
        onClick={() => openLightbox(selectedIndex)}
        className="relative w-full aspect-video rounded-xl overflow-hidden bg-zinc-100 ring-1 ring-black/5 cursor-zoom-in focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:ring-offset-2"
        aria-label="Expand image"
      >
        <Image
          src={images[selectedIndex] ?? images[0]}
          alt={`${title} — view ${selectedIndex + 1}`}
          fill
          className="object-cover transition-transform duration-300 hover:scale-105"
          sizes="(max-width: 768px) 100vw, 380px"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
        <span className="absolute bottom-2 right-2 text-xs text-white/90 bg-black/40 backdrop-blur-sm px-2 py-1 rounded">
          Click to expand
        </span>
      </motion.button>

      {/* Thumbnail strip — click to select or open lightbox */}
      {images.length > 1 && (
        <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-thin">
          {images.map((src, i) => (
            <motion.button
              key={src + i}
              type="button"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ ...springTransition, delay: i * 0.05 }}
              onClick={() => {
                setSelectedIndex(i);
                openLightbox(i);
              }}
              className={`relative shrink-0 w-16 h-16 rounded-lg overflow-hidden ring-2 transition-all duration-200 focus:outline-none focus:ring-offset-2 focus:ring-offset-white cursor-pointer ${
                selectedIndex === i
                  ? "ring-zinc-900 ring-offset-2"
                  : "ring-transparent hover:ring-zinc-300"
              }`}
              aria-label={`View image ${i + 1}`}
            >
              <Image
                src={src}
                alt=""
                fill
                className="object-cover"
                sizes="64px"
              />
            </motion.button>
          ))}
        </div>
      )}

      {/* Lightbox — expanded view */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md"
            onClick={closeLightbox}
            role="dialog"
            aria-modal="true"
            aria-label="Expanded image view"
          >
            {/* Close button */}
            <button
              type="button"
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white"
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Image container — click outside to close, stop propagation on image */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={springTransition}
              className="relative max-w-[90vw] max-h-[90vh] mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={images[selectedIndex] ?? images[0]}
                alt={`${title} — view ${selectedIndex + 1}`}
                width={1200}
                height={800}
                className="object-contain max-h-[90vh] w-auto h-auto rounded-lg shadow-2xl"
                sizes="90vw"
              />
            </motion.div>

            {/* Prev / Next */}
            {images.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    goPrev();
                  }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-8 h-8" />
                </button>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    goNext();
                  }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-8 h-8" />
                </button>
                <span className="absolute bottom-4 left-1/2 -translate-x-1/2 text-sm text-white/80 bg-black/40 backdrop-blur-sm px-3 py-1.5 rounded-full">
                  {selectedIndex + 1} / {images.length}
                </span>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
