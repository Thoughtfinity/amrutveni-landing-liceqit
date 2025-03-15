import React from "react";
import { CustomerReviewsSection } from "@/features/liceqit/customer-reviews-section";
import { ReelsSection } from "@/features/liceqit/reels-section";
import { FaqSection } from "@/features/liceqit/faq-section";
import { HeroSection } from "@/features/liceqit/hero-section";
import { HowItWorksSection } from "@/features/liceqit/how-it-works-section";
import { FeaturesSection } from "@/features/liceqit/features-section";
import { HowToUseSection } from "@/features/liceqit/how-to-use-section";
import { BenefitsSection } from "@/features/liceqit/benefits-section";
import { AchievementSection } from "@/features/liceqit/achievement-section";

export default function LiceQit() {
  return (
    <div className="pt-[60px] flex flex-col gap-24">
      <HeroSection />
      <HowItWorksSection />
      <FeaturesSection />
      <HowToUseSection />
      <BenefitsSection />
      <AchievementSection />
      <CustomerReviewsSection />
      <ReelsSection />
      <FaqSection />
    </div>
  );
}
