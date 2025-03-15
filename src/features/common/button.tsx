import classNames from "classnames";
import React from "react";

export const Button = ({
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
        "rounded-[10px] px-4 py-2 text-sm font-medium cursor-pointer": true,
        [`${className}`]: className,
        "bg-black text-white": !className,
      })}
      onClick={handleClick}
      {...props}
    >
      <p>{message}</p>
    </button>
  );
};
