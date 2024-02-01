import React from "react";
import scan from "../Assets/scanCard.svg";
import analitics from "../Assets/analiticsCard.svg";
import paymethod from "../Assets/payMethod.svg";
const Morefeatures = () => {
  return (
    <div className="flex justify-between">
      <div className="flex flex-col h-[154px] w-[570px] ">
        <h2 className="font-poppins font-semibold text-[48px]/[76px] text-w ">
          Find a better card deal in a few easy steps.
        </h2>
        <p className="text-g font-poppins font-normal text-[18px]/[28px] w-[500px] h-[95px] ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta veniam
          perferendis facilis incidunt et quod aliquam nisi libero error
          inventore, consect.
        </p>
      </div>
      {/*  */}

      <div className="relative flex items-center justify-center">
        <div className="w-[381px] h-[381px] border-8 rounded-full border-circles flex items-center justify-center">
          <div className="w-[253px] h-[253px] border-4 rounded-full border-circles flex items-center justify-center">
            <div className=" w-[144px] h-[144px] border-4 rounded-full  border-circles flex items-center justify-center"></div>
          </div>
        </div>
        <div className="absolute">
          <div className="flex flex-col">
            <div className="flex justify-between">
              <img
                className=" h-[158px] w-[191px] mt-[20px] ml-[-70px] "
                src={scan}
                alt=""
              />
              <img
                className="h-[238px] w-[256px] mt-[10px] ml-[80px]"
                src={analitics}
                alt=""
              />
            </div>

            <img
              className="h-[140px] w-[262px] mb-[-100px] mr-[20px]"
              src={paymethod}
              alt=""
            />
          </div>
        </div>
      </div>
      {/* <div className="relative flex items-center justify-center">
        <div className="w-[381px] h-[381px] border-8 rounded-full border-circles flex items-center justify-center">
          <div className="w-[253px] h-[253px] border-4 rounded-full border-circles flex items-center justify-center">
            <div className=" w-[144px] h-[144px] border-4 rounded-full  border-circles flex items-center justify-center"></div>
          </div>
        </div>
        <div className="absolute top-[50px] bottom-3 right-[60%] ">
          <img className=" h-[158px] w-[191px]" src={scan} alt="" />
        </div>
        <div className="absolute top-2 bottom-4 left-[60%]">
          <img className="h-[238px] w-[256px]" src={analitics} alt="" />
        </div>
        <div className="absolute top-[80%] left-5 right-5 ">
          <img className="h-[140px] w-[262px]" src={paymethod} alt="" />
        </div>
      </div> */}
    </div>
  );
};

export default Morefeatures;
