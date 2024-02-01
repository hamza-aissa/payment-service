import React from "react";
import Paypalcard from "./Paypalcard";
import TransactionsCard from "./TransactionsCard";

const Services = () => {
  return (
    <div className="flex justify-between">
      <div>
        <div className="relative">
          <TransactionsCard />
          <div className="absolute top-[-155px] right-[-110px]">
            <Paypalcard />
          </div>
        </div>
      </div>

      <div className="flex flex-col w-[470px] h-[175px] ">
        <h2 className="font-poppins font-semibold text-[48px]/[76px] text-w ">
          Easily control your billing and invoicing
        </h2>
        <p className="text-g font-poppins font-normal text-[18px]/[28px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta veniam
          perferendis facilis incidunt et quod aliquam nisi libero error
          inventore, consectetur dolor quisquam ipsa fugiat sunt dignissimos
          iure delectus sit!
        </p>
      </div>
    </div>
  );
};

export default Services;
