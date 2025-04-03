import { RefObject } from "react";

export interface Reel {
  id: number;
  thumbnail: string;
  video: string;
  description: string;
  tags: string;
}

export interface DataContextType {
  isInView: boolean;
  heroRef: RefObject<HTMLDivElement | null>;
  footerRef: RefObject<HTMLDivElement | null>;
}
