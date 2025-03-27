import { BuyNowButton } from "@/features/common/buynow-button";
import React from "react";
import LICEQIT_DATA from "@/lib/constants/liceqit/liceqit.json";

export const HeroSection = () => {
  return (
    <div className="min-h-[calc(100vh-60px)] p-4">
      <div className="w-full h-full min-h-[calc(100vh-92px)] rounded-2xl bg-[url('/images/liceqit/hero/hero-image.png')] bg-cover bg-center relative">
        <div className="min-h-[calc(100vh-92px)] flex flex-col justify-between relative z-10">
          <div className="p-4 pt-8 flex flex-col gap-1 desktop:p-8 desktop:gap-3">
            <h1 className="text-white font-semibold text-3xl desktop:text-7xl desktop:font-medium">
              Introducing LiceQit
            </h1>
            <p className="text-white font-medium text-sm uppercase desktop:text-lg">
              beautiful, lice free hair
            </p>
          </div>
          <div className="p-4 w-full max-w-[calc(100vw-194px)]">
            <p className="text-[#f2f2f2] text-sm desktop:text-base desktop:font-medium max-w-[500px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque interdum orci eu aliquam tincidunt.
            </p>
          </div>
        </div>
        <div className="w-full h-full bg-black/35 absolute top-0 left-0 rounded-2xl z-0"></div>
        <div className="flex items-center justify-center z-10 absolute right-0 bottom-0 border-liceqit-background border-t-[8px] border-l-[8px] rounded-tl-3xl pt-1 pl-1 bg-liceqit-background">
          <BuyNowButton
            message={`Buy Now at ₹${LICEQIT_DATA?.liceqit?.basic?.price}`}
            className="min-w-[150px] min-h-[40px]"
          />
          <div className="w-5 h-5 bg-transparent shadow-[6px_6px_#fff] absolute top-[-28px] right-0 rounded-br-2xl"></div>
          <div className="w-5 h-5 bg-transparent shadow-[6px_4px_#fff] absolute bottom-0 right-[173px] rounded-br-2xl"></div>
        </div>
      </div>
    </div>
  );
};
