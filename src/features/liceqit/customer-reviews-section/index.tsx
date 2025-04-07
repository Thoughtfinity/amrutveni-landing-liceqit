"use client";

import React, { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { type Swiper as SwiperRef } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import LICEQIT_DATA from "@/lib/constants/liceqit/liceqit.json";
import { SlideUpAnimator } from "../common/slideup-animation";
import { OpacityAnimator } from "../common/opacity-animation";
import { Autoplay } from "swiper/modules";
import classNames from "classnames";
import { BuyNowButton } from "../common/buynow-button";

export const CustomerReviewsSection = () => {
  const swiperRef = useRef<SwiperRef | null>(null);
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (typeof window === undefined || isMobile === null) {
    return null;
  }

  return (
    <div className="px-4 desktop:px-16 flex flex-col gap-16">
      <SlideUpAnimator>
        <h2 className="text-center font-medium text-2xl desktop:text-4xl">
          Hear from our customers
        </h2>
      </SlideUpAnimator>
      <OpacityAnimator>
        <div className="flex flex-col gap-8">
          <Swiper
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            slidesPerView={"auto"}
            spaceBetween={30}
            loop={true}
            grabCursor={!isMobile}
            autoplay={
              isMobile
                ? { delay: 5000, disableOnInteraction: false }
                : undefined
            }
            modules={isMobile ? [Autoplay] : undefined}
            className="w-full h-full"
          >
            {LICEQIT_DATA?.liceqit?.reviews?.map((review) => (
              <SwiperSlide
                className="bg-liceqit-slide-background rounded-3xl w-full sm:max-w-[350px] flex flex-col p-6 !h-auto"
                key={`amrutveni-liceqit-review-id-${review?.id}`}
              >
                <Image
                  src={
                    process.env.NODE_ENV === "production"
                      ? `/amrutveni-landing-liceqit${review?.image}`
                      : review?.image
                  }
                  alt={`customer ${review?.id}`}
                  width={48}
                  height={48}
                  className="w-10 h-10 desktop:w-12 desktop:h-12 rounded-full"
                />
                <h3 className="font-medium text-lg pt-2 pb-4">
                  {review?.name} says:
                </h3>
                <p className="text-sm text-liceqit-deep-grey">
                  {review?.message}
                </p>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="flex items-center justify-end gap-2">
            <button
              className={classNames({
                "w-10 h-10 rounded-full border flex items-center justify-center cursor-pointer":
                  true,
                "relative after:absolute after:w-full after:h-full after:bg-liceqit-foreground after:rounded-full after:left-0 after:translate-y-full hover:after:translate-y-0 after:transition-transform after:duration-300 group transition-colors duration-300 hover:border-liceqit-primary hover:text-white overflow-hidden":
                  !isMobile,
              })}
              onClick={() => swiperRef?.current?.slidePrev()}
            >
              <ArrowLeft className="w-[16px] relative z-10" />
            </button>
            <button
              className={classNames({
                "w-10 h-10 rounded-full border flex items-center justify-center cursor-pointer":
                  true,
                "relative after:absolute after:w-full after:h-full after:bg-liceqit-foreground after:rounded-full after:left-0 after:translate-y-full hover:after:translate-y-0 after:transition-transform after:duration-300 group transition-colors duration-300 hover:border-liceqit-primary hover:text-white overflow-hidden":
                  !isMobile,
              })}
              onClick={() => swiperRef?.current?.slideNext()}
            >
              <ArrowRight className="w-[16px] relative z-10" />
            </button>
          </div>
        </div>
      </OpacityAnimator>
      <OpacityAnimator>
        <BuyNowButton message="Buy Now" className="w-fit mx-auto" />
      </OpacityAnimator>
    </div>
  );
};
