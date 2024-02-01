import React from "react";
import Card from "./Card";
import quote from "../Assets/quote.svg";
import first from "../Assets/1.png";
import second from "../Assets/2.png";
import third from "../Assets/3.png";
import Precomments from "./Precomments";
import Sponsors from "./Sponsors";
import FinalBox from "./FinalBox";

const Comments = () => {
  return (
    <div>
      <Precomments />
      <div className="flex justify-between">
        <Card width="370px" height="395px">
          <div className="mx-4 my-4">
            <div className="flex flex-col space-y-[70px]">
              <img src={quote} className="h-[42px] w-[27px] " alt="" />
              <p className="font-poppins font-normal text-[18px]/[32px] text-w">
                Money is only a tool. It will take you wherever you wish, but it
                will not replace you as the driver.
              </p>
              <div className="flex flex-row space-x-4">
                <img src={first} className="w-[48px] h-[48px]" alt="" />
                <div className="flex flex-col">
                  <h2 className="font-poppins font-normal text-w text-[20px]/[32px]">
                    Herman Jensen
                  </h2>
                  <p className="font-poppins font-normal text-g text-[16px]/[24px]">
                    Founder & Leader
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Card>
        <div className="w-[370px] h-[395px] mx-4 my-4">
          <div className="flex flex-col space-y-[70px]">
            <img src={quote} className="h-[42px] w-[27px] " alt="" />
            <p className="font-poppins font-normal text-[18px]/[32px] text-w">
              Money is only a tool. It will take you wherever you wish, but it
              will not replace you as the driver.
            </p>
            <div className="flex flex-row space-x-4">
              <img src={second} className="w-[48px] h-[48px]" alt="" />
              <div className="flex flex-col">
                <h2 className="font-poppins font-normal text-w text-[20px]/[32px]">
                  Herman Jensen
                </h2>
                <p className="font-poppins font-normal text-g text-[16px]/[24px]">
                  Founder & Leader
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[370px] h-[395px] mx-4 my-4">
          <div className="flex flex-col space-y-[70px]">
            <img src={quote} className="h-[42px] w-[27px] " alt="" />
            <p className="font-poppins font-normal text-[18px]/[32px] text-w">
              Money is only a tool. It will take you wherever you wish, but it
              will not replace you as the driver.
            </p>
            <div className="flex flex-row space-x-4">
              <img src={third} className="w-[48px] h-[48px]" alt="" />
              <div className="flex flex-col">
                <h2 className="font-poppins font-normal text-w text-[20px]/[32px]">
                  Herman Jensen
                </h2>
                <p className="font-poppins font-normal text-g text-[16px]/[24px]">
                  Founder & Leader
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="my-8">
        <Sponsors />
      </div>
      <div className="my-8 ml-[100px]">
        <FinalBox />
      </div>
    </div>
  );
};

export default Comments;
