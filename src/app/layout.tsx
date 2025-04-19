import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const InterSans = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Amrutveni Products",
  description: "Single landing pages for Amrutveni products",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"
  ),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${InterSans.variable} antialiased bg-liceqit-background`}
      >
        {children}
      </body>
    </html>
  );
}
