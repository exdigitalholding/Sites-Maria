"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full flex flex-col gap-4">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className={`border rounded-2xl overflow-hidden transition-colors duration-500 ${
              isOpen ? "bg-white border-gold/20 shadow-lg" : "bg-smoke/50 border-ink/5 hover:border-gold/30 hover:bg-white"
            }`}
          >
            <button
              onClick={() => toggleItem(index)}
              className="w-full flex items-center justify-between p-6 sm:p-8 text-left focus:outline-none"
            >
              <h3 className={`font-display text-lg sm:text-xl tracking-tight pr-8 transition-colors ${
                isOpen ? "text-gold" : "text-bone"
              }`}>
                {item.question}
              </h3>
              <div className={`relative flex items-center justify-center size-8 rounded-full border shrink-0 transition-all duration-500 ${
                isOpen ? "bg-gold border-gold text-white rotate-180" : "bg-transparent border-bone/10 text-bone"
              }`}>
                {/* Plus / Minus Icon */}
                <span className="absolute w-3.5 h-[2px] bg-current rounded-full" />
                <span className={`absolute h-3.5 w-[2px] bg-current rounded-full transition-transform duration-500 ${
                  isOpen ? "rotate-90 scale-0" : "rotate-0 scale-100"
                }`} />
              </div>
            </button>
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="px-6 sm:px-8 pb-8 pt-0">
                <p className="text-bone/70 leading-relaxed text-[15px] sm:text-base">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
