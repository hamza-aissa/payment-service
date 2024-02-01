import React from "react";
import Card from "./Card";
import Getstartedbutton from "./Getstartedbutton";

const FinalBox = () => {
  return (
    <Card height="293px" width="1170px">
      <div className="flex flex-row items-center ">
        <div className="flex flex-col space-y-2 ml-10">
          <h2 className="font-poppins font-semibold text-[48px]/[76px] text-w w-[470px] h-[164px]">
            Let’s try our service now!
          </h2>
          <p className="text-g font-poppins font-normal text-[18px]/[28px] mt-9 w-[450px] h-[64px]">
            Everything you need to accept card payments and grow your business
            anywhere on the planet.
          </p>
        </div>
        <div className="ml-[200px]">
          <Getstartedbutton />
        </div>
      </div>
    </Card>
  );
};

export default FinalBox;
