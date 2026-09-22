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
  ArrowRight, 
  Maximize2, 
  Sparkles, 
  MapPin, 
  Filter,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  ZoomOut,
  Lock,
  Compass,
  Layers,
  CheckCircle2
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

  // Featured Project: Abrus Krishna Finance (Spotlight when in 'all' or 'wordpress' and no search)
  const featuredProject = useMemo(() => {
    if (searchQuery.trim() === '' && (activeCategory === 'all' || activeCategory === 'wordpress')) {
      return caseStudiesList.find(p => p.id === 'abrus-krishna-finance-wordpress') || caseStudiesList[0];
    }
    return null;
  }, [activeCategory, searchQuery]);

  // Categorized project groups for the 'All Projects' editorial flow
  const categorizedGroups = useMemo(() => {
    if (activeCategory !== 'all' || searchQuery.trim() !== '') return null;

    return [
      {
        id: 'web-design',
        title: 'Web Design & Development',
        subtitle: 'B2B engineering, technical calibration, infrastructure & personal brand platforms',
        count: 5,
        projects: caseStudiesList.filter(p => p.category === 'Web Design & Development')
      },
      {
        id: 'ecommerce',
        title: 'E-commerce Development',
        subtitle: 'Digital course marketplaces, live botanical delivery & Pan-India retail commerce',
        count: 3,
        projects: caseStudiesList.filter(p => p.category === 'E-commerce Development')
      },
      {
        id: 'shopify',
        title: 'Shopify D2C Flagships',
        subtitle: 'Direct-to-consumer lifestyle, luxury modest fashion & mattress engineering stores',
        count: 3,
        projects: caseStudiesList.filter(p => p.category === 'Shopify')
      },
      {
        id: 'web-app',
        title: 'Web Applications & Cloud Portals',
        subtitle: 'Commercial field dispatch platforms & real-time healthtech emergency coordination',
        count: 2,
        projects: caseStudiesList.filter(p => p.category === 'Web Application')
      },
      {
        id: 'seo',
        title: 'Search Engine Optimization (SEO)',
        subtitle: 'B2B testing query domination, holiday tourism discovery & GCC commercial agency capture',
        count: 3,
        projects: caseStudiesList.filter(p => p.category === 'SEO')
      },
      {
        id: 'uiux',
        title: 'UI/UX Design Systems',
        subtitle: 'High-trust borrower financial journeys & serene multilingual retreat interaction design',
        count: 2,
        projects: caseStudiesList.filter(p => p.category === 'UI/UX Design')
      },
      {
        id: 'wordpress',
        title: 'WordPress & Digital Publishing',
        subtitle: 'Multilingual European wellness bridges & search-intent lending architectures',
        count: 2,
        projects: caseStudiesList.filter(p => p.category === 'WordPress Development')
      },
      {
        id: 'digital-marketing',
        title: 'Digital Marketing & Social Campaigns',
        subtitle: 'Architectural visual merchandising & eco-luxury plantation resort guest acquisition',
        count: 2,
        projects: caseStudiesList.filter(p => p.category === 'Digital Marketing')
      }
    ];
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
    <div className="w-full space-y-12 sm:space-y-16 md:space-y-24">
      
      {/* =========================================================================
          FILTER SECTION — RESPONSIVE (FLEX-WRAP DESKTOP + HORIZONTAL MOBILE)
          ========================================================================= */}
      <div id="filters" className="sticky top-[72px] lg:top-[76px] z-30 py-3.5 sm:py-5 bg-[#05070B]/95 backdrop-blur-2xl border-y border-white/[0.08] shadow-[0_20px_40px_rgba(0,0,0,0.8)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3 sm:space-y-4">
          
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3.5 sm:gap-5">
            
            {/* Desktop & Tablet: Full wrapping grid of all 9 pills. Mobile: Smooth touch horizontal scroll rail. */}
            <div className="w-full lg:flex-1 min-w-0">
              <div className="flex items-center gap-2 sm:gap-2.5 overflow-x-auto no-scrollbar sm:overflow-x-visible flex-nowrap sm:flex-wrap py-1">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-400 mr-1 flex-shrink-0">
                  <Filter className="w-3.5 h-3.5 text-indigo-400" />
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
                      className={`group relative flex-shrink-0 flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-full text-xs font-bold tracking-wide transition-all duration-300 cursor-pointer ${
                        isActive
                          ? 'bg-gradient-to-r from-indigo-600 via-indigo-500 to-violet-600 text-white shadow-[0_0_20px_rgba(99,102,241,0.4)] border border-indigo-400/40 ring-2 ring-indigo-500/20'
                          : 'bg-[#0E1526]/80 text-slate-300 hover:text-white hover:bg-[#162038] border border-white/[0.08] hover:border-white/20'
                      }`}
                      aria-pressed={isActive}
                    >
                      <span className="whitespace-nowrap">{cat.label}</span>
                      <span 
                        className={`inline-flex items-center justify-center min-w-[20px] h-5 px-1.5 rounded-full text-[11px] font-extrabold transition-colors ${
                          isActive 
                            ? 'bg-white/25 text-white' 
                            : 'bg-white/[0.08] text-slate-400 group-hover:text-slate-200 group-hover:bg-white/[0.15]'
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
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                <Search className="w-4 h-4" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search projects, client, tech..."
                className="w-full bg-[#0E1526]/90 border border-white/[0.1] focus:border-indigo-500/80 focus:ring-2 focus:ring-indigo-500/20 text-white placeholder:text-slate-500 text-xs sm:text-sm rounded-full pl-9 pr-9 py-2.5 outline-none transition-all shadow-inner"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-white"
                  title="Clear search"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

          </div>

          {/* Active Filter Info & Results Count Banner */}
          <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400 pt-2 border-t border-white/[0.06]">
            <div className="flex items-center gap-2">
              <span className="text-slate-400 font-semibold">Active Filter:</span>
              <span className="font-bold text-white px-2.5 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                {filterCategories.find(c => c.id === activeCategory)?.label || 'All Projects'}
              </span>
              <span>•</span>
              <span className="font-medium text-slate-300">
                <strong className="text-white font-bold">{filteredProjects.length}</strong> {filteredProjects.length === 1 ? 'Project' : 'Projects'} Displayed
              </span>
              {searchQuery && (
                <span className="italic text-slate-400">
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
                className="text-xs font-bold text-indigo-400 hover:text-indigo-300 transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <span>Reset to All Projects (22)</span>
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 md:space-y-24 pb-16 sm:pb-24">
        
        {/* =========================================================================
            FEATURED PROJECT SPOTLIGHT (ABRUS KRISHNA FINANCE)
            ========================================================================= */}
        {featuredProject && (
          <section className="relative rounded-3xl sm:rounded-4xl bg-gradient-to-b from-[#0F172A] to-[#0A0E1A] border border-white/[0.1] p-6 sm:p-10 lg:p-14 overflow-hidden shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)]">
            <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-indigo-600/15 rounded-full blur-3xl pointer-events-none -mr-40 -mt-40"></div>
            <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-cyan-600/10 rounded-full blur-3xl pointer-events-none -ml-32 -mb-32"></div>

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
              
              {/* LEFT: Massive Device Frame Image */}
              <div className="lg:col-span-7 space-y-3">
                <div className="relative group rounded-2xl overflow-hidden bg-[#070A12] border border-white/[0.12] shadow-2xl">
                  
                  {/* Browser Bar */}
                  <div className="px-4 py-2.5 bg-[#0A0F1C] border-b border-white/[0.08] flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.05] border border-white/[0.06] text-[11px] text-slate-400 font-mono">
                      <Lock className="w-3 h-3 text-emerald-400" />
                      <span>abruskrishna.com</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => openLightbox(featuredProject)}
                      className="p-1 rounded text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                      title="Inspect full image"
                      aria-label="Inspect full image"
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Screenshot Container */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-neutral-950">
                    <img 
                      src={featuredProject.image}
                      alt={featuredProject.imageAlt}
                      loading="eager"
                      className="w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                    />
                    
                    <div 
                      onClick={() => openLightbox(featuredProject)}
                      className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-6 cursor-pointer"
                    >
                      <span className="text-xs font-semibold text-white bg-indigo-600/90 backdrop-blur-md px-3.5 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg">
                        <ZoomIn className="w-3.5 h-3.5" />
                        Click to Expand Full Screenshot
                      </span>
                    </div>
                  </div>

                </div>

                <div className="flex items-center justify-between text-xs text-slate-400 px-2">
                  <span>Flagship Client Case Study • WordPress Architecture</span>
                  <span>100% Verified Production Delivery</span>
                </div>
              </div>

              {/* RIGHT: Editorial Showcase Details */}
              <div className="lg:col-span-5 space-y-6">
                
                <div className="space-y-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                      <Sparkles className="w-3 h-3 text-indigo-400" />
                      Featured Flagship Case Study
                    </span>
                    <span className="text-xs font-medium text-slate-400 px-2.5 py-0.5 rounded-full bg-white/[0.05] border border-white/[0.08]">
                      {featuredProject.location}
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                    {featuredProject.title}
                  </h2>
                </div>

                <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
                  {featuredProject.description}
                </p>

                {/* Highlight Pillars */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-2">
                  <div className="p-3.5 rounded-xl bg-white/[0.04] border border-white/[0.08] space-y-1">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-400 block">Structure</span>
                    <span className="text-xs font-bold text-white block">9 Intent Landing Pages</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-white/[0.04] border border-white/[0.08] space-y-1">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-sky-400 block">Performance</span>
                    <span className="text-xs font-bold text-white block">15–30 Min Flow</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-white/[0.04] border border-white/[0.08] space-y-1">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-400 block">Compliance</span>
                    <span className="text-xs font-bold text-white block">KML Act 1958</span>
                  </div>
                </div>

                {/* CTA Action */}
                <div className="pt-3 flex flex-wrap items-center gap-4">
                  <a
                    href={featuredProject.href}
                    className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white font-bold text-sm sm:text-base tracking-wide shadow-xl shadow-indigo-600/30 hover:shadow-indigo-500/50 hover:-translate-y-0.5 transition-all group"
                  >
                    <span>VIEW FULL CASE STUDY</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
                  </a>

                  <button
                    type="button"
                    onClick={() => openLightbox(featuredProject)}
                    className="inline-flex items-center gap-2 px-5 py-4 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-slate-300 hover:text-white border border-white/[0.1] font-semibold text-sm transition-colors cursor-pointer"
                  >
                    <Maximize2 className="w-4 h-4" />
                    <span>Quick Preview</span>
                  </button>
                </div>

              </div>

            </div>
          </section>
        )}

        {/* =========================================================================
            IF 'ALL PROJECTS' IS ACTIVE: COMPLETE CATEGORIZED FLOW (22 PROJECTS)
            ========================================================================= */}
        {categorizedGroups ? (
          <div className="space-y-24 md:space-y-32">
            {categorizedGroups.map((group, groupIdx) => (
              <section key={group.id} className="space-y-8">
                
                {/* Category Section Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-5 border-b border-white/[0.08]">
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-bold text-indigo-400 uppercase tracking-widest">
                        0{groupIdx + 1} / Collection
                      </span>
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                        {group.count} {group.count === 1 ? 'Project' : 'Projects'}
                      </span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                      {group.title}
                    </h3>
                    <p className="text-sm text-slate-400 max-w-2xl">
                      {group.subtitle}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleSelectCategory(group.id)}
                    className="text-xs font-bold text-indigo-400 hover:text-indigo-300 flex items-center gap-1.5 uppercase tracking-wider transition-colors self-start md:self-end cursor-pointer"
                  >
                    <span>Filter this category only</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Project Grid for this category: Large spacious cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
                  {group.projects.map((project) => (
                    <article
                      key={project.id}
                      className="group relative flex flex-col bg-[#0C1220]/90 border border-white/[0.08] hover:border-indigo-500/50 rounded-2xl sm:rounded-3xl p-5 sm:p-6 transition-all duration-300 ease-out md:hover:scale-[1.02] md:hover:-translate-y-1.5 md:hover:shadow-[0_25px_60px_-15px_rgba(99,102,241,0.35)] justify-between cursor-pointer"
                    >
                      {/* Top: Large Device Mockup Container */}
                      <div className="space-y-4">
                        
                        <div className="relative rounded-xl sm:rounded-2xl overflow-hidden bg-[#070A12] border border-white/[0.08] aspect-[16/10] shadow-inner">
                          
                          {/* Browser bar */}
                          <div className="absolute top-0 inset-x-0 h-6 px-3 bg-[#0A0F1C]/90 backdrop-blur-xs border-b border-white/[0.06] flex items-center justify-between z-10">
                            <div className="flex items-center gap-1">
                              <span className="w-1.5 h-1.5 rounded-full bg-white/20"></span>
                              <span className="w-1.5 h-1.5 rounded-full bg-white/20"></span>
                              <span className="w-1.5 h-1.5 rounded-full bg-white/20"></span>
                            </div>
                            <span className="text-[10px] font-mono text-slate-400 tracking-wider">teknoppy.preview</span>
                            <button
                              type="button"
                              onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                openLightbox(project);
                              }}
                              className="text-slate-400 hover:text-white transition-colors"
                              title="Quick zoom"
                              aria-label={`Zoom screenshot for ${project.title}`}
                            >
                              <Maximize2 className="w-3 h-3" />
                            </button>
                          </div>

                          {/* Screenshot Image */}
                          <img
                            src={project.image}
                            alt={project.imageAlt}
                            loading="lazy"
                            className="w-full h-full object-cover object-top pt-6 group-hover:scale-105 group-hover:brightness-105 transition-transform duration-700 ease-out"
                          />

                          {/* Interactive Zoom Hover Trigger */}
                          <button
                            type="button"
                            onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              openLightbox(project);
                            }}
                            className="absolute inset-0 pt-6 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center cursor-pointer"
                            aria-label={`Open lightbox for ${project.title}`}
                          >
                            <span className="px-3 py-1.5 rounded-full bg-indigo-600/90 text-white text-xs font-bold flex items-center gap-1.5 shadow-lg backdrop-blur-xs">
                              <ZoomIn className="w-3.5 h-3.5" />
                              Zoom Screenshot
                            </span>
                          </button>

                        </div>

                        {/* Metadata Tag Row */}
                        <div className="flex flex-wrap items-center justify-between gap-2 pt-1">
                          <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-400 bg-indigo-500/10 px-2.5 py-1 rounded-full border border-indigo-500/20">
                            {project.category}
                          </span>

                          {project.location && (
                            <span className="text-xs text-slate-400 font-medium flex items-center gap-1">
                              <MapPin className="w-3 h-3 text-slate-500" />
                              {project.location}
                            </span>
                          )}
                        </div>

                        {/* Project Title: Large Prominent Editorial Typography */}
                        <h4 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug group-hover:text-indigo-300 transition-colors">
                          <a href={project.href} className="focus:outline-none">
                            {project.title}
                          </a>
                        </h4>

                        {/* Project Description */}
                        <p className="text-[13.5px] sm:text-[14px] text-slate-400 leading-[1.6] font-normal line-clamp-3">
                          {project.description}
                        </p>

                      </div>

                      {/* Bottom CTA Row */}
                      <div className="pt-5 mt-6 border-t border-white/[0.08] flex items-center justify-between">
                        <a
                          href={project.href}
                          className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-indigo-400 group-hover:text-indigo-300 transition-colors"
                        >
                          <span>VIEW FULL CASE STUDY</span>
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
                        </a>

                        <span className="text-[11px] text-slate-500 font-mono">
                          {project.client}
                        </span>
                      </div>

                    </article>
                  ))}
                </div>

              </section>
            ))}
          </div>
        ) : (
          /* =========================================================================
              IF A SPECIFIC CATEGORY OR SEARCH IS FILTERED: SINGLE LARGE GRID
              ========================================================================= */
          <section className="space-y-8">
            
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b border-white/[0.08]">
              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-widest text-indigo-400">
                  Filtered Projects
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  {filterCategories.find(c => c.id === activeCategory)?.label || 'Selected Portfolio'}
                </h3>
              </div>

              <div className="text-xs text-slate-400">
                Displaying <span className="text-white font-bold">{filteredProjects.length}</span> verified case studies
              </div>
            </div>

            {filteredProjects.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
                {filteredProjects.map((project) => (
                  <article
                    key={project.id}
                    className="group relative flex flex-col bg-[#0C1220]/90 border border-white/[0.08] hover:border-indigo-500/50 rounded-2xl sm:rounded-3xl p-5 sm:p-6 transition-all duration-300 ease-out md:hover:scale-[1.02] md:hover:-translate-y-1.5 md:hover:shadow-[0_25px_60px_-15px_rgba(99,102,241,0.35)] justify-between cursor-pointer"
                  >
                    <div className="space-y-4">
                      
                      <div className="relative rounded-xl sm:rounded-2xl overflow-hidden bg-[#070A12] border border-white/[0.08] aspect-[16/10] shadow-inner">
                        
                        <div className="absolute top-0 inset-x-0 h-6 px-3 bg-[#0A0F1C]/90 backdrop-blur-xs border-b border-white/[0.06] flex items-center justify-between z-10">
                          <div className="flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-white/20"></span>
                            <span className="w-1.5 h-1.5 rounded-full bg-white/20"></span>
                            <span className="w-1.5 h-1.5 rounded-full bg-white/20"></span>
                          </div>
                          <span className="text-[10px] font-mono text-slate-400 tracking-wider">teknoppy.preview</span>
                          <button
                            type="button"
                            onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              openLightbox(project);
                            }}
                            className="text-slate-400 hover:text-white transition-colors"
                            title="Quick zoom"
                            aria-label={`Zoom screenshot for ${project.title}`}
                          >
                            <Maximize2 className="w-3 h-3" />
                          </button>
                        </div>

                        <img
                          src={project.image}
                          alt={project.imageAlt}
                          loading="lazy"
                          className="w-full h-full object-cover object-top pt-6 group-hover:scale-105 group-hover:brightness-105 transition-transform duration-700 ease-out"
                        />

                        <button
                          type="button"
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            openLightbox(project);
                          }}
                          className="absolute inset-0 pt-6 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center cursor-pointer"
                          aria-label={`Open lightbox for ${project.title}`}
                        >
                          <span className="px-3 py-1.5 rounded-full bg-indigo-600/90 text-white text-xs font-bold flex items-center gap-1.5 shadow-lg backdrop-blur-xs">
                            <ZoomIn className="w-3.5 h-3.5" />
                            Zoom Screenshot
                          </span>
                        </button>

                      </div>

                      <div className="flex flex-wrap items-center justify-between gap-2 pt-1">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-400 bg-indigo-500/10 px-2.5 py-1 rounded-full border border-indigo-500/20">
                          {project.category}
                        </span>

                        {project.location && (
                          <span className="text-xs text-slate-400 font-medium flex items-center gap-1">
                            <MapPin className="w-3 h-3 text-slate-500" />
                            {project.location}
                          </span>
                        )}
                      </div>

                      <h4 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug group-hover:text-indigo-300 transition-colors">
                        <a href={project.href} className="focus:outline-none">
                          {project.title}
                        </a>
                      </h4>

                      <p className="text-[13.5px] sm:text-[14px] text-slate-400 leading-[1.6] font-normal line-clamp-3">
                        {project.description}
                      </p>

                    </div>

                    <div className="pt-5 mt-6 border-t border-white/[0.08] flex items-center justify-between">
                      <a
                        href={project.href}
                        className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-indigo-400 group-hover:text-indigo-300 transition-colors"
                      >
                        <span>VIEW FULL CASE STUDY</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
                      </a>

                      <span className="text-[11px] text-slate-500 font-mono">
                        {project.client}
                      </span>
                    </div>

                  </article>
                ))}
              </div>
            ) : (
              <div className="text-center py-24 bg-[#0E1526]/50 rounded-3xl border border-white/[0.08] space-y-4">
                <div className="w-16 h-16 rounded-full bg-white/[0.05] border border-white/[0.1] flex items-center justify-center mx-auto text-slate-400">
                  <Search className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-white">No projects found</h4>
                <p className="text-sm text-slate-400 max-w-md mx-auto">
                  No case studies match your search criteria.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setActiveCategory('all');
                    setSearchQuery('');
                  }}
                  className="px-5 py-2.5 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                >
                  Reset All Filters (22)
                </button>
              </div>
            )}

          </section>
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
            className="relative max-w-5xl w-full max-h-[92vh] flex flex-col bg-[#0E1526] border border-white/15 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#0A0F1C]/90">
              <div className="space-y-0.5 max-w-xl">
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-400 bg-indigo-500/10 px-2.5 py-0.5 rounded-full border border-indigo-500/20">
                    {lightboxItem.category}
                  </span>
                  {lightboxItem.location && (
                    <span className="text-xs text-slate-400">{lightboxItem.location}</span>
                  )}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white truncate">
                  {lightboxItem.title}
                </h3>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setIsZoomed(!isZoomed)}
                  className="p-2 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] text-slate-300 hover:text-white transition-colors cursor-pointer"
                  title={isZoomed ? "Zoom out" : "Zoom in"}
                >
                  {isZoomed ? <ZoomOut className="w-4 h-4" /> : <ZoomIn className="w-4 h-4" />}
                </button>
                <button
                  type="button"
                  onClick={closeLightbox}
                  className="p-2 rounded-lg bg-white/[0.05] hover:bg-rose-500/20 text-slate-300 hover:text-rose-400 transition-colors cursor-pointer"
                  title="Close (Esc)"
                  aria-label="Close dialog"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Image View */}
            <div className="relative flex-1 overflow-auto bg-[#070A12] p-4 flex items-center justify-center min-h-[300px]">
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
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/70 hover:bg-indigo-600 text-white backdrop-blur-md transition-colors border border-white/10 cursor-pointer"
                title="Previous case study (Left arrow)"
                aria-label="Previous"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={() => navigateLightbox('next')}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/70 hover:bg-indigo-600 text-white backdrop-blur-md transition-colors border border-white/10 cursor-pointer"
                title="Next case study (Right arrow)"
                aria-label="Next"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-4 border-t border-white/10 bg-[#0A0F1C]/90 flex flex-wrap items-center justify-between gap-4">
              <p className="text-xs text-slate-400 max-w-xl line-clamp-2">
                {lightboxItem.description}
              </p>

              <a
                href={lightboxItem.href}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-md shadow-indigo-600/20"
              >
                <span>Read Full Case Study</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};

export default CaseStudiesExplorer;
