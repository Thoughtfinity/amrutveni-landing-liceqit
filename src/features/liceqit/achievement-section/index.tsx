"use client";

import React, { useEffect, useRef } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useTransform,
  animate,
} from "motion/react";
import classNames from "classnames";

export const AchievementSection = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { amount: 0.5, once: true });

  const productSoldCount = useMotionValue(0);
  const happyCustomersCount = useMotionValue(0);
  const repeatOrdersCount = useMotionValue(0);

  const roundedProductSoldCount = useTransform(() =>
    Math.round(productSoldCount.get())
  );
  const roundedHappyCustomersCount = useTransform(() =>
    Math.round(happyCustomersCount.get())
  );
  const roundedRepeatOrdersCount = useTransform(() =>
    Math.round(repeatOrdersCount.get())
  );

  useEffect(() => {
    if (isInView) {
      const productSoldControls = animate(productSoldCount, 100, {
        duration: 3,
      });
      const happyCustomersControls = animate(happyCustomersCount, 99, {
        duration: 3,
      });
      const repeatOrdersControls = animate(repeatOrdersCount, 100, {
        duration: 3,
      });

      return () => {
        productSoldControls.stop();
        happyCustomersControls.stop();
        repeatOrdersControls.stop();
      };
    }
  }, [isInView]);

  return (
    <div
      ref={ref}
      className={classNames({
        "flex flex-col md:flex-row items-center justify-center text-center mx-4 desktop:mx-16 py-12 desktop:py-32 bg-cover bg-center rounded-3xl desktop:rounded-4xl relative":
          true,
        "bg-[url('/amrutveni-landing-liceqit/images/liceqit/other/blue-sky.jpeg')]":
          process.env.NODE_ENV === "production",
        "bg-[url('/images/liceqit/other/blue-sky.jpeg')]":
          process.env.NODE_ENV !== "production",
      })}
    >
      <div className="flex flex-col gap-2 desktop:gap-4 w-full max-w-[300px] min-h-[150px] items-center justify-center">
        <div className="flex items-center justify-center text-[56px] font-medium md:text-7xl text-white">
          <motion.h1>{roundedProductSoldCount}</motion.h1>
          <h1>k+</h1>
        </div>
        <p className="text-sm desktop:text-lg font-medium text-black">
          Products Sold
        </p>
      </div>
      <div className="flex flex-col gap-2 desktop:gap-4 w-full max-w-[300px] min-h-[150px] items-center justify-center">
        <div className="flex items-center justify-center text-[56px] font-medium md:text-7xl text-white">
          <motion.h1>{roundedHappyCustomersCount}</motion.h1>
          <h1>k+</h1>
        </div>
        <p className="text-sm desktop:text-lg font-medium text-black">
          Happy Customers
        </p>
      </div>
      <div className="flex flex-col gap-2 desktop:gap-4 w-full max-w-[300px] min-h-[150px] items-center justify-center">
        <div className="flex items-center justify-center text-[56px] font-medium md:text-7xl text-white">
          <motion.h1>{roundedRepeatOrdersCount}</motion.h1>
          <h1>k+</h1>
        </div>
        <p className="text-sm desktop:text-lg font-medium text-black">
          Repeat Order
        </p>
      </div>
    </div>
  );
};
