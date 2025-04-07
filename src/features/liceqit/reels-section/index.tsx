"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, useAnimationControls } from "framer-motion";
import LICEQIT_DATA from "@/lib/constants/liceqit/liceqit.json";
import { Reel } from "@/lib/types/liceqit";
import Image from "next/image";
import Logo from "@/../public/logo/logo-white.svg";
import Link from "next/link";
import { X } from "lucide-react";

export const ReelsSection = () => {
  const itemWidth = 240;
  const itemHeight = 332;
  const speed = 20;
  const gap = 16;

  const containerRef = useRef<HTMLDivElement | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const controls = useAnimationControls();
  const [containerWidth, setContainerWidth] = useState<number>(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState<string>("");

  const totalItemsWidth =
    LICEQIT_DATA?.liceqit?.reels?.length * (itemWidth + gap);
  // LICEQIT_DATA?.liceqit?.reels?.length * (itemWidth + gap) - gap;

  useEffect(() => {
    if (containerRef.current) {
      setContainerWidth(containerRef.current.offsetWidth);

      controls.start({
        x: -totalItemsWidth,
        transition: {
          duration: speed,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop",
        },
      });
    }

    const handleResize = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [controls, totalItemsWidth, speed]);

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

  const neededDuplicates = Math.ceil(containerWidth / totalItemsWidth) + 1;

  const duplicateSets = Array(neededDuplicates)
    .fill(LICEQIT_DATA?.liceqit?.reels)
    .flat();

  const openReelModal = (reel: Reel) => {
    setIsModalOpen(true);
    setVideoUrl(reel?.video);
  };

  if (typeof window === undefined) {
    return null;
  }

  return (
    <>
      <div ref={containerRef} className="w-full overflow-hidden">
        <motion.div
          className="flex"
          animate={controls}
          style={{ gap: `${gap}px` }}
        >
          {LICEQIT_DATA?.liceqit?.reels?.map((item: Reel, index) => (
            <div
              key={`amrutveni-liceqit-reel-id-${index}-original`}
              className="flex-shrink-0 rounded-4xl overflow-hidden cursor-pointer"
              style={{ width: `${itemWidth}px`, height: `${itemHeight}px` }}
              onClick={() => openReelModal(item)}
            >
              <div>
                <video
                  className="w-full h-full"
                  loop={true}
                  controls={false}
                  autoPlay={true}
                  muted={true}
                >
                  <source
                    src={
                      process.env.NODE_ENV === "production"
                        ? `/amrutveni-landing-liceqit${item?.thumbnail}`
                        : item?.thumbnail
                    }
                    type="video/webm"
                  />
                  Sorry, your browser doesn&apos;t support embedded videos.
                </video>
              </div>
            </div>
          ))}

          {duplicateSets.map((item: Reel, index) => (
            <div
              key={`amrutveni-liceqit-reel-id-${index}-duplicate`}
              className="flex-shrink-0 rounded-4xl overflow-hidden cursor-pointer"
              style={{ width: `${itemWidth}px`, height: `${itemHeight}px` }}
              onClick={() => openReelModal(item)}
            >
              <div>
                <video
                  className="w-full h-full"
                  loop={true}
                  controls={false}
                  autoPlay={true}
                  muted={true}
                >
                  <source
                    src={
                      process.env.NODE_ENV === "production"
                        ? `/amrutveni-landing-liceqit${item?.thumbnail}`
                        : item?.thumbnail
                    }
                    type="video/webm"
                  />
                  Sorry, your browser doesn&apos;t support embedded videos.
                </video>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {isModalOpen && (
        <div className="fixed top-0 left-0 bg-black/30 w-screen h-screen z-[999] flex items-center justify-center">
          <div
            className="bg-white w-auto max-w-[90%] h-auto flex flex-col items-center px-4 pb-4 pt-4 rounded-3xl gap-4"
            ref={modalRef}
          >
            <button
              className="border p-2 rounded-full self-end cursor-pointer"
              onClick={() => setIsModalOpen(false)}
            >
              <X className="text-liceqit-foreground w-5 h-5" />
            </button>

            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between w-full pr-2 gap-2">
                <div className="flex items-center gap-3">
                  <div className="bg-liceqit-primary min-w-10 min-h-10 rounded-full flex items-center justify-center">
                    <Image src={Logo} alt="logo" className="w-6" />
                  </div>
                  <p className="font-medium">amrutveni</p>
                </div>
                <div>
                  <Link
                    href={"https://www.instagram.com/amrutveni/"}
                    className="font-semibold text-[#0095f6] text-sm"
                    target="_blank"
                  >
                    Follow
                  </Link>
                </div>
              </div>

              <video
                className="rounded-xl h-auto max-h-[calc(100dvh-240px)]"
                autoPlay
                loop
                controls={true}
              >
                <source
                  src={
                    process.env.NODE_ENV === "production"
                      ? `/amrutveni-landing-liceqit${videoUrl}`
                      : videoUrl
                  }
                  type="video/mp4"
                />
                Sorry, your browser doesn&apos;t support embedded videos.
              </video>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
