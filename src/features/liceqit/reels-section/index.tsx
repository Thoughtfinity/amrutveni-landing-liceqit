"use client";

import React, { useRef, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import LICEQIT_DATA from "@/lib/constants/liceqit/liceqit.json";
import { Reel } from "@/lib/types/liceqit";
import Image from "next/image";
import Logo from "@/../public/logo/logo-white.svg";
import Link from "next/link";
import { X } from "lucide-react";
import { modalContainerVariants, modalVariants } from "@/lib/variants/liceqit";

export const ReelsSection = () => {
  const itemWidth = 240;
  const speed = 20;
  const gap = 16;

  const containerRef = useRef<HTMLDivElement | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState<string>("");

  const totalItemsWidth =
    LICEQIT_DATA?.liceqit?.reels?.length * (itemWidth + gap);

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
          animate={{
            x: -totalItemsWidth,
            transition: {
              duration: speed,
              ease: "linear",
              repeat: Infinity,
              repeatType: "loop",
            },
          }}
          style={{ gap: `${gap}px` }}
        >
          {LICEQIT_DATA?.liceqit?.reels?.map((item: Reel, index) => (
            <motion.div
              key={`amrutveni-liceqit-reel-id-${index}-original`}
              className="flex-shrink-0 rounded-4xl overflow-hidden cursor-pointer w-full h-full max-w-[160px] max-h-[240px] md:max-w-[240px] md:max-h-[332px]"
              onClick={() => openReelModal(item)}
            >
              <div>
                <video
                  className="w-full h-full scale-105"
                  loop={true}
                  controls={false}
                  autoPlay={true}
                  muted={true}
                  playsInline={true}
                >
                  <source
                    src={
                      process.env.NODE_ENV === "production"
                        ? `/amrutveni-landing-liceqit${item?.thumbnail}`
                        : item?.thumbnail
                    }
                    type="video/mp4"
                  />
                  Sorry, your browser doesn&apos;t support embedded videos.
                </video>
              </div>
            </motion.div>
          ))}

          {LICEQIT_DATA?.liceqit?.reels?.map((item: Reel, index) => (
            <motion.div
              key={`amrutveni-liceqit-reel-id-${index}-duplicate`}
              className="flex-shrink-0 rounded-4xl overflow-hidden cursor-pointer w-full h-full max-w-[160px] max-h-[240px] md:max-w-[240px] md:max-h-[332px]"
              onClick={() => openReelModal(item)}
            >
              <div>
                <video
                  className="w-full h-full scale-105"
                  loop={true}
                  controls={false}
                  autoPlay={true}
                  muted={true}
                  playsInline={true}
                >
                  <source
                    src={
                      process.env.NODE_ENV === "production"
                        ? `/amrutveni-landing-liceqit${item?.thumbnail}`
                        : item?.thumbnail
                    }
                    type="video/mp4"
                  />
                  Sorry, your browser doesn&apos;t support embedded videos.
                </video>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            variants={modalContainerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="fixed top-0 left-0 bg-black/30 w-screen h-screen z-[999] flex items-center justify-center"
          >
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="bg-white w-auto max-w-[90%] h-auto flex flex-col items-center px-4 pb-4 pt-4 rounded-3xl gap-4"
              ref={modalRef}
            >
              <button
                className="border border-liceqit-foreground group p-2 rounded-full self-end cursor-pointer relative after:absolute after:w-full after:h-full after:bg-liceqit-foreground after:left-0 after:rounded-full after:translate-y-[9px] hover:after:translate-y-[-28px] after:transition-transform after:duration-300 overflow-hidden"
                onClick={() => setIsModalOpen(false)}
              >
                <X className="w-5 h-5 group-hover:text-white transition-colors duration-300 relative z-10" />
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
                <motion.video
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="rounded-xl h-auto max-h-[calc(100vh-240px)]"
                  autoPlay={true}
                  loop={true}
                  controls={true}
                  playsInline={true}
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
                </motion.video>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
