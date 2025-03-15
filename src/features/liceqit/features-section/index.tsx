import React from "react";
import Marquee from "react-fast-marquee";
import { Rabbit, Heart, WheatOff, Flower, LucideIcon } from "lucide-react";
import LICEQIT_DATA from "@/lib/constants/liceqit/liceqit.json";

export const FeaturesSection = () => {
  const IconMap: Record<string, LucideIcon> = {
    Rabbit: Rabbit,
    Heart: Heart,
    WheatOff: WheatOff,
    Flower: Flower,
  };

  const getIconComponent = (iconName: string) => {
    const IconComponent = IconMap[iconName] || Rabbit;
    return <IconComponent color="white" size={24} />;
  };

  return (
    <Marquee className="bg-liceqit-primary" autoFill>
      {LICEQIT_DATA?.liceqit?.features?.map((feature) => (
        <div
          className="flex flex-col gap-2 items-center justify-center py-6 px-8"
          key={`amrutveni-liceqit-feature-id-${feature?.id}`}
        >
          {getIconComponent(feature?.image)}
          <p className="text-white text-sm">{feature?.description}</p>
        </div>
      ))}
    </Marquee>
  );
};
