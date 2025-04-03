"use client";

import { BuyNowButton } from "@/features/liceqit/common/buynow-button";
import React from "react";
import LICEQIT_DATA from "@/lib/constants/liceqit/liceqit.json";
import classNames from "classnames";
import { useDataContext } from "@/lib/utils/context/useDataContext";

export const HeroSection = () => {
  const { heroRef } = useDataContext();

  return (
    <div className="min-h-[calc(100vh-60px)] p-4" ref={heroRef}>
      <div
        className={classNames({
          "w-full h-full min-h-[calc(100vh-92px)] rounded-2xl bg-cover bg-center relative":
            true,
          "bg-[url('/amrutveni-landing-liceqit/images/liceqit/hero/hero-image.png')]":
            process.env.NODE_ENV === "production",
          "bg-[url('/images/liceqit/hero/hero-image.png')]":
            process.env.NODE_ENV !== "production",
        })}
      >
        <div className="min-h-[calc(100vh-92px)] flex flex-col justify-between relative z-10">
          <div className="p-4 pt-8 flex flex-col gap-1 desktop:p-8 desktop:gap-3">
            <div className="text-white font-semibold text-3xl sm:text-5xl desktop:!text-7xl desktop:font-medium relative overflow-hidden leading-tight">
              <h1 className="text-transparent">Introducing LiceQit</h1>
              <h1 className="absolute top-full left-0 hero-header border border-transparent">
                Introducing LiceQit
              </h1>
            </div>
            <p className="text-white font-medium text-sm uppercase desktop:text-lg hero-sub-content">
              beautiful, lice free hair
            </p>
          </div>
          <div className="p-4 w-full max-w-[calc(100vw-194px)]">
            <p className="text-[#f2f2f2] text-sm desktop:text-base desktop:font-medium max-w-[500px] hero-sub-content">
              Amrutveni LiceQit removes lice while nourishing your scalp.
              Herbal, chemical-free, and safe for all ages.
            </p>
          </div>
        </div>
        <div className="w-full h-full bg-black/35 absolute top-0 left-0 rounded-2xl z-0"></div>
        <div className="flex items-center justify-center z-10 absolute right-0 bottom-0 border-liceqit-background border-t-[8px] border-l-[8px] rounded-tl-3xl pt-1 pl-1 bg-liceqit-background">
          <BuyNowButton
            message={`Buy Now at ₹${LICEQIT_DATA?.liceqit?.basic?.price}`}
            className="min-w-[150px] min-h-[40px] hero-sub-content"
          />
          <div className="w-5 h-5 bg-transparent shadow-[6px_6px_#fff] absolute top-[-28px] right-0 rounded-br-2xl"></div>
          <div className="w-5 h-5 bg-transparent shadow-[6px_4px_#fff] absolute bottom-0 right-[173px] rounded-br-2xl"></div>
        </div>
      </div>
    </div>
  );
};
