"use client";

import React from "react";
import { useEffect } from "react";
import gsap from "gsap";
import { CustomEase } from "gsap/all";
import Logo from "@/../public/logo/logo.svg";
import Image from "next/image";

export const PreLoader: React.FC = () => {
  gsap.registerPlugin(CustomEase);

  useEffect(() => {
    const onPageLoad = () => {
      const tl = gsap.timeline();

      tl.to(".preloader", {
        opacity: 0,
        duration: 1,
        ease: "power4.inOut",
        display: "none",
      })
        .fromTo(
          ".hero-header",
          { top: "100%" },
          {
            top: 0,
            duration: 0.95,
            ease: CustomEase.create("custom", "0.645,0.045,0.355,1"),
          },
          "-=0.6"
        )
        .fromTo(".hero-sub-content", { opacity: 0 }, { opacity: 1 });
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
    </div>
  );
};
