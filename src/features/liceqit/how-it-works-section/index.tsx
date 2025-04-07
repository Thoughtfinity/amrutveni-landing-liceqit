import React from "react";
import { SlideUpAnimator } from "../common/slideup-animation";
import { ImageRevealer } from "../common/image-reveal-animation";
import Image from "next/image";
import ProductImage from "@/../public/images/liceqit/bottle/featured.png";

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
      <div className="flex items-center justify-center">
        <ImageRevealer
          className="w-[75%] mx-auto desktop:w-[500px] rounded-full"
          revealerClassName="rounded-full"
        >
          <Image
            src={ProductImage}
            alt="product image"
            className="rounded-full"
          />
        </ImageRevealer>
      </div>
    </div>
  );
};
