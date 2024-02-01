import React from "react";
import { ReactComponent as Arrow } from "../Assets/arrow.svg";
const Getstartedrounded = () => {
  return (
    <div className="rounded-full border-4 w-[140px] h-[140px]  border-secondary  flex items-center justify-center cursor-pointer">
      <div className="flex flex-col justify-center items-center space-y-2 ">
        <a
          href="#"
          className="no-underline text-secondary font-medium text-center text-[20px]"
        >
          get started
        </a>
        <Arrow fill="#45CBD9" className="h-8 w-8" />
      </div>
    </div>
  );
};

export default Getstartedrounded;
