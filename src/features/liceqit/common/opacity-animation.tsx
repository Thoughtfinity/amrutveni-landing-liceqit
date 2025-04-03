"use client";

import React, { ReactNode } from "react";
import { motion } from "motion/react";

const opacityAnimation = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
  },
};

export const OpacityAnimator = ({
  children,
  className,
  duration = 1,
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
      variants={opacityAnimation}
      initial="hidden"
      whileInView="show"
      transition={{
        duration: duration,
        delay: delay,
      }}
      viewport={{ amount: viewport, once: true }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
