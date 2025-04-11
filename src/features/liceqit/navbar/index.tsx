"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import Logo from "@/../public/logo/logo.svg";
import { BuyNowButton } from "@/features/liceqit/common/buynow-button";
import Link from "next/link";
import { Download, ExternalLink, Home, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { navbarVariants } from "@/lib/variants/liceqit";

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

  const downloadHandler = () => {
    const link = document.createElement("a");

    link.href = "/pamphlets/liceqit/liceqit-pamphlet.pdf";

    link.download = "liceqit-pamphlet.pdf";

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);

    setIsNavbarOpen(false);
  };

  return (
    <div className="fixed top-0 flex items-center justify-between h-[60px] w-[calc(100%-32px)] desktop:w-[calc(100%-96px)] max-w-[1524px] z-50 mx-4 px-4 desktop:mx-12 bg-liceqit-background shadow-lg rounded-full mt-2">
      <button onClick={() => scrollTo(0, 0)} className="cursor-pointer">
        <Image
          src={Logo}
          alt="Amrutveni Logo"
          className="w-[56px] desktop:w-[64px]"
        />
      </button>
      <div className="flex items-center justify-center gap-1">
        <button
          className="text-xs border rounded-full px-4 h-[36px] cursor-pointer transition-colors duration-300 relative before:absolute before:w-full before:h-full before:bg-liceqit-foreground before:left-0 before:translate-y-[26px] before:rounded-full hover:before:translate-y-[-9px] before:transition-transform before:duration-300 before:-z-0 hover:text-white hover:border-liceqit-primary overflow-hidden"
          onClick={() => setIsNavbarOpen((prev) => !prev)}
        >
          <p className="uppercase relative">menu</p>
        </button>
        <BuyNowButton message="buy now" className="hidden sm:flex" />
      </div>
      <AnimatePresence>
        {isNavbarOpen && (
          <motion.div
            variants={navbarVariants}
            initial="close"
            animate="open"
            exit="exit"
            transition={{
              ease: "easeInOut",
            }}
            className="w-full max-w-[250px] min-h-[100px] absolute top-[-8px] right-0 bg-liceqit-background rounded-b-3xl flex flex-col p-4 pb-6 shadow-2xl z-50"
            ref={modalRef}
          >
            <div className="flex flex-col gap-4 mt-12">
              <Link
                href={"https://amrutveni.com"}
                className="flex items-center gap-2 w-fit group"
              >
                <Home
                  size={16}
                  className="text-liceqit-charcoal-grey group-hover:text-liceqit-foreground"
                />
                <p className="relative after:absolute after:bg-liceqit-foreground after:bottom-0 after:left-0 after:right-0 after:h-[1.5px] after:rounded-full after:origin-[100%_100%] after:scale-x-0 group-hover:after:origin-[0%_0%] group-hover:after:scale-x-100 after:transition-transform after:duration-300">
                  Home
                </p>
              </Link>
              <button
                // href={"/pamphlets/liceqit/liceqit-pamphlet.pdf"}
                onClick={downloadHandler}
                className="flex items-center gap-2 w-fit group"
              >
                <Download
                  size={16}
                  className="text-liceqit-charcoal-grey group-hover:text-liceqit-foreground"
                />
                <p className="relative after:absolute after:bg-liceqit-foreground after:bottom-0 after:left-0 after:right-0 after:h-[1.5px] after:rounded-full after:origin-[100%_100%] after:scale-x-0 group-hover:after:origin-[0%_0%] group-hover:after:scale-x-100 after:transition-transform after:duration-300">
                  Download Pamphlet
                </p>
              </button>
              <Link
                href={"https://amrutveni.com/products"}
                className="flex items-center gap-2 w-fit group"
              >
                <ExternalLink
                  size={16}
                  className="text-liceqit-charcoal-grey group-hover:text-liceqit-foreground"
                />
                <p className="relative after:absolute after:bg-liceqit-foreground after:bottom-0 after:left-0 after:right-0 after:h-[1.5px] after:rounded-full after:origin-[100%_100%] after:scale-x-0 group-hover:after:origin-[0%_0%] group-hover:after:scale-x-100 after:transition-transform after:duration-300">
                  Other Products
                </p>
              </Link>
            </div>
            <div className="w-full h-px border-t border-dashed border-gray-400 my-4"></div>
            <button
              className="self-center mt-4 border rounded-full p-2 group relative after:absolute after:w-full after:h-full after:bg-liceqit-foreground after:rounded-full after:left-0 after:transition-transform after:duration-300 after:translate-y-[9px] hover:after:translate-y-[-44px] after:-z-10 transition-colors duration-300 hover:border-liceqit-primary overflow-hidden cursor-pointer"
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
