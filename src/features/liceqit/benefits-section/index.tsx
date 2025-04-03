import React from "react";
import {
  Blend,
  BugOff,
  Flower,
  ShieldCheck,
  Sprout,
  Waves,
  LucideIcon,
} from "lucide-react";
import LICEQIT_DATA from "@/lib/constants/liceqit/liceqit.json";
import { SlideUpAnimator } from "../common/slideup-animation";

export const BenefitsSection = () => {
  const IconMap: Record<string, LucideIcon> = {
    Blend: Blend,
    BugOff: BugOff,
    Flower: Flower,
    ShieldCheck: ShieldCheck,
    Sprout: Sprout,
    Waves: Waves,
  };

  const getIconComponent = (iconName: string) => {
    const IconComponent = IconMap[iconName] || Waves;
    return (
      <IconComponent className="w-8 h-8 sm:w-10 sm:h-10 text-liceqit-deep-grey" />
    );
  };

  return (
    <div className="px-4 desktop:px-16 flex flex-col gap-16">
      <SlideUpAnimator>
        <h2 className="text-center font-medium text-2xl desktop:text-4xl">
          Why use LiceQit?
        </h2>
      </SlideUpAnimator>
      <div className="flex items-center justify-center flex-wrap gap-8">
        {LICEQIT_DATA?.liceqit?.benefits?.map((benefit) => (
          <SlideUpAnimator
            className="w-full max-w-[160px] sm:max-w-[200px] min-h-[180px] sm:min-h-[220px] bg-liceqit-slide-background rounded-[20px] p-4 relative"
            key={`amrutveni-liceqit-benefit-id-${benefit?.id}`}
          >
            <p className="text-base sm:text-lg">{benefit?.header}</p>
            <div className="absolute w-14 h-14 sm:w-16 sm:h-16 bg-liceqit-background right-0 bottom-0 rounded-tl-[20px] flex items-center justify-center">
              {getIconComponent(benefit?.image)}
              <div className="absolute w-6 h-6 bg-transparent shadow-[6px_6px_#fff] rounded-br-[20px] right-0 top-[-24px]"></div>
              <div className="absolute w-6 h-6 bg-transparent shadow-[6px_6px_#fff] rounded-br-[20px] right-[56px] sm:right-[64px] bottom-0"></div>
            </div>
          </SlideUpAnimator>
        ))}
      </div>
    </div>
  );
};
