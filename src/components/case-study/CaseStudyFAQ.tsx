import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export interface FAQItem {
  question: string;
  answer: string;
}

interface Props {
  faqs: FAQItem[];
}

export const CaseStudyFAQ: React.FC<Props> = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(prev => prev === idx ? null : idx);
  };

  return (
    <div className="w-full space-y-4">
      {faqs.map((faq, idx) => {
        const isOpen = openIndex === idx;
        const panelId = `faq-panel-${idx}`;
        const buttonId = `faq-btn-${idx}`;

        return (
          <div
            key={idx}
            className={`border rounded-2xl transition-all duration-200 overflow-hidden ${
              isOpen
                ? 'bg-[#0D1424] border-indigo-500/40 shadow-lg shadow-indigo-900/20 ring-1 ring-indigo-500/20'
                : 'bg-[#0A0E18]/90 hover:bg-[#0E1526] border-white/[0.08] hover:border-white/15'
            }`}
          >
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggle(idx)}
                className="w-full text-left px-5 sm:px-7 py-5 flex items-center justify-between gap-4 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-2xl"
              >
                <span className="text-base sm:text-lg font-bold text-white pr-2 leading-snug">
                  {faq.question}
                </span>
                <span
                  className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-200 ${
                    isOpen ? 'bg-indigo-600 text-white rotate-180' : 'bg-white/[0.08] text-slate-300'
                  }`}
                  aria-hidden="true"
                >
                  {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </span>
              </button>
            </h3>

            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!isOpen}
              className={`px-5 sm:px-7 pb-6 pt-1 text-slate-300 text-sm sm:text-base leading-relaxed border-t border-white/[0.06] ${
                isOpen ? 'block' : 'hidden'
              }`}
            >
              <p>{faq.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CaseStudyFAQ;
