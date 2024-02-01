import React from "react";
import Card from "./Card";
import star from "../Assets/star.svg";
import sheild from "../Assets/sheild.svg";
import packet from "../Assets/packet.svg";

const Features = () => {
  return (
    <div className="flex justify-between">
      <div className="flex flex-col w-[470px] h-[175px]">
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
      <div className="flex flex-col space-y-10">
        <div className="flex flex-row space-x-4">
          <img src={star} alt="" />
          <div className="flex flex-col">
            <h2 className="font-poppins font-semibold text-w text-[18px]/[23px]">
              Rewards
            </h2>
            <p className="font-poppins font-normal text-g w-[366px] h-[48px] text-[16px]/[24px]">
              Lorem ipsum dolor sit uam autem nostrum aut molestiae, alias, nemo
              id quis. olestiae, alias, nemo id quis olestiae, alias, nemo id
              quis
            </p>
          </div>
        </div>
        <div className=" bg-card shadow-card rounded-[20px] h-[115px] w-[470px] flex items-center">
          <div className="flex flex-row space-x-4">
            <img src={sheild} alt="" />
            <div className="flex flex-col mb-3">
              <h2 className="font-poppins font-semibold text-w text-[18px]/[23px]">
                100% Secured
              </h2>
              <p className="font-poppins font-normal text-g w-[366px] h-[48px] text-[16px]/[24px]">
                Lorem ipsum dolor sit uam autem nostrum aut molestiae, alias,
                nemo id quis. olestiae, alias, nemo id quis olestiae, alias,
                nemo id quis
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-row space-x-4">
          <img src={packet} alt="" />
          <div className="flex flex-col">
            <h2 className="font-poppins font-semibold text-w text-[18px]/[23px]">
              Balance Transfer
            </h2>
            <p className="font-poppins font-normal text-g w-[366px] h-[48px] text-[16px]/[24px]">
              Lorem ipsum dolor sit uam autem nostrum aut molestiae, alias, nemo
              id quis. olestiae, alias, nemo id quis olestiae, alias, nemo id
              quis
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
