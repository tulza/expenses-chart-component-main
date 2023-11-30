import React from "react";
import * as data from "../data.json";
import clsx from "clsx";

const converted = JSON.parse(JSON.stringify(data)).default;
console.log(converted);

// get max number
const amounts = converted.map((data) => {
  return data.amount;
});
const maxNum = Math.max(...amounts);

const Bar = ({ day, amount }) => {
  const barSize = Math.ceil((100 * amount) / maxNum);
  return (
    <div className="w-8 mx-2 flex flex-col justify-end items-center">
      <div
        className="h-[0] w-full bg-softRed transition-all"
        style={{ height: `${barSize}%` }}
      ></div>
      <p>{day}</p>
    </div>
  );
};

const ExpensesChart = () => {
  return (
    <>
      <div className="flex h-[150px] ">
        {converted.map((data) => {
          return <Bar day={data.day} amount={data.amount} key={data.amount} />;
        })}
      </div>
    </>
  );
};

export default ExpensesChart;
