import React, { Fragment } from "react";
import ExpensesChart from "./ExpensesChart";

const Chart = () => {
  return (
    <Fragment>
      <div>
        <div className="bg-softRed my-4 p-4 grid grid-cols-2 items-center rounded-[1rem]">
          <span>
            My balance <p>$921.48</p>
          </span>
          <img
            className="justify-self-end h-[80%] rounded-[1rem]"
            src="/src/logo.svg"
          ></img>
        </div>
        <div className="bg-Very_pale_orange my-4 p-4 rounded-[1rem]">
          <p>Spending - Last 7 days</p>
          <ExpensesChart />
          <hr></hr>
          <div className="grid grid-cols-2">
            <div>
              <p>Total this month</p>
              <p>$478.33</p>
            </div>
            <div>
              <p>+2.4%</p>
              <p>from last month</p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Chart;
