"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Pause,
  Play,
  PlayCircle,
  Volume2,
  VolumeOff,
  X,
} from "lucide-react";
import { type Swiper as SwiperRef } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { BuyNowButton } from "@/features/common/buynow-button";
import Image from "next/image";
import Logo from "@/../public/logo/logo-white.svg";
import Link from "next/link";
import LICEQIT_DATA from "@/lib/constants/liceqit/liceqit.json";
import { Reel } from "@/lib/types/liceqit";

export const ReelsSection = () => {
  const swiperRef = useRef<SwiperRef | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isSliderLocked, setIsSliderLocked] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [modalValues, setModalValues] = useState({
    video: "",
    description: "",
    tags: "",
  });

  useEffect(() => {
    if (swiperRef.current) setIsSliderLocked(swiperRef.current.isLocked);
  }, [swiperRef.current]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isModalOpen &&
        modalRef.current &&
        event.target instanceof Node &&
        !modalRef.current.contains(event.target)
      ) {
        setIsModalOpen(false);
      }
    };

    if (isModalOpen) {
      document?.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document?.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isModalOpen]);

  const togglePlayback = () => {
    if (!videoRef?.current) return;

    setIsPlaying((prev) => !prev);

    if (videoRef?.current?.paused) {
      videoRef?.current?.play();
    } else {
      videoRef?.current?.pause();
    }
  };

  const openReelModal = (reel: Reel) => {
    setIsModalOpen(true);
    setModalValues({
      video: reel?.video,
      description: reel?.description,
      tags: reel?.tags,
    });
  };

  return (
    <div className="px-4 desktop:px-16 flex flex-col gap-8 desktop:gap-12">
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        slidesPerView={"auto"}
        spaceBetween={16}
        centerInsufficientSlides
        className="w-full h-full"
      >
        {LICEQIT_DATA?.liceqit?.reels?.map((reel) => (
          <SwiperSlide
            className="rounded-4xl max-w-[196px] desktop:max-w-[240px] h-full max-h-[300px] desktop:max-h-[332px] group cursor-pointer overflow-hidden"
            onClick={() => openReelModal(reel)}
            key={`amrutveni-liceqit-reel-id-${reel?.id}`}
          >
            <div>
              <Image
                src={
                  process.env.NODE_ENV === "production"
                    ? `/amrutveni-landing-liceqit${reel?.thumbnail}`
                    : reel?.thumbnail
                }
                alt="Reel thumbnail"
                width={240}
                height={332}
                className="w-full h-full"
              />
            </div>
            <div className="hidden w-full h-full bg-black/50 absolute top-0 left-0 rounded-4xl group-hover:flex items-center justify-center">
              <PlayCircle className="text-white w-10 h-10" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {!isSliderLocked && (
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
      )}
      <BuyNowButton
        message="Buy Now"
        className="w-fit mx-auto"
      />
      {isModalOpen && (
        <div className="fixed w-full h-full top-1/2 -translate-x-1/2 left-1/2 -translate-y-1/2 bg-black/50 z-[99] flex items-center justify-center px-4 desktop:px-16">
          <div
            className="w-full max-w-[772px] min-h-[80vh] max-h-[90vh] desktop:min-h-[70vh] bg-white rounded-2xl flex flex-col gap-4 desktop:gap-0 desktop:grid desktop:grid-cols-2 relative"
            ref={modalRef}
          >
            <button
              className="absolute right-3 top-3 bg-black/50 rounded-full w-10 h-10 flex items-center justify-center z-30 cursor-pointer"
              onClick={() => setIsModalOpen(false)}
            >
              <X className="text-white w-5 h-5" />
            </button>
            <div className="grow bg-gray-300 rounded-t-2xl desktop:rounded-t-none desktop:rounded-l-2xl relative h-full overflow-hidden">
              <video
                className="w-full h-full relative"
                autoPlay
                loop
                controls={false}
                muted={isMuted}
                ref={videoRef}
                id="amrutveni-reel-id-1"
              >
                <source
                  src={
                    process.env.NODE_ENV === "production"
                      ? `/amrutveni-landing-liceqit${modalValues?.video}`
                      : modalValues?.video
                  }
                  type="video/mp4"
                />
                Sorry, your browser doesn&apos;t support embedded videos.
              </video>
              <div className="absolute flex flex-col gap-2 right-3 bottom-3">
                <button
                  className="bg-black/50 rounded-full w-10 h-10 flex items-center justify-center cursor-pointer"
                  onClick={() => setIsMuted((prev) => !prev)}
                >
                  {isMuted ? (
                    <VolumeOff className="text-white w-4 h-4" />
                  ) : (
                    <Volume2 className="text-white w-4 h-4" />
                  )}
                </button>
                <button
                  className="bg-black/50 rounded-full w-10 h-10 flex items-center justify-center cursor-pointer"
                  onClick={togglePlayback}
                >
                  {isPlaying ? (
                    <Pause className="text-white w-4 h-4" />
                  ) : (
                    <Play className="text-white w-4 h-4" />
                  )}
                </button>
              </div>
            </div>
            <div className="flex flex-col gap-4 pb-8 desktop:pt-16 desktop:justify-between">
              <div className="flex flex-col gap-4">
                <div className="px-4 flex items-center gap-4">
                  <div className="bg-liceqit-primary w-12 h-12 rounded-full flex items-center justify-center">
                    <Image src={Logo} alt="logo" className="w-8" />
                  </div>
                  <div className="flex items-center gap-2">
                    <p className="font-medium text-lg">amrutveni</p>
                    <p>•</p>
                    <Link
                      href={"https://www.instagram.com/amrutveni/"}
                      className="font-semibold text-[#0095f6]"
                      target="_blank"
                    >
                      Follow
                    </Link>
                  </div>
                </div>
                <p className="px-4">{modalValues?.description}</p>
              </div>
              <p className="px-4 text-sm text-[#4eafff] font-medium">
                {modalValues?.tags}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
