"use client";

import React, { ReactNode } from "react";
import { motion } from "motion/react";
import { slideUpVariants } from "@/lib/variants/liceqit";

export const SlideUpAnimator = ({
  children,
  className,
  duration = 1.5,
  delay = 0.1,
  viewport = 0.8,
}: {
  children: ReactNode;
  className?: string;
  duration?: number;
  delay?: number;
  viewport?: number;
}) => {
  return (
    <motion.div
      variants={slideUpVariants}
      initial="initial"
      whileInView="animate"
      transition={{
        type: "spring",
        duration: duration,
        bounce: 0,
        delay: delay,
      }}
      viewport={{ amount: viewport, once: true }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
