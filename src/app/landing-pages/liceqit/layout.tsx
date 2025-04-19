import { Footer } from "@/features/liceqit/footer";
import { PreLoader } from "@/features/liceqit/loaders/preloader";
import { Navbar } from "@/features/liceqit/navbar";
import { BottomNavbar } from "@/features/liceqit/navbar/bottom-nav";
import { DataProvider } from "@/lib/utils/context/data-context";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Amrutveni LiceQit",
  description:
    "Amrutveni LiceQit is an advanced herbal hair care solution specifically formulated to combat lice infestations effectively. Using innovative biotechnological methods, it integrates powerful bioactive ingredients for lice-free, healthy hair.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section className="bg-liceqit-background text-liceqit-foreground min-h-[100vh]">
      <>
        <DataProvider>
          <div className="w-full max-w-[1620px] mx-auto">
            <Navbar />
            <BottomNavbar />
            {children}
            <Footer />
          </div>
          <PreLoader />
        </DataProvider>
      </>
    </section>
  );
}
