import React, { useState, useEffect } from 'react';

interface NavItem {
  id: string;
  label: string;
}

const navItems: NavItem[] = [
  { id: 'overview', label: 'Overview' },
  { id: 'challenges', label: 'Challenges' },
  { id: 'objectives', label: 'Objectives' },
  { id: 'strategy', label: 'Strategy' },
  { id: 'architecture', label: 'Architecture' },
  { id: 'comparison', label: 'Product Focus' },
  { id: 'journey', label: 'Borrower Journey' },
  { id: 'compliance', label: 'Compliance' },
  { id: 'gallery', label: 'Showcase' },
  { id: 'faq', label: 'FAQ' },
];

export const AbrusStickyNav: React.FC = () => {
  const [activeId, setActiveId] = useState<string>('overview');
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
  }, []);

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
              Abrus Krishna Finance
            </span>
          </div>

          {/* Nav pills */}
          <nav className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto no-scrollbar w-full md:w-auto py-1">
            {navItems.map((item) => {
              const isActive = activeId === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => scrollToSection(e, item.id)}
                  className={`whitespace-nowrap px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-tight transition-all duration-200 ${
                    isActive
                      ? 'bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-md shadow-indigo-500/30 border border-indigo-400/30'
                      : 'text-slate-400 hover:text-white hover:bg-white/[0.06]'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          <div className="hidden lg:block">
            <a
              href="https://abruskrishna.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold text-indigo-400 hover:text-indigo-300 flex items-center gap-1 transition-colors"
            >
              abruskrishna.com ↗
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
export default AbrusStickyNav;
