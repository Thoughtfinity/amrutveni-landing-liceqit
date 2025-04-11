"use client";

import React, { ReactNode } from "react";
import { motion } from "motion/react";
import { imageRevealVariants } from "@/lib/variants/liceqit";

export const ImageRevealer = ({
  children,
  className,
  duration = 0.7,
  delay = 0.1,
  revealerClassName,
}: {
  children: ReactNode;
  className?: string;
  duration?: number;
  delay?: number;
  revealerClassName?: string;
}) => {
  return (
    <motion.div className={`relative ${className} overflow-hidden`}>
      {children}
      <motion.div
        variants={imageRevealVariants}
        initial="initial"
        whileInView="animate"
        transition={{
          ease: [0.645, 0.045, 0.355, 1],
          duration: duration,
          delay: delay,
        }}
        viewport={{ once: true, amount: 0.5 }}
        className={`absolute w-full h-full backdrop-blur-xl bottom-0 left-0 ${revealerClassName}`}
      />
    </motion.div>
  );
};
