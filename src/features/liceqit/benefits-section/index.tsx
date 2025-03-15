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
import Image from "next/image";
import BottleImage from "@/../public/images/liceqit/bottle/bottle-image.png";
import LICEQIT_DATA from "@/lib/constants/liceqit/liceqit.json";
import classNames from "classnames";

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
      <IconComponent className="w-[36px] h-[36px] md:w-[48px] md:h-[48px] text-liceqit-primary" />
    );
  };

  return (
    <div className="px-4 desktop:px-16 flex flex-col gap-16">
      <h2 className="text-center font-medium text-2xl desktop:text-4xl">
        Why use LiceQit?
      </h2>
      <div className="w-full max-w-[996px] min-h-[500px] mx-auto grid grid-cols-2 grid-rows-3 gap-y-8 sm:gap-y-6 sm:gap-x-48">
        <div className="col-start-1 col-end-2 sm:col-end-3 row-start-1 row-end-7 relative">
          <Image
            src={BottleImage}
            alt="LiceQit bottle"
            className="w-full max-w-[300px] md:max-w-[464px] z-10 mx-auto sticky sm:static top-[120px] sm:scale-90"
          />
        </div>

        {LICEQIT_DATA?.liceqit?.benefits?.map((benefit) => (
          <div
            className={classNames({
              "flex flex-col sm:items-center gap-1 desktop:gap-3 w-full sm:w-[60%] sm:self-end":
                true,
              [`${benefit?.className}`]: benefit?.className,
            })}
            key={`amrutveni-liceqit-benefit-id-${benefit?.id}`}
          >
            <div>{getIconComponent(benefit?.image)}</div>
            <div className="flex flex-col gap-1">
              <h3 className="font-medium md:text-xl">{benefit?.header}</h3>
              <p className="text-xs md:text-sm text-black/50">
                {benefit?.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
