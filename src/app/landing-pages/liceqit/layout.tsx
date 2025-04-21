import { Footer } from "@/features/liceqit/footer";
import { Navbar } from "@/features/liceqit/navbar";
import { BottomNavbar } from "@/features/liceqit/navbar/bottom-nav";
import { DataProvider } from "@/lib/utils/context/data-context";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "LiceQit - Biotech Solution For Lice Control",
  description:
    "Usage Instructions: Take a sufficient quantity of Amrutveni  LiceQit and apply it to the scalp till the tip of the hair Gently massage, and leave it on for 30 minutes. Comb the hair with Lice comb available in the packet. Wash the hair with only very soft shampoo preferably Amrutveni hair cleansing nectar junior Use every other day for three days.",
  keywords:
    "Lice control solution, Biotech lice treatment, Natural lice control, AMRUTVENI LICE QIT, Effective lice removal, Biotech lice remedy, Organic lice treatment, Lice prevention solution, Safe lice treatment, Lice control biotech, Non-toxic lice solution, Lice treatment for kids, Best lice control product, Chemical-free lice treatment, Lice care solution.",
  openGraph: {
    images: [
      {
        url: "https://amrutveni.sgp1.digitaloceanspaces.com/amrutveni_production/media/LiceQit_50ml_8a6e8d6d.jpg",
        width: 650,
        height: 850,
      },
      {
        url: "https://amrutveni.sgp1.digitaloceanspaces.com/amrutveni_production/media/WhatsApp_Image_2024-09-23_at_10.35.15_AM_1_4ada4caf.jpeg",
        width: 650,
        height: 850,
      },
    ],
  },
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
        </DataProvider>
      </>
    </section>
  );
}
