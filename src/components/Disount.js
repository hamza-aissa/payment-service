import React from "react";
import percent from "../Assets/percent.png";

const Disount = () => {
  return (
    <div className="bg-[#1B1A21] items-center py-1 flex flex-row w-[340px] rounded-[10px] ">
      <img src={percent} alt="" className="h-6" />
      <div className="flex flex-row text-g">
        <div className="text-w font-bold ml-1 mr-1"> 20% </div> DISCOUNT FOR
        <div className="text-w font-bold ml-1 mr-1"> 1-MONTH </div> ACCOUNT
      </div>
    </div>
  );
};

export default Disount;
