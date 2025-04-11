"use client";

import { BuyNowButton } from "@/features/liceqit/common/buynow-button";
import React from "react";
import classNames from "classnames";
import { useDataContext } from "@/lib/utils/context/useDataContext";
import { motion } from "motion/react";

export const HeroSection = () => {
  const { heroRef, isPageLoaded } = useDataContext();

  return (
    <>
      <div className="min-h-[calc(100vh-60px)] p-4 lg:hidden" ref={heroRef}>
        <div
          className={classNames({
            "w-full h-full min-h-[calc(100vh-132px)] rounded-4xl bg-cover bg-center relative p-4 flex items-end justify-center":
              true,
            "bg-[url('/amrutveni-landing-liceqit/images/liceqit/hero/hero-mobile.png')]":
              process.env.NODE_ENV === "production",
            "bg-[url('/images/liceqit/hero/hero-mobile.png')]":
              process.env.NODE_ENV !== "production",
          })}
        >
          <div className="flex flex-col gap-12 relative z-10 mb-6">
            <div className="flex flex-col items-center justify-center">
              <div className="relative">
                <h1 className="text-[36px] text-white font-semibold">
                  No More Itch,
                </h1>
                <svg
                  width="70"
                  height="46"
                  viewBox="0 0 70 46"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute top-[-20%] right-[-1%] w-[82px] h-[76px]"
                >
                  <motion.path
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: isPageLoaded ? 1 : 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    d="M49.3469 8.46043C21.4231 0.00187031 0.679144 16.5096 1.86844 28.0498C5.27343 61.0897 79.6134 38.383 66.6296 11.6774C61.5909 1.3137 35.441 -3.33385 8.10946 10.0583"
                    stroke="#FFA375"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <div className="relative">
                <h1 className="text-[36px] text-white font-semibold">
                  No More Lice.
                </h1>
                <svg
                  width="61"
                  height="26"
                  viewBox="0 0 61 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute top-[80%] right-[-5%] w-[76px] h-[28px]"
                >
                  <motion.path
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: isPageLoaded ? 1 : 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    d="M0.960538 13.4614C0.960538 13.4614 54.1746 -0.816016 55.9458 1.97433C57.7169 4.76469 1.76664 16.1297 3.2801 23.2622C4.79355 30.3947 60.388 9.6345 60.388 9.6345"
                    stroke="#FFA375"
                    strokeWidth="2"
                  />
                </svg>
              </div>
            </div>
            <div className="flex items-center justify-center w-[80%] mx-auto">
              <button className="min-w-[150px] min-h-[40px] bg-white text-liceqit-foreground rounded-full font-medium text-sm">
                Try LiceQit Today
              </button>
            </div>
          </div>
          <div className="w-full h-full bg-black/25 absolute top-0 left-0 rounded-4xl z-0"></div>
        </div>
      </div>

      {/* Desktop Screen */}
      <div className="hidden lg:flex mt-24 flex-col gap-16">
        <div className="flex flex-col gap-12 relative">
          <div className="flex flex-col items-center justify-center">
            <div className="relative">
              <h1 className="text-[72px] text-[#a5a5a5]">
                No More <span className="text-liceqit-foreground">Itch,</span>
              </h1>
              <svg
                width="70"
                height="46"
                viewBox="0 0 70 46"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute top-[-5%] right-[-3%] w-[156px] h-auto"
              >
                <motion.path
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: isPageLoaded ? 1 : 0 }}
                  transition={{ duration: 1 }}
                  viewport={{ once: true }}
                  d="M49.3469 8.46043C21.4231 0.00187031 0.679144 16.5096 1.86844 28.0498C5.27343 61.0897 79.6134 38.383 66.6296 11.6774C61.5909 1.3137 35.441 -3.33385 8.10946 10.0583"
                  stroke="#FFA375"
                  strokeWidth="2"
                  className="hero-svg"
                />
              </svg>
            </div>
            <div className="relative">
              <h1 className="text-[72px] text-[#a5a5a5]">
                No More <span className="text-liceqit-foreground">Lice.</span>
              </h1>
              <svg
                width="61"
                height="26"
                viewBox="0 0 61 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute top-[80%] right-[-5%] w-[126px] h-auto"
              >
                <motion.path
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: isPageLoaded ? 1 : 0 }}
                  transition={{ duration: 1 }}
                  viewport={{ once: true }}
                  d="M0.960538 13.4614C0.960538 13.4614 54.1746 -0.816016 55.9458 1.97433C57.7169 4.76469 1.76664 16.1297 3.2801 23.2622C4.79355 30.3947 60.388 9.6345 60.388 9.6345"
                  stroke="#FFA375"
                  strokeWidth="2"
                  className="hero-svg"
                />
              </svg>
            </div>
          </div>
          <div className="flex items-center justify-center w-[80%] mx-auto">
            <BuyNowButton message="Try Liceqit Today" showIcon={false} />
          </div>
          <div
            className={classNames({
              "absolute w-24 h-24 rounded-full top-[-5%] left-[5%] bg-center bg-cover transition-all duration-300 hover:top-[-7%] hover:shadow-2xl":
                true,
              "bg-[url('/amrutveni-landing-liceqit/images/liceqit/hero/lice.jpg')]":
                process.env.NODE_ENV === "production",
              "bg-[url('/images/liceqit/hero/lice.jpg')]":
                process.env.NODE_ENV !== "production",
            })}
          />
          <div
            className={classNames({
              "absolute w-24 h-24 rounded-full top-[-5%] right-[5%] bg-center bg-cover transition-all duration-300 hover:top-[-7%] hover:shadow-2xl":
                true,
              "bg-[url('/amrutveni-landing-liceqit/images/liceqit/bottle/bottle.png')]":
                process.env.NODE_ENV === "production",
              "bg-[url('/images/liceqit/bottle/bottle.png')]":
                process.env.NODE_ENV !== "production",
            })}
          />
          <div
            className={classNames({
              "absolute w-24 h-24 rounded-full top-[50%] left-[15%] bg-center bg-cover transition-all duration-300 hover:top-[48%] hover:shadow-2xl":
                true,
              "bg-[url('/amrutveni-landing-liceqit/images/liceqit/hero/boy.jpg')]":
                process.env.NODE_ENV === "production",
              "bg-[url('/images/liceqit/hero/boy.jpg')]":
                process.env.NODE_ENV !== "production",
            })}
          />
          <div
            className={classNames({
              "absolute w-24 h-24 rounded-full top-[50%] right-[15%] bg-center bg-cover transition-all duration-300 hover:top-[48%] hover:shadow-2xl":
                true,
              "bg-[url('/amrutveni-landing-liceqit/images/liceqit/hero/girl.jpg')]":
                process.env.NODE_ENV === "production",
              "bg-[url('/images/liceqit/hero/girl.jpg')]":
                process.env.NODE_ENV !== "production",
            })}
          />
        </div>
        <div
          className={classNames({
            "w-[75%] h-[60vh] mx-auto rounded-4xl bg-center bg-cover": true,
            "bg-[url('/amrutveni-landing-liceqit/images/liceqit/hero/hero-desktop.png')]":
              process.env.NODE_ENV === "production",
            "bg-[url('/images/liceqit/hero/hero-desktop.png')]":
              process.env.NODE_ENV !== "production",
          })}
        ></div>
      </div>
    </>
  );
};
