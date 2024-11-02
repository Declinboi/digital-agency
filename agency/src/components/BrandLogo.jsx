import React from "react";
import Brand1 from "../assets/brands/1.svg";
import Brand2 from "../assets/brands/2.svg";
import Brand3 from "../assets/brands/3.svg";
import Brand4 from "../assets/brands/4.svg";
import Brand5 from "../assets/brands/5.svg";

const BrandLogo = () => {
  return (
    <div className="bg-gray-300 dark:bg-gray-900 ">
      <div className="container py-10 dark:border-t-2 dark:border-violet-300">
        <h1
          data-aos="fade-up"
          className="text-xl text-center dark:text-violet-400 text-primary "
        >
          Powering Next-Gen Companies
        </h1>
        <div
          data-aos="zoom-in"
          data-aos-delay="300"
          className="flex flex-wrap items-center justify-evenly gap-3 py-6 px-4 md:px-32  "
        >
          <img src={Brand1} alt="" />
          <img src={Brand2} alt="" />
          <img src={Brand3} alt="" />
          <img src={Brand4} alt="" />
          <img src={Brand5} alt="" />
        </div>
      </div>
    </div>
  );
};

export default BrandLogo;
