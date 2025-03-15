"use client";

import { Minus, Plus } from "lucide-react";
import React, { useState } from "react";
import LICEQIT_DATA from "@/lib/constants/liceqit/liceqit.json";

export const FaqSection = () => {
  const [expandedQuestion, setExpandedQuestion] = useState<number | null>(null);

  return (
    <div className="px-4 desktop:px-16 flex flex-col gap-16 w-full max-w-[1000px] mx-auto">
      <h2 className="text-center font-medium text-2xl desktop:text-4xl">FAQ</h2>
      <div className="flex flex-col">
        {LICEQIT_DATA?.liceqit?.faq?.map((faq) => (
          <div
            key={`amrutveni-liceqit-faq-id-${faq?.id}`}
            className="border-b border-liceqit-deep-grey"
          >
            <button
              className="grid grid-cols-[0.9fr_0.1fr] w-full py-4 desktop:py-8 cursor-pointer"
              onClick={() => {
                if (faq?.id === expandedQuestion) {
                  setExpandedQuestion(null);
                } else {
                  setExpandedQuestion(faq?.id);
                }
              }}
            >
              <span className="text-left font-medium text-[15px] desktop:text-lg">
                {faq?.question}
              </span>
              <div className="flex justify-end">
                {expandedQuestion && expandedQuestion === faq?.id ? (
                  <Minus className="w-5 desktop:w-7" />
                ) : (
                  <Plus className="w-5 desktop:w-7" />
                )}
              </div>
            </button>
            {expandedQuestion && expandedQuestion === faq?.id && (
              <p className="text-[13px] py-4 desktop:text-base">
                {faq?.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
