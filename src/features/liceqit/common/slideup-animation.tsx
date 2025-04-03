"use client";

import React, { ReactNode } from "react";
import { motion } from "motion/react";
import { slideUpVariant } from "@/lib/variants/liceqit";

export const SlideUpAnimator = ({
  children,
  className,
  duration = 1.5,
  delay = 0.1,
}: {
  children: ReactNode;
  className?: string;
  duration?: number;
  delay?: number;
}) => {
  return (
    <motion.div
      variants={slideUpVariant}
      initial="initial"
      whileInView="animate"
      transition={{
        type: "spring",
        duration: duration,
        bounce: 0,
        delay: delay,
      }}
      viewport={{ amount: 0.8, once: true }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
