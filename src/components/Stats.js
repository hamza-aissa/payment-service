import React from "react";
import CountUp from "react-countup";

const Stats = () => {
  return (
    <section className="grid grid-cols-3 ">
      <div className="flex flex-row items-center">
        <div className="text-w font-['Poppins'] font-semibold text-4xl ">
          <CountUp end={3800} /> +
        </div>
        <div className="text-secondary font-['Poppins'] text-[26px] font-bold ml-2 ">
          USER ACTIVE
        </div>
      </div>
      <div className="flex flex-row  items-center">
        <div className="text-w font-['Poppins'] font-semibold text-4xl ">
          <CountUp end={230} /> +
        </div>
        <div className="text-secondary font-['Poppins'] text-[26px] font-bold ml-2">
          TRUSTED BY COMPANY
        </div>
      </div>
      <div className="flex flex-row  items-center">
        <div className="text-w font-['Poppins'] font-semibold text-4xl">
          $<CountUp end={230} />M +
        </div>
        <div className="text-secondary font-['Poppins'] text-[26px] font-bold ml-2">
          TRANSACTION
        </div>
      </div>
    </section>
  );
};

export default Stats;
