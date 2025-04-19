import React from "react";
import LICEQIT_DATA from "@/lib/constants/liceqit/liceqit.json";
import { SlideUpAnimator } from "../common/slideup-animation";
import BenefitOne from "@/../public/images/liceqit/benefit/benefit-1.webp";
import BenefitTwo from "@/../public/images/liceqit/benefit/benefit-2.webp";
import BenefitThree from "@/../public/images/liceqit/benefit/benefit-3.webp";
import BenefitFour from "@/../public/images/liceqit/benefit/benefit-4.webp";
import BenefitFive from "@/../public/images/liceqit/benefit/benefit-5.webp";
import BenefitSix from "@/../public/images/liceqit/benefit/benefit-6.webp";
import Image, { StaticImageData } from "next/image";

export const BenefitsSection = () => {
  const ImageMapper: Record<number, StaticImageData> = {
    1: BenefitOne,
    2: BenefitTwo,
    3: BenefitThree,
    4: BenefitFour,
    5: BenefitFive,
    6: BenefitSix,
  };

  return (
    <div className="px-4 desktop:px-16 flex flex-col gap-16">
      <SlideUpAnimator>
        <h2 className="text-center font-medium text-2xl desktop:text-4xl">
          Why use LiceQit?
        </h2>
      </SlideUpAnimator>
      <div className="flex items-start justify-center flex-wrap gap-4 sm:gap-x-10">
        {LICEQIT_DATA?.liceqit?.benefits?.map((benefit) => (
          <SlideUpAnimator
            className="w-full max-w-[172px] sm:max-w-[196px] flex flex-col gap-6 items-center justify-center group"
            key={`amrutveni-liceqit-benefit-id-${benefit?.id}`}
          >
            <div className="flex items-center justify-center border py-6 relative">
              <Image
                src={ImageMapper[benefit?.id]}
                width={86}
                alt="featured"
                className="w-[50%] rounded-lg z-10 transition-all duration-300 group-hover:shadow-2xl group-hover:scale-110"
              />
              <div className="absolute w-[75%] h-[75%] bg-white top-[-1px] right-[-1px]" />
              <div className="absolute w-[75%] h-[75%] bg-white bottom-[-1px] left-[-1px]" />
            </div>
            <div className="flex flex-col gap-2 px-2 pb-4">
              <p className="text-sm font-medium sm:text-base text-center">
                {benefit?.header}
              </p>
              <p className="text-xs sm:text-sm text-liceqit-charcoal-grey text-center">
                {benefit?.description}
              </p>
            </div>
          </SlideUpAnimator>
        ))}
      </div>
    </div>
  );
};
