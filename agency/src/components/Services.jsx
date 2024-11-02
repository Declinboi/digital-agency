import React from "react";
import { FaCameraRetro } from "react-icons/fa";
import { GiNotebook } from "react-icons/gi";
import { SlNote } from "react-icons/sl";

const skillsData = [
  {
    name: "App Development",
    icon: <FaCameraRetro className="text-4xl text-primary" />,
    link: "#",
    description:
      "ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod metus vel sem bibendum, a bibendum justo tempor. Sed vel lectus",
    aosDelay: "0",
  },
  {
    name: "Web Designing",
    icon: <GiNotebook className="text-4xl text-primary" />,
    link: "#",
    description: "ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod metus vel sem bibendum, a bibendum justo tempor. Sed vel lectus",
    aosDelay: "300",
  },
  {
    name: "Graphic Designing",
    icon: <SlNote className="text-4xl text-primary" />,
    link: "#",
    description: "ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod metus vel sem bibendum, a bibendum justo tempor. Sed vel lectus",
    aosDelay: "500",
  },
  {
    name: "Digital Marketing",
    icon: <SlNote className="text-4xl text-primary" />,
    link: "#",
    description: "ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod metus vel sem bibendum, a bibendum justo tempor. Sed vel lectus",
    aosDelay: "700",
  },
];

const Services = () => {
  return (
    <div className="bg-gray-200 dark:bg-black py-12 dark:text-white sm:place-items-center sm:grid ">
      <div className="container px-5">
        {/* header section */}
        <div className="pb-12 text-center space-y-3">
          <h1 className="text-3xl font-semibold text-violet-900 dark:text-primary">
            Explore Our Services{" "}
          </h1>
          <p>
            We are self-service data analytics software that lets you create
            visually.
          </p>
        </div>

        {/* card section */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
          {skillsData.map((cards) => {
            const { name, icon, link, description, aosDelay } = cards;

            return (
              <div
                key={name}
                data-aos="fade-up"
                data-aos-delay={aosDelay}
                className=" space-y-3 sm:space-y-4 p-4"
              >
                <div>{icon}</div>
                <h1 className="text-lg font-semibold">{name}</h1>
                <p className="text-gray-600 dark:text-gray-400">
                  {description}
                </p>
              </div>
            );
          })}
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="900"
          className="text-center mt-4 sm:mt-8"
        >
          <button className="bg-primary text-white hover:bg-primary/80 duration-300 rounded-lg px-4 py-2 ">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;
