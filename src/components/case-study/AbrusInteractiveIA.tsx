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
    slug: '/business-micro-enterprise-loan/',
    searchIntent: 'Small trade operators and self-employed individuals needing credit lines for stock or equipment',
    intentType: 'Direct Product',
    targetAudience: 'Cottage industries, small workshops, service providers, and vendors across Thrissur district',
    keyContent: ['Cash-flow based evaluation', 'Minimal documentation route', 'Daily/weekly repayment structures', 'Transparent interest rates'],
    separationNote: 'Separated from walk-in retail gold loans to capture commercial borrowing traffic.'
  },
  {
    id: 'micro-personal-loan',
    name: 'Micro Personal Loan',
    category: 'Consumer & Personal',
    slug: '/micro-personal-loan/',
    searchIntent: 'Individuals needing urgent emergency credit for medical, educational, or seasonal expenses',
    intentType: 'Direct Product',
    targetAudience: 'Salaried employees, informal sector workers, and domestic heads needing quick liquidity',
    keyContent: ['KYC verification rules', 'Fast eligibility calculator', 'KML-compliant rate disclosures', 'Repayment schedule tables'],
    separationNote: 'Distinct from collateral gold loans; speaks directly to unsecured/micro-ticket borrower questions.'
  },
  {
    id: 'micro-home-loan',
    name: 'Micro Home Loan',
    category: 'Consumer & Personal',
    slug: '/micro-home-loan/',
    searchIntent: 'Homeowners and families seeking funds for minor repairs, tiling, painting, or roof renovation',
    intentType: 'Direct Product',
    targetAudience: 'Rural and semi-urban homeowners unable or unwilling to undergo long commercial bank mortgages',
    keyContent: ['Home improvement scope eligibility', 'Fast inspection parameters', 'Short-to-medium repayment periods', 'No hidden processing fees'],
    separationNote: 'Differentiated from large bank home mortgages by focusing on rapid renovation credit.'
  },
  {
    id: 'micro-finance',
    name: 'Micro Finance',
    category: 'Business & Micro',
    slug: '/micro-finance/',
    searchIntent: 'Community-level borrowers and joint-liability peer groups seeking structured economic support',
    intentType: 'Direct Product',
    targetAudience: 'Women self-help cohorts, agrarian producers, and micro-entrepreneurs in Kerala rural belts',
    keyContent: ['Group lending principles', 'Empowerment credit models', 'Doorstep field agent collection details', 'Financial literacy guidance'],
    separationNote: 'Positions institutional micro-finance credibility distinctly from commercial consumer credit.'
  },
  {
    id: 'consumer-goods-loan',
    name: 'Consumer Goods Loan',
    category: 'Consumer & Personal',
    slug: '/consumer-goods-loan/',
    searchIntent: 'Shoppers looking to finance electronics, household appliances, or two-wheelers through local merchants',
    intentType: 'Direct Product',
    targetAudience: 'Households purchasing home appliances, televisions, or smartphones via partner stores',
    keyContent: ['Authorised merchant tie-ups in Guruvayoor', 'Instant point-of-sale verification', 'Zero-advance options', 'Easy monthly EMIs'],
    separationNote: 'Connects local offline retail purchasing directly to online lending pre-approval.'
  }
];

export const AbrusInteractiveIA: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string>('gold-loan-guruvayoor');
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Gold Loans', 'Business & Micro', 'Consumer & Personal'];

  const filteredPages = activeCategory === 'All' 
    ? loanPages 
    : loanPages.filter(p => p.category === activeCategory);

  const selectedPage = loanPages.find(p => p.id === selectedId) || loanPages[0];

  return (
    <div className="w-full space-y-8">
      {/* Information Architecture Flow Graphic */}
      <div className="rounded-3xl bg-[#F8FAFC] text-neutral-900 p-6 sm:p-8 lg:p-10 border border-neutral-200/80 shadow-xs overflow-hidden relative">
        <div className="relative z-10 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-neutral-200 pb-5">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#F05A2C]">
                Architectural Flow Principle
              </span>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-900 mt-1">
                Intent-Driven Page Architecture
              </h3>
            </div>
            <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white text-neutral-700 border border-neutral-200 shadow-2xs w-fit">
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
              <div key={step.num} className="relative group p-4 rounded-xl bg-white border border-neutral-200/80 hover:border-[#F05A2C]/50 hover:shadow-xs transition-all">
                <span className="text-xs font-black text-[#F05A2C]">{step.num}</span>
                <h4 className="text-sm font-bold text-neutral-900 mt-1 mb-1">{step.title}</h4>
                <p className="text-xs text-neutral-600 leading-relaxed">{step.desc}</p>
                {idx < 4 && (
                  <ArrowRight className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400 z-20 pointer-events-none" />
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
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-500">
              The 9 Dedicated Loan Pages
            </h4>
            <span className="text-xs text-neutral-400">Select to inspect intent</span>
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
                    ? 'bg-[#F05A2C] text-white shadow-xs'
                    : 'bg-white text-neutral-600 hover:text-neutral-900 border border-neutral-200/80'
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
                      ? 'bg-orange-50/70 border-[#F05A2C] shadow-xs ring-1 ring-[#F05A2C]/20'
                      : 'bg-white hover:bg-neutral-50 border-neutral-200/80 hover:border-neutral-300'
                  }`}
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold text-neutral-900">{page.name}</span>
                      {page.intentType === 'Local High-Intent' && (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-bold bg-amber-50 text-amber-700 border border-amber-200">
                          <MapPin className="w-2.5 h-2.5" /> Local
                        </span>
                      )}
                    </div>
                    <code className="text-[11px] text-neutral-500 font-mono block">
                      {page.slug}
                    </code>
                  </div>
                  <ArrowRight className={`w-4 h-4 transition-transform ${isSelected ? 'text-[#F05A2C] translate-x-1' : 'text-neutral-400'}`} />
                </button>
              );
            })}
          </div>
        </div>

        {/* Right: Detailed Breakdown Card for Selected Product */}
        <div className="lg:col-span-7 bg-white rounded-3xl border border-neutral-200/80 p-6 sm:p-8 shadow-sm space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-neutral-200 pb-4">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#F05A2C]">
                {selectedPage.category}
              </span>
              <h3 className="text-2xl font-bold text-neutral-900 mt-0.5">{selectedPage.name}</h3>
            </div>
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#F8FAFC] text-neutral-700 border border-neutral-200">
              {selectedPage.intentType}
            </span>
          </div>

          <div className="space-y-4 text-sm">
            <div className="p-4 rounded-xl bg-[#F8FAFC] border border-neutral-200/70 space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-neutral-500 block">
                Primary Search Intent
              </span>
              <p className="text-neutral-900 leading-relaxed font-medium">{selectedPage.searchIntent}</p>
            </div>

            <div className="p-4 rounded-xl bg-[#F8FAFC] border border-neutral-200/70 space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-neutral-500 block">
                Target Borrower Audience
              </span>
              <p className="text-neutral-600 leading-relaxed">{selectedPage.targetAudience}</p>
            </div>

            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-neutral-500 block">
                Key Content Sections Engineered for this URL
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {selectedPage.keyContent.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-neutral-700 bg-[#F8FAFC] p-2.5 rounded-lg border border-neutral-200/70">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F05A2C]"></span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 rounded-xl bg-orange-50/70 border border-orange-200/80 space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-[#F05A2C] block">
                Why This Separation Matters
              </span>
              <p className="text-xs sm:text-sm text-neutral-800 leading-relaxed">
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
