"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import Logo from "@/../public/logo/logo.svg";
import { BuyNowButton } from "@/features/liceqit/common/buynow-button";
import Link from "next/link";
import { Download, ExternalLink, Home, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { navbarVariant } from "@/lib/variants/liceqit";

export const Navbar = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isNavbarOpen &&
        modalRef.current &&
        event.target instanceof Node &&
        !modalRef.current.contains(event.target)
      ) {
        setIsNavbarOpen(false);
      }
    };

    if (isNavbarOpen) {
      document?.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document?.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isNavbarOpen]);

  return (
    <div className="fixed top-0 flex items-center justify-between h-[60px] w-full max-w-[1620px] z-50 px-4 desktop:px-12 bg-liceqit-background shadow-lg">
      <Link href={"/landing-pages/liceqit"}>
        <Image
          src={Logo}
          alt="Amrutveni Logo"
          className="w-[56px] desktop:w-[64px]"
        />
      </Link>
      <div className="flex items-center justify-center gap-1">
        <button
          className="text-xs border rounded-full px-4 h-[36px] cursor-pointer transition-colors duration-300 relative before:absolute before:w-full before:h-full before:bg-liceqit-primary before:left-0 before:translate-y-[26px] before:rounded-full hover:before:translate-y-[-9px] before:transition-transform before:duration-300 before:-z-0 hover:text-white hover:border-liceqit-primary overflow-hidden"
          onClick={() => setIsNavbarOpen((prev) => !prev)}
        >
          <p className="uppercase relative">menu</p>
        </button>
        <BuyNowButton message="buy now" className="hidden sm:flex" />
      </div>
      <AnimatePresence>
        {isNavbarOpen && (
          <motion.div
            variants={navbarVariant}
            initial="close"
            animate="open"
            exit="exit"
            transition={{
              ease: "easeInOut",
            }}
            className="w-full max-w-[250px] min-h-[100px] absolute top-0 right-[16px] desktop:right-[48px] bg-liceqit-background rounded-b-3xl flex flex-col p-4 pb-6 shadow-2xl z-50"
            ref={modalRef}
          >
            <div className="flex flex-col gap-4 mt-12">
              <Link href={"#"} className="flex items-center gap-2 w-fit group">
                <Home
                  size={16}
                  className="text-liceqit-charcoal-grey group-hover:text-black"
                />
                <p className="relative after:absolute after:bg-black after:bottom-0 after:left-0 after:right-0 after:h-[1.5px] after:rounded-full after:origin-[100%_100%] after:scale-x-0 group-hover:after:origin-[0%_0%] group-hover:after:scale-x-100 after:transition-transform after:duration-300">
                  Home
                </p>
              </Link>
              <Link href={"#"} className="flex items-center gap-2 w-fit group">
                <Download
                  size={16}
                  className="text-liceqit-charcoal-grey group-hover:text-black"
                />
                <p className="relative after:absolute after:bg-black after:bottom-0 after:left-0 after:right-0 after:h-[1.5px] after:rounded-full after:origin-[100%_100%] after:scale-x-0 group-hover:after:origin-[0%_0%] group-hover:after:scale-x-100 after:transition-transform after:duration-300">
                  Download Pamphlet
                </p>
              </Link>
              <Link href={"#"} className="flex items-center gap-2 w-fit group">
                <ExternalLink
                  size={16}
                  className="text-liceqit-charcoal-grey group-hover:text-black"
                />
                <p className="relative after:absolute after:bg-black after:bottom-0 after:left-0 after:right-0 after:h-[1.5px] after:rounded-full after:origin-[100%_100%] after:scale-x-0 group-hover:after:origin-[0%_0%] group-hover:after:scale-x-100 after:transition-transform after:duration-300">
                  Other Products
                </p>
              </Link>
            </div>
            <div className="w-full h-px border-t border-dashed border-gray-400 my-4"></div>
            <button
              className="self-center mt-4 border rounded-full p-2 group relative after:absolute after:w-full after:h-full after:bg-liceqit-primary after:rounded-full after:left-0 after:transition-transform after:duration-300 after:translate-y-[9px] hover:after:translate-y-[-44px] after:-z-10 transition-colors duration-300 hover:border-liceqit-primary overflow-hidden cursor-pointer"
              onClick={() => setIsNavbarOpen(false)}
            >
              <X className="w-[36px] h-[36px] group-hover:text-white transition-colors duration-300 relative" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
