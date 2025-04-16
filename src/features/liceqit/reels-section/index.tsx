"use client";

import React, { useRef, useEffect, useState } from "react";
import { AnimatePresence, motion, useAnimationControls } from "framer-motion";
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
  const controls = useAnimationControls();
  const [containerWidth, setContainerWidth] = useState<number>(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState<string>("");

  const totalItemsWidth =
    LICEQIT_DATA?.liceqit?.reels?.length * (itemWidth + gap);

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

          {duplicateSets.map((item: Reel, index) => (
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

// "use client";

// import React, { useRef, useEffect, useState } from "react";
// import LICEQIT_DATA from "@/lib/constants/liceqit/liceqit.json";
// import { Reel } from "@/lib/types/liceqit";
// import Image from "next/image";
// import Logo from "@/../public/logo/logo-white.svg";
// import Link from "next/link";
// import { X } from "lucide-react";
// import { OpacityAnimator } from "../common/opacity-animation";
// import { motion, AnimatePresence } from "motion/react";
// import { modalContainerVariants, modalVariants } from "@/lib/variants/liceqit";

// export const ReelsSection = () => {
//   const modalRef = useRef<HTMLDivElement>(null);
//   const scrollContainerRef = useRef<HTMLDivElement>(null);
//   const scrollbarRef = useRef<HTMLDivElement>(null);
//   const scrollThumbRef = useRef<HTMLDivElement>(null);
//   const animationFrameRef = useRef<number | null>(null);
//   const lastScrollLeftRef = useRef<number>(0);
//   const isTouchDeviceRef = useRef<boolean>(false);

//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [videoUrl, setVideoUrl] = useState<string>("");
//   const [showScrollbar, setShowScrollbar] = useState(true);
//   const [thumbWidth, setThumbWidth] = useState(128);

//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       isTouchDeviceRef.current =
//         "ontouchstart" in window ||
//         navigator.maxTouchPoints > 0 ||
//         (navigator as any).msMaxTouchPoints > 0;
//     }
//   }, []);

//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (
//         isModalOpen &&
//         modalRef.current &&
//         event.target instanceof Node &&
//         !modalRef.current.contains(event.target)
//       ) {
//         setIsModalOpen(false);
//       }
//     };

//     if (isModalOpen) {
//       document?.addEventListener("mousedown", handleClickOutside);
//     }

//     return () => {
//       document?.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, [isModalOpen]);

//   useEffect(() => {
//     const scrollContainer = scrollContainerRef.current;
//     const scrollbar = scrollbarRef.current;
//     const scrollThumb = scrollThumbRef.current;

//     if (!scrollContainer || !scrollbar || !scrollThumb) return;

//     const checkIfAllContentVisible = () => {
//       if (scrollContainer) {
//         const isAllVisible =
//           scrollContainer.scrollWidth <= scrollContainer.clientWidth;
//         setShowScrollbar(!isAllVisible);
//       }
//     };

//     const calculateThumbWidth = () => {
//       if (scrollContainer) {
//         const scrollRatio =
//           scrollContainer.clientWidth / scrollContainer.scrollWidth;
//         const scrollbarWidth = scrollbar.clientWidth;
//         const newThumbWidth = Math.max(24, scrollRatio * scrollbarWidth);
//         setThumbWidth(newThumbWidth);
//       }
//     };

//     const updateScrollbarPosition = () => {
//       if (!scrollContainer || !scrollbar || !scrollThumb) return;

//       const scrollLeft = scrollContainer.scrollLeft;
//       lastScrollLeftRef.current = scrollLeft;

//       const scrollRatio =
//         scrollLeft /
//         (scrollContainer.scrollWidth - scrollContainer.clientWidth);
//       const maxThumbPosition = scrollbar.clientWidth - thumbWidth;
//       const thumbPosition = Math.max(
//         0,
//         Math.min(maxThumbPosition, scrollRatio * maxThumbPosition)
//       );

//       if (isTouchDeviceRef.current) {
//         scrollThumb.style.transition = "none";
//         scrollThumb.style.transform = `translateX(${thumbPosition}px)`;
//       } else {
//         scrollThumb.style.transition = "transform 0.05s ease-out";
//         scrollThumb.style.transform = `translateX(${thumbPosition}px)`;
//       }
//     };

//     const animateScrollThumb = () => {
//       updateScrollbarPosition();
//       animationFrameRef.current = requestAnimationFrame(animateScrollThumb);
//     };

//     animateScrollThumb();

//     const handleResize = () => {
//       calculateThumbWidth();
//       checkIfAllContentVisible();
//     };

//     calculateThumbWidth();
//     checkIfAllContentVisible();

//     window.addEventListener("resize", handleResize);

//     return () => {
//       if (animationFrameRef.current !== null) {
//         cancelAnimationFrame(animationFrameRef.current);
//       }
//       window.removeEventListener("resize", handleResize);
//     };
//   }, [thumbWidth]);

//   const openReelModal = (reel: Reel) => {
//     setIsModalOpen(true);
//     setVideoUrl(reel?.video);
//   };

//   return (
//     <>
//       <OpacityAnimator viewport={0.5}>
//         <div className="flex flex-col gap-8">
//           <div
//             ref={scrollContainerRef}
//             className="w-full flex gap-4 overflow-x-scroll px-8 scrollbar-hide"
//             style={{ WebkitOverflowScrolling: "touch" }}
//           >
//             {LICEQIT_DATA?.liceqit?.reels?.map((item: Reel, index) => (
//               <motion.div
//                 layout
//                 key={`amrutveni-liceqit-reel-id-${index}-original`}
//                 className="flex-shrink-0 rounded-4xl overflow-hidden cursor-pointer w-full h-full max-w-[160px] max-h-[240px] md:max-w-[240px] md:max-h-[332px]"
//                 onClick={() => openReelModal(item)}
//               >
//                 <div>
//                   <video
//                     className="w-full h-full"
//                     loop={true}
//                     controls={false}
//                     autoPlay={true}
//                     muted={true}
//                     playsInline={true}
//                   >
//                     <source
//                       src={
//                         process.env.NODE_ENV === "production"
//                           ? `/amrutveni-landing-liceqit${item?.thumbnail}`
//                           : item?.thumbnail
//                       }
//                       type="video/webm"
//                     />
//                     Sorry, your browser doesn&apos;t support embedded videos.
//                   </video>
//                 </div>
//               </motion.div>
//             ))}
//           </div>

//           {showScrollbar && (
//             <div className="px-4 desktop:px-12">
//               <div
//                 ref={scrollbarRef}
//                 className="h-1 w-full bg-gray-200 rounded-full relative"
//               >
//                 <div
//                   ref={scrollThumbRef}
//                   className="absolute h-full bg-gray-500 rounded-full"
//                   style={{
//                     width: `${thumbWidth}px`,
//                     willChange: "transform",
//                   }}
//                 />
//               </div>
//             </div>
//           )}
//         </div>
//       </OpacityAnimator>

//       <AnimatePresence>
//         {isModalOpen && (
//           <motion.div
//             variants={modalContainerVariants}
//             initial="hidden"
//             animate="visible"
//             exit="hidden"
//             className="fixed top-0 left-0 bg-black/30 w-screen h-screen z-[999] flex items-center justify-center"
//           >
//             <motion.div
//               variants={modalVariants}
//               initial="hidden"
//               animate="visible"
//               exit="exit"
//               className="bg-white w-auto max-w-[90%] h-auto flex flex-col items-center px-4 pb-4 pt-4 rounded-3xl gap-4"
//               ref={modalRef}
//             >
//               <button
//                 className="border border-liceqit-foreground group p-2 rounded-full self-end cursor-pointer relative after:absolute after:w-full after:h-full after:bg-liceqit-foreground after:left-0 after:rounded-full after:translate-y-[9px] hover:after:translate-y-[-28px] after:transition-transform after:duration-300 overflow-hidden"
//                 onClick={() => setIsModalOpen(false)}
//               >
//                 <X className="w-5 h-5 group-hover:text-white transition-colors duration-300 relative z-10" />
//               </button>
//               <div className="flex flex-col gap-2">
//                 <div className="flex items-center justify-between w-full pr-2 gap-2">
//                   <div className="flex items-center gap-3">
//                     <div className="bg-liceqit-primary min-w-10 min-h-10 rounded-full flex items-center justify-center">
//                       <Image src={Logo} alt="logo" className="w-6" />
//                     </div>
//                     <p className="font-medium">amrutveni</p>
//                   </div>
//                   <div>
//                     <Link
//                       href={"https://www.instagram.com/amrutveni/"}
//                       className="font-semibold text-[#0095f6] text-sm"
//                       target="_blank"
//                     >
//                       Follow
//                     </Link>
//                   </div>
//                 </div>
//                 <motion.video
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   transition={{ delay: 0.3 }}
//                   className="rounded-xl h-auto max-h-[calc(100vh-240px)]"
//                   autoPlay={true}
//                   loop={true}
//                   controls={true}
//                   playsInline={true}
//                 >
//                   <source
//                     src={
//                       process.env.NODE_ENV === "production"
//                         ? `/amrutveni-landing-liceqit${videoUrl}`
//                         : videoUrl
//                     }
//                     type="video/mp4"
//                   />
//                   Sorry, your browser doesn&apos;t support embedded videos.
//                 </motion.video>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// };
