"use client";

import React, { useEffect, useRef, useState } from "react";
import { SlideUpAnimator } from "../common/slideup-animation";
import { motion, AnimatePresence } from "motion/react";
import { modalContainerVariants, modalVariants } from "@/lib/variants/liceqit";
import { X } from "lucide-react";
import LICEQIT_DATA from "@/lib/constants/liceqit/liceqit.json";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export const HowItWorksSection = () => {
  const modalRef = useRef<HTMLDivElement>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

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

  return (
    <div className="px-4 desktop:px-16 flex flex-col relative -mt-12 sm:mt-0">
      <div className="flex flex-col gap-8 z-10">
        <SlideUpAnimator>
          <h2 className="text-center font-medium text-2xl desktop:text-4xl">
            How LiceQit works?
          </h2>
        </SlideUpAnimator>
        <SlideUpAnimator>
          <p className="text-center text-liceqit-charcoal-grey text-sm desktop:text-lg sm:w-[75%] md:w-1/2 sm:mx-auto">
            Amrutveni LiceQit works by penetrating deep into the scalp,
            immobilizing and eliminating lice naturally. Its bioactive herbal
            ingredients nourish the hair, soothe irritation, and prevent
            reinfestation. Safe, gentle, and chemical-free, it keeps hair clean,
            healthy, and lice-free with regular use.
          </p>
        </SlideUpAnimator>
        <SlideUpAnimator className="flex items-center justify-center">
          <button
            className="text-xs border rounded-full px-4 h-[36px] cursor-pointer transition-colors duration-300 relative before:absolute before:w-full before:h-full before:bg-liceqit-foreground before:left-0 before:translate-y-[26px] before:rounded-full hover:before:translate-y-[-9px] before:transition-transform before:duration-300 before:-z-0 hover:text-white hover:border-liceqit-primary overflow-hidden"
            onClick={() => setIsModalOpen((prev) => !prev)}
          >
            <p className="uppercase relative">Read More</p>
          </button>
        </SlideUpAnimator>
      </div>
      <div className="flex items-center justify-center relative overflow-hidden">
        <video
          className="w-full min-[450px]:w-4/6 md:w-3/6 lg:w-2/6 h-full z-10"
          loop={true}
          controls={false}
          autoPlay={true}
          muted={true}
          playsInline={true}
        >
          <source
            src={
              process.env.NODE_ENV === "production"
                ? "/amrutveni-landing-liceqit$/videos/liceqit/bottle/bottle-ios.mov"
                : "/videos/liceqit/bottle/bottle-ios.mov"
            }
            type='video/mp4; codecs="hvc1"'
          />
          <source
            src={
              process.env.NODE_ENV === "production"
                ? "/amrutveni-landing-liceqit$/videos/liceqit/bottle/bottle-common.webm"
                : "/videos/liceqit/bottle/bottle-common.webm"
            }
            type="video/webm"
          />
          Sorry, your browser doesn&apos;t support embedded videos.
        </video>
        {isMobile === true && (
          <DotLottieReact
            src={
              process.env.NODE_ENV === "production"
                ? "/amrutveni-landing-liceqit/lottie/liceqit/Lice-anime.json"
                : "/lottie/liceqit/Lice-anime.json"
            }
            loop
            autoplay
            segment={[250, 599]}
            className="absolute top-1/2 -translate-y-1/2 left-0 right-0 scale-[250%] sm:scale-100"
          />
        )}
        {isMobile === false && (
          <DotLottieReact
            src={
              process.env.NODE_ENV === "production"
                ? "/amrutveni-landing-liceqit/lottie/liceqit/Lice-anime.json"
                : "/lottie/liceqit/Lice-anime.json"
            }
            loop
            autoplay
            className="absolute top-1/2 -translate-y-1/2 left-0 right-0 sm:scale-100"
          />
        )}
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
              className="bg-white w-[90%] max-w-[1400px] h-auto max-h-[90%] flex flex-col items-center p-4 pb-8 rounded-3xl gap-4"
              ref={modalRef}
            >
              <div className="flex items-center justify-end w-full">
                <button
                  className="border border-liceqit-foreground group p-2 rounded-full self-end cursor-pointer relative after:absolute after:w-full after:h-full after:bg-liceqit-foreground after:left-0 after:rounded-full after:translate-y-[9px] hover:after:translate-y-[-28px] after:transition-transform after:duration-300 overflow-hidden"
                  onClick={() => setIsModalOpen(false)}
                >
                  <X className="text-liceqit-foreground w-5 h-5 group-hover:text-white relative z-10 transition-colors duration-300" />
                </button>
              </div>

              <div className="w-full h-full overflow-y-scroll flex flex-col gap-8 lg:px-8">
                <div className="flex flex-col gap-2 sm:gap-4">
                  <h1 className="font-medium sm:text-2xl">About LiceQit</h1>
                  <p className="text-sm text-justify sm:text-base text-liceqit-charcoal-grey">
                    Amrutveni Lice Qit is an innovative herbal solution
                    developed to combat lice infestations while supporting
                    overall hair and scalp health. This product is crafted using
                    advanced biotechnological techniques, ensuring both efficacy
                    and safety. The formula incorporates bioactive ingredients
                    derived from nature, creating a powerful lice treatment that
                    is free from harsh chemicals and pesticides, making it a
                    safe and gentle option for all age groups, including
                    children.
                  </p>
                </div>
                <div className="flex flex-col gap-2 sm:gap-4">
                  <h1 className="font-medium sm:text-2xl">
                    Herbal Composition
                  </h1>
                  <p className="text-sm text-justify sm:text-base text-liceqit-charcoal-grey">
                    Amrutveni Lice Qit combines a range of natural ingredients
                    known for their lice-fighting and nourishing properties,
                    including:
                  </p>
                  <div className="flex items-center flex-wrap gap-2 sm:grid sm:grid-cols-2 lg:grid-cols-3 mt-2">
                    {LICEQIT_DATA?.liceqit?.detailedInfo?.composition?.map(
                      (composition) => (
                        <div
                          className="w-full p-4 bg-liceqit-slide-background rounded-2xl flex flex-col gap-2"
                          key={`amrutveni-liceqit-composition-id-${composition?.id}`}
                        >
                          <h2 className="font-medium text-sm sm:text-base">
                            {composition?.heading}
                          </h2>
                          <p className="text-xs sm:text-sm text-liceqit-charcoal-grey text-justify">
                            {composition?.description}
                          </p>
                        </div>
                      )
                    )}
                  </div>
                </div>
                <div className="flex flex-col gap-2 sm:gap-4">
                  <h1 className="font-medium sm:text-2xl">Ingredients</h1>
                  <p className="text-sm text-justify sm:text-base text-liceqit-charcoal-grey">
                    Cocos Nucifera Oil, Oil Extract of Pongamia Pinnata,
                    Azadirachta Indica, Ricinus Communis, Thymus Vulgaris,
                    Illicium Verum, Andrographis Paniculata, Mentha Piperita,
                    Cinnamomum Camphora, BHT, Fragrance.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
