import React, { Fragment } from "react";
import ExpensesChart from "./ExpensesChart";
import MonthSummary from "./MonthSummary";
import Balance from "./Balance";

const Chart = () => {
  return (
    <Fragment>
      <div>
        <Balance />
        <div className="bg-veryPaleOrange text-darkBrown my-4 p-4 rounded-[1rem]">
          <ExpensesChart />
          <hr></hr>
          <MonthSummary />
        </div>
      </div>
    </Fragment>
  );
};

export default Chart;
