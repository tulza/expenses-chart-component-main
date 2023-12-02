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

const Bar = ({ day, amount, onClick, active }) => {
  const barSize = Math.round((1.2 * 100 * amount) / maxNum);
  const ThisActive = Boolean(day == active);
  return (
    <div className="relative w-10 flex flex-col flex-col-reverse items-center mx-2">
      <p className="text-mediumBrown text-">{day}</p>
      <button
        className={clsx(
          "wa w-full cursor-pointer rounded-[0.25rem] sib-selector transition-colors",
          ThisActive
            ? "bg-staleCyan hover:bg-activeCyan"
            : "bg-softRed hover:bg-activeSoftRed"
        )}
        style={{ height: `${barSize}px` }}
        onClick={onClick}
      />
      <div
        className={clsx(
          "day-amount-label bg-darkBrown text-veryPaleOrange  text-center font-bold my-1 p-1 rounded transition-[opacity]",
          ThisActive ? "" : "invisible opacity-0"
        )}
      >
        ${amount}
      </div>
    </div>
  );
};

const ExpensesChart = () => {
  const [active, setactive] = useState(null);
  return (
    <>
      <p className="font-bold text-[24px]">Spending - Last 7 days</p>
      <div className="flex  my-0">
        {converted.map((data) => {
          return (
            <Bar
              day={data.day}
              amount={data.amount}
              onClick={() => {
                setactive(data.day);
              }}
              active={active}
              key={data.day}
            />
          );
        })}
      </div>
    </>
  );
};

export default ExpensesChart;
