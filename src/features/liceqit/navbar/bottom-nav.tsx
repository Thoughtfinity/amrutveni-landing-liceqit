"use client";

import React from "react";
import LICEQIT_DATA from "@/lib/constants/liceqit/liceqit.json";
import { useDataContext } from "@/lib/utils/context/useDataContext";
import { motion, AnimatePresence } from "motion/react";
import { bottomNavVariants } from "@/lib/variants/liceqit";

export const BottomNavbar = () => {
  const { isInView } = useDataContext();

  return (
    <AnimatePresence>
      {!isInView && (
        <motion.button
          variants={bottomNavVariants}
          initial="hidden"
          animate="inView"
          exit="exit"
          className="fixed sm:hidden bottom-[10px] left-1/2 -translate-x-1/2 w-[calc(100%-32px)] mx-auto h-[60px] z-50 rounded-full flex items-center justify-center bg-liceqit-foreground"
        >
          <p className="text-white font-semibold">
            Buy LiceQit at ₹{LICEQIT_DATA?.liceqit?.basic?.price}
          </p>
        </motion.button>
      )}
    </AnimatePresence>
  );
};
