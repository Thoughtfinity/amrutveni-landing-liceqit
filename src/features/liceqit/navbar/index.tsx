"use client";

import Image from "next/image";
import React, { useState } from "react";
import Logo from "@/../public/logo/logo.svg";
import { BuyNowButton } from "@/features/common/buynow-button";
import Link from "next/link";
import { Download, ExternalLink, Home, X } from "lucide-react";

export const Navbar = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

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
          className="text-xs border rounded-full px-4 h-[36px] transition-colors duration-300 relative before:absolute before:w-full before:h-full before:bg-liceqit-primary before:left-0 before:translate-y-[26px] before:rounded-full hover:before:translate-y-[-9px] before:transition-transform before:duration-300 before:-z-0 hover:text-white hover:border-liceqit-primary overflow-hidden"
          onClick={() => setIsNavbarOpen((prev) => !prev)}
        >
          <p className="uppercase relative">menu</p>
        </button>
        <BuyNowButton message="buy now" className="hidden sm:flex" />
      </div>
      {isNavbarOpen && (
        <div className="w-full max-w-[250px] min-h-[100px] absolute top-0 right-[16px] desktop:right-[48px] bg-liceqit-background rounded-b-3xl flex flex-col p-4 pb-6 shadow-2xl z-50">
          <div className="flex flex-col gap-4 mt-12">
            <Link href={"#"} className="flex items-center gap-2">
              <Home size={16} className="text-liceqit-charcoal-grey" />
              <p>Home</p>
            </Link>
            <Link href={"#"} className="flex items-center gap-2">
              <Download size={16} className="text-liceqit-charcoal-grey" />
              <p>Download Pamphlet</p>
            </Link>
            <Link href={"#"} className="flex items-center gap-2">
              <ExternalLink size={16} className="text-liceqit-charcoal-grey" />
              <p>Other Products</p>
            </Link>
          </div>
          <div className="w-full h-px border-t border-dashed border-gray-400 my-4"></div>
          <button
            className="self-center mt-4 border rounded-full p-2"
            onClick={() => setIsNavbarOpen(false)}
          >
            <X className="w-[36px] h-[36px]" />
          </button>
        </div>
      )}
    </div>
  );
};
