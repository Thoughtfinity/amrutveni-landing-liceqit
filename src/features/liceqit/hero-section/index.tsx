import { Button } from "@/features/common/button";
import Image from "next/image";
import React from "react";
import HeroImage from "@/../public/images/liceqit/hero/hero-image.png";
import LICEQIT_DATA from "@/lib/constants/liceqit/liceqit.json";

export const HeroSection = () => {
  return (
    <div className="min-h-[calc(100vh-60px)] pt-[76px] flex flex-col">
      <h1 className="text-center font-medium text-5xl leading-tight px-4 desktop:px-16 desktop:text-left desktop:text-[86px]">
        Introducing
        <br className="sm:hidden" /> LiceQit
      </h1>
      <div className="grow flex flex-col gap-8 desktop:grid desktop:grid-cols-2">
        <div className="pt-8 px-4 desktop:px-16 flex flex-col items-center justify-center desktop:items-start desktop:justify-start">
          <p className="font-medium text-base pb-4 uppercase text-liceqit-primary">
            Lice-free hair starts today!
          </p>
          <p className="font-medium text-sm desktop:text-lg text-center desktop:text-left text-liceqit-charcoal-grey w-full sm:max-w-[50%] desktop:!max-w-full">
            Say goodbye to lice with LiceQit, the gentle yet powerful oil for
            kids, men, and women. Non-toxic and irritation-free, it removes lice
            and prevents them from coming back.
          </p>
          <Button
            message={`Buy Now at ₹${LICEQIT_DATA?.liceqit?.basic?.price}`}
            className="mt-8 bg-liceqit-primary text-white"
          />
        </div>
        <div className="grow w-full h-full flex items-end">
          {/* <div className="grow w-full h-full bg-[url('/images/liceqit/hero-image.png')] border"> */}
          <Image src={HeroImage} alt="Hero Image" />
        </div>
      </div>
    </div>
  );
};
