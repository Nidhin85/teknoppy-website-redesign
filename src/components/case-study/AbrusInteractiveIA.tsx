import React, { useState } from 'react';
import { Layers, ArrowRight, Compass, ShieldCheck, MapPin, Search } from 'lucide-react';

interface LoanPage {
  id: string;
  name: string;
  category: 'Gold Loans' | 'Business & Micro' | 'Consumer & Personal';
  slug: string;
  searchIntent: string;
  intentType: 'Local High-Intent' | 'Direct Product' | 'Convenience / Service Model';
  targetAudience: string;
  keyContent: string[];
  separationNote: string;
}

const loanPages: LoanPage[] = [
  {
    id: 'gold-loan',
    name: 'Gold Loan',
    category: 'Gold Loans',
    slug: '/gold-loan/',
    searchIntent: 'Borrower seeking secured immediate branch loan against pledged gold jewelry',
    intentType: 'Direct Product',
    targetAudience: 'Individuals and families seeking instant collateral-backed liquidity at the branch',
    keyContent: ['Gold valuation process', 'Instant appraisal steps', 'LTV and safe-custody details', 'KML-compliant terms'],
    separationNote: 'Maintains primary branch-based intent, preventing competition with home-service terms.'
  },
  {
    id: 'gold-loan-guruvayoor',
    name: 'Gold Loan in Guruvayoor',
    category: 'Gold Loans',
    slug: '/gold-loan-in-guruvayoor/',
    searchIntent: 'High-intent searchers specifically querying Guruvayoor and Guruvayur locality variants',
    intentType: 'Local High-Intent',
    targetAudience: 'Walk-in borrowers in and around Guruvayoor/Thaikad ready to choose a local lender',
    keyContent: ['Dual spelling coverage (Guruvayoor & Guruvayur)', 'Branch proximity & landmark directions', 'Local customer guidance', 'Quick walk-in verification'],
    separationNote: 'Built specifically to capture geo-modified local queries without diluting generic product pages.'
  },
  {
    id: 'doorstep-gold-loan',
    name: 'Doorstep Gold Loan',
    category: 'Gold Loans',
    slug: '/doorstep-gold-loan/',
    searchIntent: 'Borrowers needing gold appraisal, valuation, and documentation at home or workplace',
    intentType: 'Convenience / Service Model',
    targetAudience: 'Senior citizens, busy entrepreneurs, and families prioritizing privacy and convenience',
    keyContent: ['Home collection appointment workflow', 'Representative verification & security', 'Mobile gold valuation kit', 'Disbursement timeline'],
    separationNote: 'Clearly delineated as a specialized collection service to prevent keyword cannibalization with standard gold loan.'
  },
  {
    id: 'business-loan-guruvayoor',
    name: 'Business Loan in Guruvayoor',
    category: 'Business & Micro',
    slug: '/business-loan-in-guruvayoor/',
    searchIntent: 'Local business proprietors looking for short-term working capital within Guruvayoor commercial zones',
    intentType: 'Local High-Intent',
    targetAudience: 'Retail merchants, temple-area shopkeepers, and local trade operators',
    keyContent: ['Business turnover proof requirements', 'Local enterprise assessment', 'Fast processing timelines', 'Flexible tenure options'],
    separationNote: 'Targets geographic enterprise intent separately from regional micro-loans.'
  },
  {
    id: 'business-micro-loan',
    name: 'Business & Micro Enterprise Loan',
    category: 'Business & Micro',
    slug: '/business-and-micro-enterprise-loan/',
    searchIntent: 'Small enterprise owners seeking structured credit for expansion, stock purchase, or receivables',
    intentType: 'Direct Product',
    targetAudience: 'Self-employed individuals, workshop owners, and small logistics operators',
    keyContent: ['Enterprise loan documentation checklist', 'Repayment frequency schedules', 'Working capital loan terms', 'Minimal balance sheet criteria'],
    separationNote: 'Addresses broader enterprise need distinct from location-specific search.'
  },
  {
    id: 'micro-personal-loan',
    name: 'Micro Personal Loan',
    category: 'Consumer & Personal',
    slug: '/micro-personal-loan/',
    searchIntent: 'Individuals needing fast personal cash liquidity without institutional banking delays',
    intentType: 'Direct Product',
    targetAudience: 'Salaried individuals, daily-wage workers, and households facing urgent medical or life expenses',
    keyContent: ['Identity & residence verification', 'Same-day cash or bank disbursement', 'Clear monthly interest terms', 'Foreclosure without penalty'],
    separationNote: 'Differentiated from collateral-backed loans by personal KYC verification path.'
  },
  {
    id: 'micro-home-loan',
    name: 'Micro Home Loan',
    category: 'Consumer & Personal',
    slug: '/micro-home-loan/',
    searchIntent: 'Homeowners and plot owners needing small credit for repairs, roofing, sanitation, or renovation',
    intentType: 'Direct Product',
    targetAudience: 'Families executing home improvements without needing a commercial mortgage',
    keyContent: ['Property verification simplicity', 'Fast approval workflow', 'Staged disbursement options', 'Flexible small-ticket terms'],
    separationNote: 'Separated from large commercial mortgage banks; focused entirely on home-repair scale credit.'
  },
  {
    id: 'micro-finance',
    name: 'Micro Finance',
    category: 'Business & Micro',
    slug: '/micro-finance/',
    searchIntent: 'Low-ticket recurring financial assistance for cottage industry and micro-entrepreneurs',
    intentType: 'Direct Product',
    targetAudience: 'Women entrepreneurs, self-help groups, and home-based trade operators',
    keyContent: ['Community lending principles', 'Simple group/individual guarantee', 'Weekly or monthly collection models', 'Supportive repayment counseling'],
    separationNote: 'Preserves dedicated presence for social and developmental financial assistance.'
  },
  {
    id: 'consumer-goods-loan',
    name: 'Consumer Goods Loan',
    category: 'Consumer & Personal',
    slug: '/consumer-goods-loan/',
    searchIntent: 'Financing for home electronics, electrical appliances, two-wheeler maintenance, or family assets',
    intentType: 'Direct Product',
    targetAudience: 'Households seeking instant installment financing for essential durable items',
    keyContent: ['Retail invoice financing model', 'Minimal down payment criteria', 'Merchant partnership clarity', 'Quick KYC verification'],
    separationNote: 'Positioned to prevent consumer credit terms from polluting gold loan or business loan pages.'
  }
];

