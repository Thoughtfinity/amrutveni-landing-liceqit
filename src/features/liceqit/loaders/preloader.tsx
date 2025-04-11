"use client";

import React from "react";
import { useEffect } from "react";
import gsap from "gsap";
import { CustomEase } from "gsap/all";
import Logo from "@/../public/logo/logo.svg";
import Image from "next/image";
import { useDataContext } from "@/lib/utils/context/useDataContext";
import { motion } from "motion/react";
import { dotVariants } from "@/lib/variants/liceqit";

export const PreLoader: React.FC = () => {
  gsap.registerPlugin(CustomEase);

  const { setIsPageLoaded } = useDataContext();

  useEffect(() => {
    const onPageLoad = () => {
      const tl = gsap.timeline();

      tl.to(".preloader", {
        opacity: 0,
        duration: 1,
        ease: "power4.inOut",
        display: "none",
        onComplete: () => setIsPageLoaded(true),
      });
    };

    if (document.readyState === "complete") {
      onPageLoad();
    } else {
      window.addEventListener("load", onPageLoad, false);
      return () => window.removeEventListener("load", onPageLoad);
    }
  }, []);

  return (
    <div
      className="preloader"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        background: "#ffffff",
        zIndex: 9999,
        display: "grid",
        placeContent: "center",
      }}
    >
      <Image src={Logo} alt="Logo" className="w-36" />
      <motion.div className="flex items-center justify-center gap-3 mt-8">
        <motion.div
          variants={dotVariants}
          animate="animate"
          transition={{
            duration: 1.2,
            repeat: Infinity,
            ease: "easeInOut",
            times: [0, 0.5, 1],
          }}
          className="w-2 h-2 bg-liceqit-primary rounded-full"
        ></motion.div>

        <motion.div
          variants={dotVariants}
          animate="animate"
          transition={{
            duration: 1.2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.2,
            times: [0, 0.5, 1],
          }}
          className="w-2 h-2 bg-liceqit-primary rounded-full"
        ></motion.div>

        <motion.div
          variants={dotVariants}
          animate="animate"
          transition={{
            duration: 1.2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.4,
            times: [0, 0.5, 1],
          }}
          className="w-2 h-2 bg-liceqit-primary rounded-full"
        ></motion.div>
      </motion.div>
    </div>
  );
};
