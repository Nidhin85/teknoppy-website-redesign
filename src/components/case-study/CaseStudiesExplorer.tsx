import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { 
  caseStudiesList, 
  filterCategories, 
  type CaseStudyItem, 
  type FilterCategory 
} from '../../data/caseStudiesData';
import { 
  Search, 
  X, 
  Maximize2, 
  Filter,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  ZoomOut
} from 'lucide-react';

export const CaseStudiesExplorer: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const catParam = params.get('category');
      if (catParam) {
        const found = filterCategories.find(c => c.slug === catParam || c.id === catParam);
        if (found) return found.id;
      }
    }
    return 'all';
  });
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [lightboxItem, setLightboxItem] = useState<CaseStudyItem | null>(null);
  const [isZoomed, setIsZoomed] = useState<boolean>(false);

  // Synchronize initial filter with URL query parameter ?category=...
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const catParam = params.get('category');
      if (catParam) {
        const found = filterCategories.find(c => c.slug === catParam || c.id === catParam);
        if (found) {
          setActiveCategory(found.id);
        }
      }

      const handlePopState = () => {
        const p = new URLSearchParams(window.location.search);
        const c = p.get('category');
        if (c) {
          const match = filterCategories.find(cat => cat.slug === c || cat.id === c);
          if (match) setActiveCategory(match.id);
        } else {
          setActiveCategory('all');
        }
      };

      window.addEventListener('popstate', handlePopState);
      return () => window.removeEventListener('popstate', handlePopState);
    }
  }, []);

  // Update URL query parameter when category changes
  const handleSelectCategory = (catId: string) => {
    setActiveCategory(catId);
    if (typeof window !== 'undefined') {
      const found = filterCategories.find(c => c.id === catId);
      const url = new URL(window.location.href);
      if (catId === 'all' || !found) {
        url.searchParams.delete('category');
      } else {
        url.searchParams.set('category', found.slug);
      }
      window.history.pushState({}, '', url.toString());
    }
  };

  // Category counts calculation (exact match against primary category)
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { all: caseStudiesList.length };
    filterCategories.forEach(cat => {
      if (cat.id !== 'all') {
        counts[cat.id] = caseStudiesList.filter(item => 
          item.category.toLowerCase().replace(/-/g, ' ') === cat.label.toLowerCase().replace(/-/g, ' ')
        ).length;
      }
    });
    return counts;
  }, []);

  // Filtered projects based on activeCategory and searchQuery
  const filteredProjects = useMemo(() => {
    let result = caseStudiesList;

    // Filter by Category
    if (activeCategory !== 'all') {
      const selectedCat = filterCategories.find(c => c.id === activeCategory);
      if (selectedCat) {
        result = result.filter(item => 
          item.category.toLowerCase().replace(/-/g, ' ') === selectedCat.label.toLowerCase().replace(/-/g, ' ')
        );
      }
    }

    // Filter by Search Query
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter(item => 
        item.title.toLowerCase().includes(q) ||
        item.client.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q) ||
        (item.location && item.location.toLowerCase().includes(q)) ||
        (item.tag && item.tag.toLowerCase().includes(q)) ||
        (item.highlightMetric && item.highlightMetric.toLowerCase().includes(q))
      );
    }

    return result;
  }, [activeCategory, searchQuery]);

  // Lightbox handlers
  const openLightbox = (item: CaseStudyItem) => {
    setLightboxItem(item);
    setIsZoomed(false);
  };

  const closeLightbox = useCallback(() => {
    setLightboxItem(null);
    setIsZoomed(false);
  }, []);

  const navigateLightbox = useCallback((direction: 'next' | 'prev') => {
    if (!lightboxItem) return;
    const currentIndex = filteredProjects.findIndex(p => p.id === lightboxItem.id);
    if (currentIndex === -1) return;

    let nextIndex = direction === 'next' ? currentIndex + 1 : currentIndex - 1;
    if (nextIndex >= filteredProjects.length) nextIndex = 0;
    if (nextIndex < 0) nextIndex = filteredProjects.length - 1;

    setLightboxItem(filteredProjects[nextIndex]);
    setIsZoomed(false);
  }, [lightboxItem, filteredProjects]);

  // Keyboard navigation & body scroll lock for Lightbox
  useEffect(() => {
    if (!lightboxItem) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') navigateLightbox('next');
      if (e.key === 'ArrowLeft') navigateLightbox('prev');
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [lightboxItem, closeLightbox, navigateLightbox]);

  return (
    <div className="w-full space-y-8 sm:space-y-12">
      
      {/* =========================================================================
          FILTER SECTION — RESPONSIVE (FLEX-WRAP DESKTOP + HORIZONTAL MOBILE)
          ========================================================================= */}
      <div id="filters" className="sticky top-[72px] lg:top-[76px] z-30 py-3.5 sm:py-4 bg-white/95 backdrop-blur-2xl border-y border-neutral-200/80 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3 sm:space-y-3.5">
          
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 sm:gap-4">
            
            {/* Desktop & Tablet: Wrapping grid of all 9 pills. Mobile: Touch horizontal scroll rail. */}
            <div className="w-full lg:flex-1 min-w-0">
              <div className="flex items-center gap-2 sm:gap-2.5 overflow-x-auto no-scrollbar sm:overflow-x-visible flex-nowrap sm:flex-wrap py-1">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-neutral-500 mr-1 flex-shrink-0">
                  <Filter className="w-3.5 h-3.5 text-[#F05A2C]" />
                  Categories:
                </span>

                {filterCategories.map((cat) => {
                  const isActive = activeCategory === cat.id;
                  const count = categoryCounts[cat.id] ?? 0;

                  return (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => handleSelectCategory(cat.id)}
                      className={`group relative flex-shrink-0 flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-full text-xs font-bold tracking-wide transition-all duration-200 cursor-pointer ${
                        isActive
                          ? 'bg-[#F05A2C] text-white shadow-md shadow-[#F05A2C]/25 border border-[#F05A2C] ring-2 ring-[#F05A2C]/20'
                          : 'bg-white text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50 border border-neutral-200/80 hover:border-neutral-300'
                      }`}
                      aria-pressed={isActive}
                    >
                      <span className="whitespace-nowrap">{cat.label}</span>
                      <span 
                        className={`inline-flex items-center justify-center min-w-[20px] h-5 px-1.5 rounded-full text-[11px] font-extrabold transition-colors ${
                          isActive 
                            ? 'bg-white/20 text-white' 
                            : 'bg-neutral-100 text-neutral-500 group-hover:bg-neutral-200 group-hover:text-neutral-700'
                        }`}
                      >
                        {count}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Quick Text Search Input */}
            <div className="relative w-full lg:w-72 flex-shrink-0">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-neutral-400">
                <Search className="w-4 h-4" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search projects, client, tech..."
                className="w-full bg-neutral-50/90 border border-neutral-200/80 focus:border-[#F05A2C] focus:ring-2 focus:ring-[#F05A2C]/20 text-neutral-900 placeholder:text-neutral-400 text-xs sm:text-sm rounded-full pl-9 pr-9 py-2.5 outline-none transition-all"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-neutral-400 hover:text-neutral-700 cursor-pointer"
                  title="Clear search"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

          </div>

          {/* Active Filter Info & Results Count Banner */}
          <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-neutral-500 pt-2 border-t border-neutral-200/60">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-neutral-500">Active Filter:</span>
              <span className="font-bold px-2.5 py-0.5 rounded-full bg-orange-50 text-[#F05A2C] border border-orange-200/60">
                {filterCategories.find(c => c.id === activeCategory)?.label || 'All Projects'}
              </span>
              <span>•</span>
              <span className="font-medium text-neutral-700">
                <strong className="text-neutral-900 font-bold">{filteredProjects.length}</strong> {filteredProjects.length === 1 ? 'Project' : 'Projects'} Displayed
              </span>
              {searchQuery && (
                <span className="italic text-neutral-500">
                  matching &ldquo;{searchQuery}&rdquo;
                </span>
              )}
            </div>

            {(activeCategory !== 'all' || searchQuery) && (
              <button
                type="button"
                onClick={() => {
                  handleSelectCategory('all');
                  setSearchQuery('');
                }}
                className="text-xs font-bold text-[#F05A2C] hover:text-[#D24A20] transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <span>Reset to All Projects ({caseStudiesList.length})</span>
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

        </div>
      </div>

      {/* =========================================================================
          MAIN CASE STUDIES GRID (2-COLUMN IMAGE-FIRST SHOWCASE)
          ========================================================================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-24">
        
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-9">
            {filteredProjects.map((project, idx) => {
              const isPriority = idx < 4;

              return (
                <a
                  key={project.id}
                  href={project.href}
                  className="group bg-white rounded-xl sm:rounded-2xl border border-neutral-200/80 hover:border-neutral-300 shadow-[0_2px_14px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.07)] hover:-translate-y-1 transition-all duration-300 p-3 sm:p-4 lg:p-5 flex flex-col justify-between h-full cursor-pointer"
                >
                  {/* IMAGE CONTAINER (Consistent aspect ratio presentation area, 100% full screenshot, zero cropping) */}
                  <div className="w-full aspect-[16/10] bg-[#f8f9fa] rounded-lg sm:rounded-xl overflow-hidden border border-neutral-100/90 flex items-center justify-center p-2 sm:p-3 relative">
                    <img
                      src={project.image}
                      alt={project.imageAlt}
                      loading={isPriority ? 'eager' : 'lazy'}
                      decoding="async"
                      className="max-w-full max-h-full w-auto h-auto object-contain block transition-transform duration-300 group-hover:scale-[1.01]"
                    />

                    {/* Quick Lightbox Inspection Trigger */}
                    <button
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        openLightbox(project);
                      }}
                      className="absolute top-2.5 right-2.5 p-1.5 rounded-lg bg-neutral-900/60 hover:bg-[#F05A2C] text-white opacity-0 group-hover:opacity-100 transition-all duration-200 shadow-sm backdrop-blur-xs cursor-pointer z-10"
                      title="Quick zoom screenshot"
                      aria-label={`Zoom screenshot for ${project.title}`}
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* CARD FOOTER (Clean, ultra-compact: ~10–15% of card, matching approved portfolio layout) */}
                  <div className="pt-3 sm:pt-3.5 mt-auto border-t border-neutral-100 flex items-center justify-between gap-3">
                    <div className="min-w-0 flex-grow">
                      <h2 className="text-sm sm:text-base lg:text-lg font-semibold text-neutral-800 group-hover:text-[#F05A2C] transition-colors leading-snug line-clamp-1">
                        {project.title}
                      </h2>
                      <p className="text-[11px] sm:text-xs font-normal text-neutral-400 mt-0.5 truncate">
                        {project.category} {project.location ? `• ${project.location}` : ''}
                      </p>
                    </div>

                    <div className="flex-shrink-0 text-neutral-300 group-hover:text-[#F05A2C] group-hover:translate-x-1 transition-all duration-200 pl-2">
                      <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 stroke-[1.75]" />
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-20 bg-neutral-50/60 rounded-3xl border border-neutral-200/80 p-8 space-y-4">
            <div className="w-14 h-14 rounded-full bg-white border border-neutral-200/80 shadow-xs flex items-center justify-center mx-auto text-neutral-400">
              <Search className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-bold text-neutral-900">No case studies found</h4>
            <p className="text-sm text-neutral-500 max-w-md mx-auto">
              No verified case studies match your current search or category filter.
            </p>
            <button
              type="button"
              onClick={() => {
                handleSelectCategory('all');
                setSearchQuery('');
              }}
              className="px-5 py-2.5 rounded-full bg-[#F05A2C] hover:bg-[#D24A20] text-white text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer shadow-sm shadow-[#F05A2C]/20"
            >
              Reset All Filters ({caseStudiesList.length})
            </button>
          </div>
        )}

      </div>

      {/* =========================================================================
          IMAGE LIGHTBOX MODAL (ACCESSIBLE, ESC KEY, BACKDROP BLUR)
          ========================================================================= */}
      {lightboxItem && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-2xl p-4 sm:p-8"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label={lightboxItem.title}
        >
          <div 
            className="relative max-w-5xl w-full max-h-[92vh] flex flex-col bg-white border border-neutral-200/80 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-200 bg-neutral-50/90">
              <div className="space-y-0.5 max-w-xl">
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#F05A2C] bg-orange-50 px-2.5 py-0.5 rounded-full border border-orange-200/60">
                    {lightboxItem.category}
                  </span>
                  {lightboxItem.location && (
                    <span className="text-xs text-neutral-500">{lightboxItem.location}</span>
                  )}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-neutral-900 truncate">
                  {lightboxItem.title}
                </h3>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setIsZoomed(!isZoomed)}
                  className="p-2 rounded-lg bg-white hover:bg-neutral-100 text-neutral-700 border border-neutral-200/80 transition-colors cursor-pointer"
                  title={isZoomed ? "Zoom out" : "Zoom in"}
                >
                  {isZoomed ? <ZoomOut className="w-4 h-4" /> : <ZoomIn className="w-4 h-4" />}
                </button>
                <button
                  type="button"
                  onClick={closeLightbox}
                  className="p-2 rounded-lg bg-white hover:bg-rose-50 text-neutral-700 hover:text-rose-600 border border-neutral-200/80 transition-colors cursor-pointer"
                  title="Close (Esc)"
                  aria-label="Close dialog"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Image View */}
            <div className="relative flex-1 overflow-auto bg-neutral-950 p-4 flex items-center justify-center min-h-[300px]">
              <img
                src={lightboxItem.image}
                alt={lightboxItem.imageAlt}
                className={`max-h-[70vh] w-auto object-contain rounded-lg transition-transform duration-300 ${
                  isZoomed ? 'scale-150 cursor-zoom-out' : 'cursor-zoom-in'
                }`}
                onClick={() => setIsZoomed(!isZoomed)}
              />

              <button
                type="button"
                onClick={() => navigateLightbox('prev')}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/70 hover:bg-[#F05A2C] text-white backdrop-blur-md transition-colors border border-white/10 cursor-pointer"
                title="Previous case study (Left arrow)"
                aria-label="Previous"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={() => navigateLightbox('next')}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/70 hover:bg-[#F05A2C] text-white backdrop-blur-md transition-colors border border-white/10 cursor-pointer"
                title="Next case study (Right arrow)"
                aria-label="Next"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-4 border-t border-neutral-200 bg-neutral-50/90 flex flex-wrap items-center justify-between gap-4">
              <p className="text-xs text-neutral-600 max-w-xl line-clamp-2">
                {lightboxItem.description}
              </p>

              <a
                href={lightboxItem.href}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#F05A2C] hover:bg-[#D24A20] text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-sm shadow-[#F05A2C]/20"
              >
                <span>Read Full Case Study</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};

export default CaseStudiesExplorer;
