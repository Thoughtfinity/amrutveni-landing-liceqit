import React from "react";

export const AchievementSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center text-center gap-14 desktop:gap-[124px] px-4 desktop:px-16 my-32">
      <div className="flex flex-col gap-2 desktop:gap-4">
        <h1 className="text-[56px] font-medium md:text-7xl">100k+</h1>
        <p className="text-sm desktop:text-lg font-medium text-liceqit-charcoal-grey">
          Products Sold
        </p>
      </div>
      <div className="flex flex-col gap-2 desktop:gap-4">
        <h1 className="text-[56px] font-medium md:text-7xl">99k+</h1>
        <p className="text-sm desktop:text-lg font-medium text-liceqit-charcoal-grey">
          Happy Customers
        </p>
      </div>
      <div className="flex flex-col gap-2 desktop:gap-4">
        <h1 className="text-[56px] font-medium md:text-7xl">100k+</h1>
        <p className="text-sm desktop:text-lg font-medium text-liceqit-charcoal-grey">
          Repeat Order
        </p>
      </div>
    </div>
  );
};
