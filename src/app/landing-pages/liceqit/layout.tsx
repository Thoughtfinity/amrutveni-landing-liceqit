import { Footer } from "@/features/liceqit/footer";
import { PreLoader } from "@/features/liceqit/loaders/preloader";
import { Navbar } from "@/features/liceqit/navbar";
import { BottomNavbar } from "@/features/liceqit/navbar/bottom-nav";
import { DataProvider } from "@/lib/utils/context/data-context";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section className="bg-liceqit-background text-liceqit-foreground min-h-screen">
      <div className="w-full max-w-[1620px] mx-auto">
        <DataProvider>
          <Navbar />
          <BottomNavbar />
          {children}
          <Footer />
        </DataProvider>
      </div>
      <PreLoader />
    </section>
  );
}
