"use client";

import classNames from "classnames";
import { ArrowRight } from "lucide-react";
import React from "react";

export const BuyNowButton = ({
  message,
  handleClick,
  className,
  ...props
}: {
  message: string;
  handleClick?: () => void;
  className?: string;
}) => {
  return (
    <button
      className={classNames({
        "text-xs rounded-full px-4 h-[36px] flex items-center justify-center gap-1 uppercase relative transition-colors duration-300 bg-liceqit-primary text-white border border-transparent sm:border-black sm:bg-transparent sm:text-black before:absolute before:w-full before:h-full before:bg-liceqit-primary before:-translate-x-full before:rounded-full hover:before:translate-x-0 before:transition-transform before:duration-300 hover:border-liceqit-primary hover:text-white before:-z-0 overflow-hidden":
          true,
        [`${className}`]: className,
      })}
      onClick={handleClick}
      {...props}
    >
      <p className="z-10">{message}</p>
      <ArrowRight className="w-4 z-10" />
    </button>
  );
};
