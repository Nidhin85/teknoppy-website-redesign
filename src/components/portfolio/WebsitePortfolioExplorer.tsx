import React, { useState, useEffect, useMemo } from 'react';
import { 
  websitePortfolioProjects, 
  portfolioFilterCategories, 
  type WebsitePortfolioItem,
  type PortfolioFilterCategory 
} from '../../data/websitePortfolioData';
import { ChevronRight } from 'lucide-react';

export const WebsitePortfolioExplorer: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  // Synchronize initial filter with URL query parameter ?category=...
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const catParam = params.get('category');
      if (catParam) {
        const match = portfolioFilterCategories.find(
          c => c.id === catParam.toLowerCase() || c.slug === catParam.toLowerCase()
        );
        if (match) setActiveCategory(match.id);
      }

      const handlePopState = () => {
        const p = new URLSearchParams(window.location.search);
        const c = p.get('category');
        if (c) {
          const match = portfolioFilterCategories.find(
            cat => cat.id === c.toLowerCase() || cat.slug === c.toLowerCase()
          );
          if (match) setActiveCategory(match.id);
        } else {
          setActiveCategory('all');
        }
      };

      window.addEventListener('popstate', handlePopState);
      return () => window.removeEventListener('popstate', handlePopState);
    }
  }, []);

  const handleSelectCategory = (catId: string) => {
    setActiveCategory(catId);
    if (typeof window !== 'undefined') {
      const found = portfolioFilterCategories.find(c => c.id === catId);
      const url = new URL(window.location.href);
      if (catId === 'all' || !found) {
        url.searchParams.delete('category');
      } else {
        url.searchParams.set('category', found.slug);
      }
      window.history.pushState({}, '', url.toString());
    }
  };

  // Category counts calculation
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { all: websitePortfolioProjects.length };
    portfolioFilterCategories.forEach(cat => {
      if (cat.id !== 'all') {
        counts[cat.id] = websitePortfolioProjects.filter(p => 
          p.categories ? p.categories.includes(cat.id) : p.category === cat.id
        ).length;
      }
    });
    return counts;
  }, []);

  // Filtered projects based on activeCategory
  const filteredProjects = useMemo(() => {
    if (activeCategory === 'all') return websitePortfolioProjects;
    return websitePortfolioProjects.filter(p => 
      p.categories ? p.categories.includes(activeCategory) : p.category === activeCategory
    );
  }, [activeCategory]);

  return (
    <div className="w-full">
      {/* =========================================================================
          CATEGORY FILTER NAVIGATION (Horizontally scrollable on mobile, centered on desktop)
          ========================================================================= */}
      <div className="mb-10 sm:mb-14">
        <div className="flex items-center justify-start lg:justify-center flex-nowrap lg:flex-wrap gap-2 sm:gap-2.5 overflow-x-auto lg:overflow-x-visible no-scrollbar py-2 px-4 lg:px-0">
          {portfolioFilterCategories.map((cat) => {
            const isActive = activeCategory === cat.id;
            const count = categoryCounts[cat.id] || 0;
            if (count === 0 && cat.id !== 'all') return null;

            return (
              <button
                key={cat.id}
                onClick={() => handleSelectCategory(cat.id)}
                className={`inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-200 cursor-pointer flex-shrink-0 ${
                  isActive
                    ? 'bg-[#F05A2C] text-white shadow-md shadow-[#F05A2C]/25 scale-[1.02]'
                    : 'bg-white text-neutral-600 hover:text-neutral-900 border border-neutral-200/80 hover:border-neutral-300 hover:bg-neutral-50/80'
                }`}
                aria-pressed={isActive}
              >
                <span>{cat.label}</span>
                <span className={`text-[11px] px-1.5 py-0.5 rounded-full font-semibold ${
                  isActive ? 'bg-white/20 text-white' : 'bg-neutral-100 text-neutral-500'
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* =========================================================================
          PORTFOLIO GRID (2 large cards per row on desktop & tablet, 1 on mobile)
          ========================================================================= */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-9">
        {filteredProjects.map((project, idx) => {
          const isPriority = idx < 4;

          return (
            <a
              key={project.id}
              href={project.href}
              className="group bg-white rounded-xl sm:rounded-2xl border border-neutral-200/80 hover:border-neutral-300 shadow-[0_2px_14px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.07)] hover:-translate-y-1 transition-all duration-300 p-3 sm:p-4 lg:p-5 flex flex-col justify-between h-full"
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
              </div>

              {/* CARD FOOTER (Clean, ultra-compact: ~10–15% of card, matching reference layout) */}
              <div className="pt-3 sm:pt-3.5 mt-auto border-t border-neutral-100 flex items-center justify-between gap-3">
                <div className="min-w-0 flex-grow">
                  <h2 className="text-sm sm:text-base lg:text-lg font-semibold text-neutral-800 group-hover:text-[#F05A2C] transition-colors leading-snug line-clamp-1">
                    {project.name}
                  </h2>
                  <p className="text-[11px] sm:text-xs font-normal text-neutral-400 mt-0.5 truncate">
                    {project.industryLabel}
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

      {/* Fallback for empty category state */}
      {filteredProjects.length === 0 && (
        <div className="text-center py-16 bg-white rounded-3xl border border-neutral-200/60 p-8 mt-4">
          <p className="text-neutral-500 font-medium text-sm">No projects found in this category.</p>
          <button
            onClick={() => handleSelectCategory('all')}
            className="mt-4 px-5 py-2.5 rounded-full bg-[#F05A2C] text-white text-xs font-bold shadow-sm cursor-pointer"
          >
            Show All Projects
          </button>
        </div>
      )}
    </div>
  );
};

export default WebsitePortfolioExplorer;
