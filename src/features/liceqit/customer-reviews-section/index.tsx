"use client";

import React, { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { type Swiper as SwiperRef } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import LICEQIT_DATA from "@/lib/constants/liceqit/liceqit.json";

export const CustomerReviewsSection = () => {
  const swiperRef = useRef<SwiperRef | null>(null);

  return (
    <div className="px-4 desktop:px-16 flex flex-col gap-16">
      <h2 className="text-center font-medium text-2xl desktop:text-4xl">
        Hear from our customers
      </h2>
      <div className="flex flex-col gap-8">
        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          slidesPerView={"auto"}
          spaceBetween={30}
          className="w-full h-full"
        >
          {LICEQIT_DATA?.liceqit?.reviews?.map((review) => (
            <SwiperSlide
              className="bg-liceqit-slide-background rounded-3xl w-full sm:max-w-[350px] flex flex-col p-6 !h-auto"
              key={`amrutveni-liceqit-review-id-${review?.id}`}
            >
              <Image
                src={review?.image}
                alt="Customer one"
                width={48}
                height={48}
                className="w-10 desktop:w-12"
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
            className="w-10 h-10 rounded-full border flex items-center justify-center cursor-pointer"
            onClick={() => swiperRef?.current?.slidePrev()}
          >
            <ArrowLeft className="w-[16px]" />
          </button>
          <button
            className="w-10 h-10 rounded-full border flex items-center justify-center cursor-pointer"
            onClick={() => swiperRef?.current?.slideNext()}
          >
            <ArrowRight className="w-[16px]" />
          </button>
        </div>
      </div>
    </div>
  );
};
