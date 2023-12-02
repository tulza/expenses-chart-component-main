import React from "react";

const MonthSummary = () => {
  return (
    <div className="grid grid-cols-2 py-4">
      <p className="flex flex-col leading-[2rem]">
        <span className="text-mediumBrown">Total this month</span>
        <span className="font-bold text-[48px] leading-0">$478.33</span>
      </p>
      <p className="flex flex-col items-end justify-end leading-[1rem]">
        <span className="font-bold">+2.4%</span>
        <span className="text-mediumBrown">from last month</span>
      </p>
    </div>
  );
};

export default MonthSummary;
