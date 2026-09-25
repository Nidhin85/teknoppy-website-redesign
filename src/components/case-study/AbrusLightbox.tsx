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
      {/* Gallery Grid in Standardized White Theme */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 items-stretch">
        {items.map((item, idx) => {
          const isLarge = idx === 0;
          return (
            <div
              key={item.id}
              className={`group flex flex-col justify-between overflow-hidden rounded-2xl border border-neutral-200/80 bg-white shadow-xs hover:border-[#F05A2C]/50 hover:shadow-md transition-all duration-300 cursor-pointer ${
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
              {/* Image Frame - 100% full screenshot visibility with object-contain */}
              <div className={`relative w-full bg-[#F8FAFC] border-b border-neutral-100 flex items-center justify-center p-4 sm:p-6 overflow-hidden ${
                isLarge ? 'h-[360px] sm:h-[440px] lg:h-[480px]' : 'h-[260px] sm:h-[320px]'
              }`}>
                <img
                  src={item.src}
                  alt={item.title}
                  loading="lazy"
                  className="max-w-full max-h-full object-contain drop-shadow-sm group-hover:scale-[1.02] transition-transform duration-500 ease-out"
                />

                {/* Floating Category Tag */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/95 text-[#F05A2C] border border-orange-200/80 shadow-xs backdrop-blur-md">
                    {item.category}
                  </span>
                </div>

                {/* Expand Hover Icon */}
                <div className="absolute bottom-4 right-4 z-10 w-9 h-9 rounded-full bg-white/95 text-neutral-700 border border-neutral-200/80 flex items-center justify-center shadow-sm opacity-0 group-hover:opacity-100 group-hover:scale-100 scale-90 group-hover:text-[#F05A2C] transition-all duration-300">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>

              {/* Card Meta & Caption */}
              <div className="p-5 sm:p-6 space-y-2 bg-white">
                <h3 className="text-neutral-900 text-base sm:text-lg font-bold tracking-tight group-hover:text-[#F05A2C] transition-colors">
                  {item.title}
                </h3>
                <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed line-clamp-2">
                  {item.caption}
                </p>
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
              <span className="px-3 py-1 rounded-full bg-white/10 text-white text-xs font-semibold tracking-wide backdrop-blur-md border border-white/15">
                {activeIdx! + 1} / {items.length}
              </span>
              <span className="hidden sm:inline-block text-neutral-200 text-sm font-medium">
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

          {/* Image Container with 100% object-contain */}
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
              <p className="mt-3 text-center text-xs sm:text-sm text-neutral-200 max-w-2xl px-4 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/15">
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
