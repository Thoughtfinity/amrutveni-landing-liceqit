import Image from "next/image";
import React from "react";
import Logo from "@/../public/logo/logo.svg";
import { DownloadButton } from "@/features/common/download-button";
import { Button } from "@/features/common/button";
import Link from "next/link";

export const Navbar = () => {
  return (
    <div className="fixed top-0 flex items-center justify-between h-[60px] w-full max-w-[1620px] px-4 desktop:px-16 z-50 bg-liceqit-background">
      <Link href={"/landing-pages/liceqit"}>
        <Image
          src={Logo}
          alt="Amrutveni Logo"
          className="w-[56px] desktop:w-[72px]"
        />
      </Link>
      <div className="flex items-center justify-center gap-2">
        <DownloadButton
          message="Manual"
          className="border border-liceqit-primary"
          iconColor="#032713"
        />
        <Button
          message="Buy Now"
          className="hidden sm:block bg-liceqit-primary text-white"
        />
      </div>
    </div>
  );
};
