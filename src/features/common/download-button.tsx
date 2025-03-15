import classNames from "classnames";
import { Download } from "lucide-react";
import React from "react";

export const DownloadButton = ({
  message,
  handleClick,
  className,
  iconSize = 16,
  iconColor = "#fff",
  ...props
}: {
  message: string;
  handleClick?: () => void;
  className?: string;
  iconSize?: number;
  iconColor?: string;
}) => {
  return (
    <button
      className={classNames({
        "flex items-center justify-center gap-1 rounded-[10px] px-4 py-2 cursor-pointer":
          true,
        [`${className}`]: className,
      })}
      onClick={handleClick}
      {...props}
    >
      <Download size={iconSize} color={iconColor} />
      <p className="text-sm font-medium">{message}</p>
    </button>
  );
};
