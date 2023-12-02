import React from "react";

const Balance = () => {
  return (
    <div className="bg-softRed my-4 p-4 grid grid-cols-2 items-center rounded-[1rem] text-veryPaleOrange">
      <span>
        My balance <p className="font-bold">$921.48</p>
      </span>
      <img
        className="justify-self-end h-[80%] rounded-[1rem]"
        src="/src/logo.svg"
      ></img>
    </div>
  );
};

export default Balance;
