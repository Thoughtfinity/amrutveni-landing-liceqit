"use client";

import { BuyNowButton } from "@/features/liceqit/common/buynow-button";
import React from "react";
import LICEQIT_DATA from "@/lib/constants/liceqit/liceqit.json";
import classNames from "classnames";
import { motion } from "motion/react";
import { SlideUpAnimator } from "../common/slideup-animation";
import {
  scaleUpContainerVariant,
  scaleUpItemVariant,
} from "@/lib/variants/liceqit";
import { OpacityAnimator } from "../common/opacity-animation";

const StepImageMapper: Record<number, string> = {
  1:
    process.env.NODE_ENV === "production"
      ? "bg-[url('/amrutveni-landing-liceqit/images/liceqit/how-to-use/step-1.png')]"
      : "bg-[url('/images/liceqit/how-to-use/step-1.png')]",
  2:
    process.env.NODE_ENV === "production"
      ? "bg-[url('/amrutveni-landing-liceqit/images/liceqit/how-to-use/step-2.png')]"
      : "bg-[url('/images/liceqit/how-to-use/step-2.png')]",
  3:
    process.env.NODE_ENV === "production"
      ? "bg-[url('/amrutveni-landing-liceqit/images/liceqit/how-to-use/step-3.png')]"
      : "bg-[url('/images/liceqit/how-to-use/step-3.png')]",
};

export const HowToUseSection = () => {
  return (
    <div className="px-4 desktop:px-16 flex flex-col gap-16">
      <SlideUpAnimator>
        <h2 className="text-center font-medium text-2xl desktop:text-4xl">
          How to use?
        </h2>
      </SlideUpAnimator>
      <div className="flex lg:hidden items-center justify-center gap-9 flex-wrap">
        {LICEQIT_DATA?.liceqit?.howToUse?.map((step) => (
          <motion.div
            variants={scaleUpItemVariant}
            initial="hidden"
            whileInView="show"
            transition={{ delay: 0.3 }}
            viewport={{ amount: 0.5, once: true }}
            className="w-full max-w-[350px] min-h-[300px] flex flex-col items-center justify-center rounded-3xl shadow-xl"
            key={`amrutveni-liceqit-how-to-use-id-${step?.id}`}
          >
            <div
              className={`w-full min-h-[250px] h-full max-h-[300px] rounded-t-3xl bg-center bg-cover ${
                StepImageMapper[step?.id]
              }`}
            />
            <div className="flex flex-col gap-2 p-6 pb-12 rounded-b-3xl">
              <h2 className="font-medium text-xl desktop:text-2xl">
                {step?.header}
              </h2>
              <p className="text-sm text-liceqit-charcoal-grey">
                {step?.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
      <motion.div
        variants={scaleUpContainerVariant}
        initial="hidden"
        whileInView="show"
        transition={{
          staggerChildren: 0.2,
        }}
        viewport={{ amount: 0.5, once: true }}
        className="hidden lg:flex justify-center gap-9 flex-wrap"
      >
        {LICEQIT_DATA?.liceqit?.howToUse?.map((step) => (
          <motion.div
            variants={scaleUpItemVariant}
            className={classNames({
              "w-full max-w-[350px] min-h-[300px] flex flex-col items-center justify-center rounded-3xl shadow-xl group":
                true,
            })}
            key={`amrutveni-liceqit-how-to-use-id-${step?.id}`}
          >
            <div
              className={`w-full min-h-[250px] h-full max-h-[300px] rounded-t-3xl overflow-hidden`}
            >
              <div
                className={`w-full h-full bg-center bg-cover rounded-t-3xl group-hover:scale-110 transition-transform duration-300 ${
                  StepImageMapper[step?.id]
                }`}
              />
            </div>
            <div className="flex flex-col gap-2 p-6 pb-12 rounded-b-3xl">
              <h2 className="font-medium text-xl">{step?.header}</h2>
              <p className="text-sm desktop:text-[15px] text-liceqit-charcoal-grey">
                {step?.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
      <OpacityAnimator>
        <BuyNowButton message="Buy Now" className="w-fit mx-auto" />
      </OpacityAnimator>
    </div>
  );
};
