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
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#0066CC] via-blue-500 to-indigo-600 z-[60] transition-all duration-150 origin-left"
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
            ? 'fixed top-[60px] lg:top-[74px] left-0 right-0 bg-white/95 backdrop-blur-xl border-b border-neutral-200/80 shadow-sm py-2.5'
            : 'relative bg-[#F8FAFC] border-y border-neutral-200/80 py-3'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          <div className="hidden md:flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#0066CC] animate-pulse"></span>
            <span className="text-xs font-bold uppercase tracking-wider text-neutral-800">
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
                      ? 'bg-[#0066CC] text-white shadow-xs'
                      : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100'
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
              href="#contact"
              onClick={(e) => scrollToSection(e, 'contact')}
              className="px-3.5 py-1 rounded-full text-xs font-bold text-neutral-700 hover:text-neutral-900 bg-white hover:bg-neutral-100 border border-neutral-200/80 transition-all shadow-xs"
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
