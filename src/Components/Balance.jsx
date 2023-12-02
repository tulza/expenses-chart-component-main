import React from "react";
import Logo from "/src/logo.svg";

const Balance = () => {
  return (
    <div className="bg-softRed my-4 p-6 grid grid-cols-2 items-center rounded-[1rem] text-veryPaleOrange">
      <span>
        My balance <p className="font-bold text-[30px]">$921.48</p>
      </span>
      <img className="justify-self-end h-[60%] rounded-[1rem]" src={Logo}></img>
    </div>
  );
};

export default Balance;
