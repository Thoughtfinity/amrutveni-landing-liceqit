"use client";

import { Plus } from "lucide-react";
import React, { useState } from "react";
import LICEQIT_DATA from "@/lib/constants/liceqit/liceqit.json";
import { motion, AnimatePresence } from "motion/react";
import { SlideUpAnimator } from "../common/slideup-animation";
import { OpacityAnimator } from "../common/opacity-animation";

export const FaqSection = () => {
  const [expandedQuestion, setExpandedQuestion] = useState<null | number>(null);

  return (
    <div className="px-4 desktop:px-16 flex flex-col gap-16 w-full max-w-[1000px] mx-auto">
      <SlideUpAnimator>
        <h2 className="text-center font-medium text-2xl desktop:text-4xl">
          FAQ
        </h2>
      </SlideUpAnimator>
      <OpacityAnimator>
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
                <div className="flex justify-end self-center">
                  <motion.div
                    animate={{ rotate: expandedQuestion === faq?.id ? 45 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <Plus className="w-5 desktop:w-7" />
                  </motion.div>
                </div>
              </button>
              <AnimatePresence>
                {expandedQuestion === faq?.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="text-[13px] py-4 desktop:text-base">
                      {faq?.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </OpacityAnimator>
    </div>
  );
};
