import { Dispatch, RefObject, SetStateAction } from "react";

export interface Reel {
  id: number;
  thumbnail: string;
  video: string;
}

export interface DataContextType {
  isInView: boolean;
  heroRef: RefObject<HTMLDivElement | null>;
  footerRef: RefObject<HTMLDivElement | null>;
  isPageLoaded: boolean;
  setIsPageLoaded: Dispatch<SetStateAction<boolean>>;
}
