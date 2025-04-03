import React from "react";
import { SlideUpAnimator } from "../common/slideup-animation";
import { ImageRevealer } from "../common/image-reveal-animation";
import Image from "next/image";
import HowItWorkMen from "@/../public/images/liceqit/how-it-work/men.png";
import HowItWorkKid from "@/../public/images/liceqit/how-it-work/kid.png";
import HowItWorkWomen from "@/../public/images/liceqit/how-it-work/women.png";

export const HowItWorksSection = () => {
  return (
    <div className="px-4 desktop:px-16 flex flex-col gap-16 relative">
      <div className="flex flex-col gap-8 z-10">
        <SlideUpAnimator>
          <h2 className="text-center font-medium text-2xl desktop:text-4xl">
            How it works?
          </h2>
        </SlideUpAnimator>
        <SlideUpAnimator>
          <p className="text-center text-liceqit-charcoal-grey text-sm desktop:text-lg sm:w-[75%] md:w-1/2 sm:mx-auto">
            Amrutveni LiceQit works by penetrating deep into the scalp,
            immobilizing and eliminating lice naturally. Its bioactive herbal
            ingredients nourish the hair, soothe irritation, and prevent
            reinfestation. Safe, gentle, and chemical-free, it keeps hair clean,
            healthy, and lice-free with regular use.
          </p>
        </SlideUpAnimator>
      </div>
      <div className="sm:hidden w-full flex items-center justify-center z-10">
        <ImageRevealer
          className="w-full max-w-[300px]"
          revealerClassName="rounded-t-full"
        >
          <Image
            src={HowItWorkKid}
            alt="Two kids with beautiful lice free hair"
            className="rounded-t-full"
          />
        </ImageRevealer>
      </div>
      <div className="hidden sm:grid grid-cols-3 gap-4 w-full max-w-[1000px] mx-auto z-10">
        <ImageRevealer
          className="w-full max-w-[300px]"
          revealerClassName="rounded-t-full"
        >
          <Image
            src={HowItWorkMen}
            alt="A man with beautiful lice free hair"
            className="rounded-t-full"
          />
        </ImageRevealer>
        <ImageRevealer
          className="w-full max-w-[300px]"
          revealerClassName="rounded-t-full"
        >
          <Image
            src={HowItWorkKid}
            alt="Two kids with beautiful lice free hair"
            className="rounded-t-full"
          />
        </ImageRevealer>
        <ImageRevealer
          className="w-full max-w-[300px]"
          revealerClassName="rounded-t-full"
        >
          <Image
            src={HowItWorkWomen}
            alt="A women with beautiful lice free hair"
            className="rounded-t-full"
          />
        </ImageRevealer>
      </div>
    </div>
  );
};
