import React from "react";
import heroImage from "../assets/website/team.png";

const Hero = () => {
  return (
    <main className="bg-white dark:bg-gray-900 dark:text-white duration-300">
      <div className="container min-h-[620px] flex pt-10 md:pt-0 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 place-items-center">
          {/* image  section */}
          <div data-aos="zoom-out" className="order-1 sm:order-2 relative px-4">
            <img src={heroImage} alt="" />
            <div
              data-aos="slide-right"
              data-aos-delay="300"
              className="absolute bg-white dark:bg-gray-800 px-4 py-2 rounded-xl shadow-md md:-bottom-5 md:-right-8 -bottom-2 right-0"
            >
              <p>⭐Projects</p>
              <h1 className="font-bold">
                600+ <span className="font-normal">Done</span>
              </h1>
            </div>
          </div>

          {/* text  section */}
          <div className="space-y-5 order-2 sm:order-1 xl:pr-40 px-10">
            <h1
              data-aos="fade-up"
              className="text-4xl sm:text-5xl font-semibold"
            >
              Building Brands in the
              <span className="text-primary ml-2 ">Digital Agency</span>
            </h1>
            <p data-aos="fade-up" data-aos-delay="300">
              Your partner in navigating the ever-evolving landscape of digital
              marketing. From conceptualization to execution, we craft tailored
              solutions that drive results and elevate your brand to new
              heights.
            </p>
            <button
              data-aos="fade-left"
              data-aos-delay="500"
              className="bg-primary text-white hover:bg-primary/80 duration-300 rounded-lg px-4 py-2"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
