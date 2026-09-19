import React, { useState, useEffect } from 'react';

export interface CaseStudyNavItem {
  id: string;
  label: string;
}

interface Props {
  clientName: string;
  navItems?: CaseStudyNavItem[];
}

const defaultNavItems: CaseStudyNavItem[] = [
  { id: 'overview', label: 'Overview' },
  { id: 'about', label: 'About' },
  { id: 'challenges', label: 'Challenges' },
  { id: 'objectives', label: 'Objectives' },
  { id: 'approach', label: 'Approach' },
  { id: 'deliverables', label: 'Deliverables' },
  { id: 'strategy', label: 'Strategic Value' },
  { id: 'faq', label: 'FAQ' },
];

export const CaseStudyStickyNav: React.FC<Props> = ({ clientName, navItems = defaultNavItems }) => {
  const [activeId, setActiveId] = useState<string>(navItems[0]?.id || 'overview');
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [isSticky, setIsSticky] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
      setScrollProgress(progress);

      const heroEl = document.getElementById('project-hero');
      if (heroEl) {
        const heroBottom = heroEl.offsetTop + heroEl.offsetHeight - 80;
        setIsSticky(window.scrollY > heroBottom);
      } else {
        setIsSticky(window.scrollY > 450);
      }

      const scrollPos = window.scrollY + 140;
      for (let i = navItems.length - 1; i >= 0; i--) {
        const item = navItems[i];
        const el = document.getElementById(item.id);
        if (el && el.offsetTop <= scrollPos) {
          setActiveId(item.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems]);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (!target) return;

    const navOffset = typeof window !== 'undefined' && window.innerWidth >= 1024 ? 138 : 115;
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = target.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - navOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {/* Pinned Top Reading Progress Bar */}
      <div 
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-indigo-500 via-indigo-400 to-violet-500 z-[60] transition-all duration-150 origin-left"
        style={{ width: `${scrollProgress}%` }}
        role="progressbar"
        aria-valuenow={Math.round(scrollProgress)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Reading progress"
      />

      {/* Sticky Project Subnavigation */}
      <div
        className={`w-full z-40 transition-all duration-300 ${
          isSticky
            ? 'fixed top-[60px] lg:top-[74px] left-0 right-0 bg-[#05070B]/90 backdrop-blur-xl border-b border-white/[0.08] shadow-[0_15px_30px_rgba(0,0,0,0.8)] py-2.5'
            : 'relative bg-[#080C16] border-y border-white/[0.08] py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          <div className="hidden md:flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-200">
              {clientName}
            </span>
          </div>

          {/* Navigation Links Pill Scroller */}
          <nav 
            className="flex items-center gap-1 sm:gap-2 overflow-x-auto no-scrollbar py-1 w-full md:w-auto scroll-smooth"
            aria-label="Case Study Sections"
          >
            {navItems.map((item) => {
              const isActive = activeId === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => scrollToSection(e, item.id)}
                  className={`px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer ${
                    isActive
                      ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/20'
                      : 'text-slate-400 hover:text-white hover:bg-white/[0.06]'
                  }`}
                  aria-current={isActive ? 'true' : undefined}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href="#contact-cta"
              onClick={(e) => scrollToSection(e, 'contact-cta')}
              className="px-3.5 py-1 rounded-full text-xs font-bold text-slate-300 hover:text-white bg-white/[0.06] hover:bg-white/[0.12] border border-white/[0.1] transition-all"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default CaseStudyStickyNav;
