import React from "react";
import paypal from "../Assets/paypal.svg";
import Card from "./Card";
const Paypalcard = () => {
  return (
    <Card width="227px" height="216px">
      <div className="flex flex-col px-2 py-2">
        <div className="flex flex-row">
          <img
            className="rounded-full w-[56px] h-[56px] "
            src={paypal}
            alt=""
          />
          <div className="px-4 flex flex-col">
            <h3 className="text-w font-poppins font-semibold text-[24px]/[38px] ">
              Paypal
            </h3>
            <p className="text-g">checkout</p>
          </div>
        </div>
        <div className="flex justify-between my-4">
          <div className="px-4 flex flex-col">
            <p className="text-g">total</p>
            <h3 className="text-w font-poppins font-medium text-[18px]/[23px] ">
              $210
            </h3>
          </div>
          <div className="rounded-xl border-2 border-secondary flex justify-center py-2 px-4 ">
            <p className="text-secondary ">change</p>
          </div>
        </div>
        <div className="rounded-xl bg-secondary flex justify-center mt-4  py-3 px-2 grid-col-3">
          <a href="" className="font-poppins font-lg text-[18px]/[19px]  ">
            Make Payment
          </a>
        </div>
      </div>
    </Card>
  );
};

export default Paypalcard;
