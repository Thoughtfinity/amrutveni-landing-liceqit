import Image from "next/image";
import React from "react";
import HowItWorkMen from "@/../public/images/liceqit/how-it-work/men.png";
import HowItWorkWomen from "@/../public/images/liceqit/how-it-work/women.png";
import HowItWorkKid from "@/../public/images/liceqit/how-it-work/kid.png";

export const HowItWorksSection = () => {
  return (
    <div className="px-4 desktop:px-16 flex flex-col gap-16">
      <div className="flex flex-col gap-8">
        <h2 className="text-center font-medium text-2xl desktop:text-4xl">
          How it works?
        </h2>
        <p className="text-center text-liceqit-charcoal-grey text-sm desktop:text-lg sm:w-[75%] md:w-1/2 sm:mx-auto">
          Amrutveni LiceQit works by penetrating deep into the scalp,
          immobilizing and eliminating lice naturally. Its bioactive herbal
          ingredients nourish the hair, soothe irritation, and prevent
          reinfestation. Safe, gentle, and chemical-free, it keeps hair clean,
          healthy, and lice-free with regular use.
        </p>
      </div>
      <div className="flex items-center justify-evenly gap-4">
        <div className="w-full max-w-[300px] hidden md:block">
          <Image src={HowItWorkMen} alt="LiceQit using men" />
        </div>
        <div className="max-w-[300px]">
          <Image src={HowItWorkKid} alt="LiceQit using kid" />
        </div>
        <div className="max-w-[300px] hidden md:block">
          <Image src={HowItWorkWomen} alt="LiceQit using women" />
        </div>
      </div>
    </div>
  );
};
