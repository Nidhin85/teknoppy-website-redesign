import React, { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';

export interface FAQItem {
  question: string;
  answer: string;
}

export const faqsData: FAQItem[] = [
  {
    question: "What was the main goal of the Abrus Krishna Finance website project?",
    answer: "To give a KML-registered lending company a WordPress site that presents nine loan pages clearly, makes regulatory trust visible from the homepage down, and structures closely related products like Gold Loan and Doorstep Gold Loan around different search intents."
  },
  {
    question: "What loan products does Abrus Krishna Finance offer?",
    answer: "Gold Loan, Gold Loan in Guruvayoor, Doorstep Gold Loan, Business Loan in Guruvayoor, Business & Micro Enterprise Loan, Micro Personal Loan, Micro Home Loan, Micro Finance, and Consumer Goods Loan — each with its own dedicated page."
  },
  {
    question: "Why does a lending website need a dedicated compliance page?",
    answer: "Because lending is a regulated, high-trust category, borrowers and search engines alike look for clear evidence of legitimacy. A dedicated KML Registration & Compliance page, paired with FAQ content on foreclosure and data handling, gives Abrus Krishna Finance a transparent trust signal a generic \"About Us\" paragraph cannot provide."
  },
  {
    question: "How were Gold Loan and Doorstep Gold Loan pages kept from competing with each other?",
    answer: "Each page was built around its own primary keyword and borrower intent — branch-based gold loans on one page, home-collection gold loans on the other — with distinct headings, FAQs, and content depth."
  },
  {
    question: "Does the site target Guruvayoor specifically, or the wider region?",
    answer: "Both. Product pages are built around the product itself, while Gold Loan in Guruvayoor and Business Loan in Guruvayoor exist as separate pages to capture local search intent."
  },
  {
    question: "How fast is the loan approval process, and does the website reflect that?",
    answer: "Approval typically takes 15–30 minutes after valuation and verification, with disbursement immediately after the KML-compliant agreement is signed. That timing is built into the homepage's four-step process section."
  },
  {
    question: "What platform was the site built on?",
    answer: "The website was built on WordPress using Elementor, giving the Abrus Krishna Finance team a flexible, easy-to-update platform."
  },
  {
    question: "Is a WordPress site a good fit for a regulated lending business?",
    answer: "Yes, with the right structure — provided the information architecture, product separation, and compliance content are planned before the build starts rather than added afterward."
  }
];

export const AbrusFAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(prev => prev === idx ? null : idx);
  };

  return (
    <div className="w-full space-y-4">
      {faqsData.map((faq, idx) => {
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
export default AbrusFAQ;