export const AbrusInteractiveIA: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string>('gold-loan');
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Gold Loans', 'Business & Micro', 'Consumer & Personal'];

  const filteredPages = activeCategory === 'All' 
    ? loanPages 
    : loanPages.filter(p => p.category === activeCategory);

  const selectedPage = loanPages.find(p => p.id === selectedId) || loanPages[0];

  return (
    <div className="w-full space-y-8">
      {/* Information Architecture Flow Graphic */}
      <div className="rounded-2xl bg-[#0B101E] text-white p-6 sm:p-8 lg:p-10 border border-white/[0.1] shadow-xl overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="relative z-10 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/[0.08] pb-5">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-indigo-400">
                Architectural Flow Principle
              </span>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white mt-1">
                Intent-Driven Page Architecture
              </h3>
            </div>
            <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white/[0.05] text-slate-300 border border-white/[0.1] w-fit">
              9 Standalone Product Pages
            </span>
          </div>

          {/* Step Pipeline Flow */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-3 pt-2">
            {[
              { num: '01', title: 'Specific Search', desc: 'Borrower types distinct local or product intent' },
              { num: '02', title: 'Dedicated URL', desc: 'Matches exact intent instead of a generic bundle' },
              { num: '03', title: 'Targeted Copy', desc: 'Addresses specific eligibility, KYC & process' },
              { num: '04', title: 'Compliance Trust', desc: 'Verifiable KML terms & transparent FAQ answers' },
              { num: '05', title: 'Frictionless Action', desc: 'Direct branch visit or doorstep appointment' }
            ].map((step, idx) => (
              <div key={step.num} className="relative group p-4 rounded-xl bg-[#0E1528]/80 border border-white/[0.08] hover:border-indigo-500/50 transition-colors">
                <span className="text-xs font-black text-indigo-400">{step.num}</span>
                <h4 className="text-sm font-bold text-white mt-1 mb-1">{step.title}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">{step.desc}</p>
                {idx < 4 && (
                  <ArrowRight className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 z-20 pointer-events-none" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Interactive 9 Loan Pages Matrix */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Product Selection List */}
        <div className="lg:col-span-5 space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
              The 9 Dedicated Loan Pages
            </h4>
            <span className="text-xs text-slate-500">Select to inspect intent</span>
          </div>

          {/* Category Filter Pills */}
          <div className="flex gap-1.5 overflow-x-auto no-scrollbar pb-1">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'bg-[#0E1528] text-slate-400 hover:text-white border border-white/[0.06]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Page Buttons */}
          <div className="space-y-2 max-h-[480px] overflow-y-auto pr-1">
            {filteredPages.map((page) => {
              const isSelected = selectedId === page.id;
              return (
                <button
                  key={page.id}
                  type="button"
                  onClick={() => setSelectedId(page.id)}
                  className={`w-full text-left p-4 rounded-xl border transition-all duration-200 flex items-center justify-between gap-3 cursor-pointer ${
                    isSelected
                      ? 'bg-[#0E1528] border-indigo-500 shadow-md ring-1 ring-indigo-500/20'
                      : 'bg-[#090D17]/80 hover:bg-[#0E1528] border-white/[0.06] hover:border-white/[0.12]'
                  }`}
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold text-white">{page.name}</span>
                      {page.intentType === 'Local High-Intent' && (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                          <MapPin className="w-2.5 h-2.5" /> Local
                        </span>
                      )}
                    </div>
                    <code className="text-[11px] text-slate-400 font-mono block">
                      {page.slug}
                    </code>
                  </div>
                  <ArrowRight className={`w-4 h-4 transition-transform ${isSelected ? 'text-indigo-400 translate-x-1' : 'text-slate-500'}`} />
                </button>
              );
            })}
          </div>
        </div>

        {/* Right: Detailed Breakdown Card for Selected Product */}
        <div className="lg:col-span-7 bg-[#0B101E] rounded-2xl border border-white/[0.1] p-6 sm:p-8 shadow-xl space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/[0.08] pb-4">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-indigo-400">
                {selectedPage.category}
              </span>
              <h3 className="text-2xl font-bold text-white mt-0.5">{selectedPage.name}</h3>
            </div>
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/[0.05] text-slate-300 border border-white/[0.1]">
              {selectedPage.intentType}
            </span>
          </div>

          <div className="space-y-4 text-sm">
            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                Primary Search Intent
              </span>
              <p className="text-slate-200 leading-relaxed font-medium">{selectedPage.searchIntent}</p>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                Target Borrower Audience
              </span>
              <p className="text-slate-300 leading-relaxed">{selectedPage.targetAudience}</p>
            </div>

            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                Key Content Sections Engineered for this URL
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {selectedPage.keyContent.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-slate-300 bg-white/[0.03] p-2.5 rounded-lg border border-white/[0.05]">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 rounded-xl bg-indigo-500/10 border border-indigo-500/20 space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-300 block">
                Why This Separation Matters
              </span>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {selectedPage.separationNote}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AbrusInteractiveIA;
