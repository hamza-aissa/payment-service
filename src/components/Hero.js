import React from "react";
import Disount from "./Disount";
import Getstartedrounded from "./Getstartedrounded";
import Title from "./Title";
import arm from "../Assets/arm.png";
const Hero = () => {
  return (
    <section>
      <div className="flex flex-row">
        <div className="flex flex-col">
          <Disount />
          <div className="flex flex-row">
            <Title />
            <Getstartedrounded />
          </div>

          <p className="mt-6 text-w w-1/2">
            Our team of experts Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Nihil mollitia delectus dicta totam. Sint eligendi
            hic tenetur ex qui, enim recusandae reiciendis reprehenderit quae
            rerum in laudantium suscipit ea labore?
          </p>
        </div>

        <img
          src={arm}
          alt="robot hand"
          className="h-[444px] w-[669px] mx-[-135px]  "
        />
      </div>
    </section>
  );
};

export default Hero;
