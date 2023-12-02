import React from "react";
import * as data from "../data.json";
import clsx from "clsx";
import { useState } from "react";

const converted = JSON.parse(JSON.stringify(data)).default;
console.log(converted);

// get max number
const amounts = converted.map((data) => {
  return data.amount;
});
const maxNum = Math.max(...amounts);

const Bar = ({ day, amount }) => {
  let barSize = Math.round((100 * amount) / maxNum);

  return (
    <div className="relative w-8 flex flex-col justify-end items-center mx-2">
      <div
        className={clsx(
          "day-amount-label bg-darkBrown text-veryPaleOrange text-[14px] my-1 p-0.5 rounded",
          ""
        )}
      >
        ${amount}
      </div>
      <button
        className={clsx(
          "wa w-full cursor-pointer rounded-[0.25rem] ",
          "bg-softRed hover:bg-activeSoftRed focus:bg-staleCyan focus:hover:bg-activeCyan"
        )}
        style={{ height: `${barSize}px` }}
      />
      <p className="text-mediumBrown text-">{day}</p>
    </div>
  );
};

const ExpensesChart = () => {
  return (
    <>
      <p className="font-bold text-[24px]">Spending - Last 7 days</p>
      <div className="flex  my-4">
        {converted.map((data) => {
          return <Bar day={data.day} amount={data.amount} key={data.day} />;
        })}
      </div>
    </>
  );
};

export default ExpensesChart;
