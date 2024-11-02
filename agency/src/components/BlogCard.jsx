import React from "react";
import { FaArrowRight } from "react-icons/fa";

const BlogCard = ({ data }) => {
  const { id, image, title, description, author, date, aosDelay } = data;
  return (
    <div  className=" group px-4">
      <div data-aos="fade-up" data-aos-delay={aosDelay} className="overflow-hidden ">
        <img
          src={image}
          alt=""
          className="mx-auto h-[420px] w-full object-cover group-hover:scale-105 duration-300 rounded-md"
        />
        <div className="space-y-2 p-4 ml-6 bg-white dark:bg-slate-950 -translate-y-16">
          <h1 className="line-clamp-1 text-violet-300 text-2xl font-semibold">
            {title}
          </h1>
          <h1 className="line-clamp-4 text-gray-500 text-sm ">{description}</h1>
          <div className="flex justify-end text-gray-500 ">
            <FaArrowRight className="group-hover:text-primary group-hover:translate-x-2 duration-300 " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
