import React from "react";
import Card from "./Card";
import dribble from "../Assets/dribbble.svg";
import netflix from "../Assets/netflix.svg";
import manulife from "../Assets/manulife.svg";
import stonks from "../Assets/stonks.svg";
import nostonks from "../Assets/nostonks.svg";
const TransactionsCard = () => {
  return (
    <Card width="335px" height="280px">
      <div className="flex flex-col space-y-3 px-5 py-5">
        <div className="font-poppins font-semibold text-w text-[22px]/[22px] ">
          Last Transction
          <div className="flex justify-between mt-4">
            <img src={dribble} alt="" />
            <div className="flex flex-col mr-[100px] ">
              <h2 className="font-poppins font-semibold text-w text-[16px]/[22px] ">
                Dribble
              </h2>
              <p className="text-g text-[12px]/[22px] mt-[-3px] font-normal font-poppins">
                15 Days ago
              </p>
            </div>
            <div className="flex flex-row mr-1 mt-4">
              <img src={nostonks} className="mb-[2px] mr-2" alt="" />
              <h2 className="font-poppins text-w font-normal text-[14px]/[22px] ">
                -147,85
              </h2>
            </div>
          </div>
          {/*  */}
          <div className="flex justify-between mt-4">
            <div className="rounded-full bg-w flex justify-center">
              <img src={netflix} alt="" />
            </div>

            <div className="flex flex-col mr-[100px] ">
              <h2 className="font-poppins font-semibold text-w text-[16px]/[22px] ">
                Netflix
              </h2>
              <p className="text-g text-[12px]/[22px] mt-[-3px] font-normal font-poppins">
                4 Days ago
              </p>
            </div>
            <div className="flex flex-row mr-2 mt-4">
              <img src={nostonks} className="mb-[2px] mr-2" alt="" />
              <h2 className="font-poppins text-w font-normal text-[14px]/[22px] ">
                -$80,85
              </h2>
            </div>
          </div>
          {/*  */}
          <div className="flex justify-between mt-4">
            <div className="rounded-full bg-w flex justify-center">
              <img src={manulife} className="px-3" alt="" />
            </div>
            <div className="flex flex-col mr-[100px] ">
              <h2 className="font-poppins font-semibold text-w text-[16px]/[22px] ">
                manulife
              </h2>
              <p className="text-g text-[12px]/[22px] mt-[-3px] font-normal font-poppins">
                4 Days ago
              </p>
            </div>
            <div className="flex flex-row mr-2 mt-4">
              <img src={stonks} className="mb-[2px] mr-2" alt="" />
              <h2 className="font-poppins text-w font-normal text-[14px]/[22px] ">
                +$147,85
              </h2>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default TransactionsCard;
