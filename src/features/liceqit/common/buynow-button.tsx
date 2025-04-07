"use client";

import classNames from "classnames";
import { ArrowRight } from "lucide-react";
import React from "react";

export const BuyNowButton = ({
  message,
  handleClick,
  className,
  showIcon = true,
  ...props
}: {
  message: string;
  handleClick?: () => void;
  className?: string;
  showIcon?: boolean;
}) => {
  return (
    <button
      className={classNames({
        "text-xs rounded-full px-4 h-[36px] cursor-pointer flex items-center justify-center gap-1 uppercase relative transition-colors duration-300 bg-liceqit-foreground text-white border border-transparent sm:border-liceqit-foreground sm:bg-transparent sm:text-liceqit-foreground before:absolute before:w-full before:h-full before:bg-liceqit-foreground before:-translate-x-full before:rounded-full hover:before:translate-x-0 before:transition-transform before:duration-300 hover:border-liceqit-foreground hover:text-white before:-z-0 overflow-hidden":
          true,
        [`${className}`]: className,
      })}
      onClick={handleClick}
      {...props}
    >
      <p className="z-10">{message}</p>
      {showIcon && <ArrowRight className="w-4 z-10" />}
    </button>
  );
};
