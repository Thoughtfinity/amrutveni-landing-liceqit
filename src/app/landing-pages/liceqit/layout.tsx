import { Footer } from "@/features/liceqit/footer";
import { Navbar } from "@/features/liceqit/navbar";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section className="bg-liceqit-background text-liceqit-foreground min-h-screen">
      <div className="w-full max-w-[1620px] mx-auto">
        <Navbar />
        {children}
        <Footer />
      </div>
    </section>
  );
}
