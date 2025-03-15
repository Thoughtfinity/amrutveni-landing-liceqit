import { Button } from "@/features/common/button";
import React from "react";
import LICEQIT_DATA from "@/lib/constants/liceqit/liceqit.json";
import classNames from "classnames";

export const HowToUseSection = () => {
  return (
    <div className="px-4 desktop:px-16 flex flex-col gap-16">
      <h2 className="text-center font-medium text-2xl desktop:text-4xl">
        How to use?
      </h2>
      <div className="flex items-center justify-center gap-9 flex-wrap">
        {LICEQIT_DATA?.liceqit?.howToUse?.map((step) => (
          <div
            className={classNames({
              "w-full max-w-[300px] min-h-[300px] bg-liceqit-slide-background flex flex-col items-center justify-center rounded-[48px] px-6 py-6 gap-6 shadow-xl":
                true,
              [`${step?.angle}`]: step?.angle,
            })}
            key={`amrutveni-liceqit-how-to-use-id-${step?.id}`}
          >
            <h2 className="font-medium text-xl desktop:text-2xl">
              {step?.header}
            </h2>
            <p className="text-center text-sm desktop:text-[15px]">
              {step?.description}
            </p>
            <div className="grow w-full h-full bg-white rounded-3xl"></div>
          </div>
        ))}
      </div>
      <Button
        message="Buy Now"
        className="w-fit mx-auto bg-liceqit-primary text-white"
      />
    </div>
  );
};
