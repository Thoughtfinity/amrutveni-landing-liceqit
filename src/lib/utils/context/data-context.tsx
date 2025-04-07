"use client";

import { DataContextType } from "@/lib/types/liceqit";
import { useInView } from "motion/react";
import React, {
  createContext,
  useState,
  ReactNode,
  useRef,
  useEffect,
} from "react";

export const DataContext = createContext<DataContextType | undefined>(
  undefined
);

export const DataProvider = ({ children }: { children: ReactNode }) => {
  const [isInView, setIsInView] = useState<boolean>(true);
  const [isPageLoaded, setIsPageLoaded] = useState<boolean>(false);
  const heroRef = useRef<HTMLDivElement | null>(null);
  const footerRef = useRef<HTMLDivElement | null>(null);

  const isHeroInView = useInView(heroRef, { amount: 0.2 });
  const isFooterInView = useInView(footerRef);

  useEffect(() => {
    if (isHeroInView || isFooterInView) {
      setIsInView(true);
    } else {
      setIsInView(false);
    }
  }, [isHeroInView, isFooterInView]);

  return (
    <DataContext.Provider
      value={{
        isInView,
        heroRef,
        footerRef,
        isPageLoaded,
        setIsPageLoaded,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
