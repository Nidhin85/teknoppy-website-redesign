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
    <div className="w-full space-y-3.5">
      {faqs.map((faq, idx) => {
        const isOpen = openIndex === idx;
        const panelId = `faq-panel-${idx}`;
        const buttonId = `faq-btn-${idx}`;

        return (
          <div
            key={idx}
            className={`border rounded-2xl transition-all duration-200 overflow-hidden ${
              isOpen
                ? 'bg-white border-[#0066CC]/50 shadow-md ring-1 ring-[#0066CC]/20'
                : 'bg-white hover:bg-neutral-50/80 border-neutral-200/80 hover:border-neutral-300 shadow-2xs'
            }`}
          >
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggle(idx)}
                className="w-full text-left px-5 sm:px-7 py-4.5 sm:py-5 flex items-center justify-between gap-4 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0066CC] rounded-2xl"
              >
                <span className="text-base sm:text-lg font-bold text-neutral-900 pr-2 leading-snug">
                  {faq.question}
                </span>
                <span
                  className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-200 ${
                    isOpen ? 'bg-[#0066CC] text-white rotate-180' : 'bg-neutral-100 text-neutral-600'
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
              className={`px-5 sm:px-7 pb-6 pt-1 text-neutral-600 text-sm sm:text-base leading-relaxed border-t border-neutral-100 ${
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
