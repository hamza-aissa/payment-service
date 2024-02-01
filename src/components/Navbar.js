import React from "react";

const Navbar = () => {
  return (
    <div className="h-[50px] w-full  bg-circles rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-g sticky top-0 ">
      <div className="flex justify-between">
        <div className="flex justify-start  items-center ml-6">
          <div className="text-w leading-7 font-bold text-[20px]">hamza-</div>
          <div className="text-secondary font-black text-[20px] leading-7">
            banking
          </div>
        </div>
        <div className="flex justify-end items-center mr-6">
          <ul className="flex flex-row space-x-4">
            <li>
              <a
                href="#"
                className="no-underline text-w font-semibold text-[25px] hover:text-secondary"
              >
                home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="no-underline text-w font-semibold text-[25px] hover:text-secondary"
              >
                features
              </a>
            </li>
            <li>
              <a
                href="#"
                className="no-underline text-w font-semibold text-[25px] hover:text-secondary"
              >
                about
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
