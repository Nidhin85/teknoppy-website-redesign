import React, { useState, useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2, ZoomIn, ZoomOut } from 'lucide-react';

export interface GalleryItem {
  id: string;
  src: string;
  title: string;
  category: string;
  caption: string;
  aspect?: string;
}

interface AbrusLightboxProps {
  items: GalleryItem[];
}

export const AbrusLightbox: React.FC<AbrusLightboxProps> = ({ items }) => {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);
  const [isZoomed, setIsZoomed] = useState<boolean>(false);

  const isOpen = activeIdx !== null;
  const currentItem = activeIdx !== null ? items[activeIdx] : null;

  const openLightbox = (index: number) => {
    setActiveIdx(index);
    setIsZoomed(false);
  };

  const closeLightbox = useCallback(() => {
    setActiveIdx(null);
    setIsZoomed(false);
  }, []);

  const nextItem = useCallback(() => {
    if (activeIdx === null) return;
    setActiveIdx((prev) => ((prev ?? 0) + 1) % items.length);
    setIsZoomed(false);
  }, [activeIdx, items.length]);

  const prevItem = useCallback(() => {
    if (activeIdx === null) return;
    setActiveIdx((prev) => ((prev ?? 0) - 1 + items.length) % items.length);
    setIsZoomed(false);
  }, [activeIdx, items.length]);

  // Keyboard navigation & body scroll lock
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeLightbox();
      } else if (e.key === 'ArrowRight') {
        nextItem();
      } else if (e.key === 'ArrowLeft') {
        prevItem();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, closeLightbox, nextItem, prevItem]);

  return (
    <div className="w-full">
      {/* Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 items-stretch">
        {items.map((item, idx) => {
          const isLarge = idx === 0;
          return (
            <div
              key={item.id}
              className={`group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0C1220]/90 shadow-lg hover:border-indigo-500/50 hover:shadow-[0_20px_50px_-10px_rgba(99,102,241,0.25)] transition-all duration-300 cursor-pointer ${
                isLarge ? 'md:col-span-12 lg:col-span-8' : 'md:col-span-6 lg:col-span-4'
              }`}
              onClick={() => openLightbox(idx)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  openLightbox(idx);
                }
              }}
              aria-label={`View ${item.title} image in full screen`}
            >
              <div className={`w-full overflow-hidden bg-neutral-900 ${isLarge ? 'h-[380px] sm:h-[480px] lg:h-[540px]' : 'h-[280px] sm:h-[340px]'}`}>
                <img
                  src={item.src}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Hover overlay with badge */}
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-neutral-950/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300 flex flex-col justify-between p-5 sm:p-7 pointer-events-none">
                <div className="flex justify-between items-center">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/20 backdrop-blur-md text-white border border-white/20">
                    {item.category}
                  </span>
                  <div className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-2 transition-all duration-300">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>

                <div>
                  <h3 className="text-white text-lg sm:text-xl font-bold tracking-tight mb-1">
                    {item.title}
                  </h3>
                  <p className="text-neutral-300 text-xs sm:text-sm line-clamp-2">
                    {item.caption}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Lightbox Modal */}
      {isOpen && currentItem && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={currentItem.title}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-xl p-3 sm:p-6 transition-all duration-300"
          onClick={(e) => {
            if (e.target === e.currentTarget) closeLightbox();
          }}
        >
          {/* Top control bar */}
          <div className="absolute top-4 left-4 right-4 sm:top-6 sm:left-6 sm:right-6 flex items-center justify-between z-20 pointer-events-auto">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-white/10 text-white text-xs font-medium tracking-wide backdrop-blur-md border border-white/15">
                {activeIdx! + 1} / {items.length}
              </span>
              <span className="hidden sm:inline-block text-neutral-300 text-sm font-medium">
                {currentItem.title}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setIsZoomed(!isZoomed)}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center backdrop-blur-md border border-white/15 transition-colors"
                aria-label={isZoomed ? "Zoom out" : "Zoom in"}
              >
                {isZoomed ? <ZoomOut className="w-4 h-4" /> : <ZoomIn className="w-4 h-4" />}
              </button>
              <button
                type="button"
                onClick={closeLightbox}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center backdrop-blur-md border border-white/15 transition-colors"
                aria-label="Close lightbox"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Navigation buttons */}
          {items.length > 1 && (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  prevItem();
                }}
                className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center backdrop-blur-md border border-white/15 transition-all shadow-lg"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  nextItem();
                }}
                className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center backdrop-blur-md border border-white/15 transition-all shadow-lg"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}

          {/* Image Container */}
          <div className="relative max-w-5xl max-h-[82vh] w-full flex flex-col items-center justify-center overflow-auto rounded-xl p-2">
            <img
              src={currentItem.src}
              alt={currentItem.title}
              className={`max-w-full max-h-[75vh] object-contain rounded-lg transition-transform duration-300 shadow-2xl ${
                isZoomed ? 'scale-125 cursor-zoom-out' : 'cursor-zoom-in'
              }`}
              onClick={() => setIsZoomed(!isZoomed)}
            />
            {currentItem.caption && (
              <p className="mt-3 text-center text-xs sm:text-sm text-neutral-300 max-w-2xl px-4 py-1.5 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
                {currentItem.caption}
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
export default AbrusLightbox;
