import React from "react";
import Img1 from "../assets/blog1.png";
import Img2 from "../assets/blog2.png";
import Img3 from "../assets/blog3.png";
import BlogCard from "./BlogCard";

const BlogsData = [
  {
    id: 1,
    image: Img1,
    title: "Realtime analytics",
    description:
      "“The results have been incredible. With Power Digital, it feels like they’re in our trench, supporting and understanding us. They’re like a partner and mentor in helping us get where we want to be. “The results have been incredible.",
    author: "Someone",
    date: "April 22, 2022",
    aosdelay: "300",
  },
  {
    id: 2,
    image: Img2,
    title: "Realtime analytics",
    description:
      "“The results have been incredible. With Power Digital, it feels like they’re in our trench, supporting and understanding us. They’re like a partner and mentor in helping us get where we want to be. “The results have been incredible. ",
    author: "Someone",
    date: "April 22, 2022",
    aosdelay: "500",
  },
  {
    id: 3,
    image: Img3,
    title: "Realtime analytics",
    description:
      "“The results have been incredible. With Power Digital, it feels like they’re in our trench, supporting and understanding us. They’re like a partner and mentor in helping us get where we want to be. “The results have been incredible. ",
    author: "Someone",
    date: "April 22, 2022",
    aosdelay: "700",
  },
];

const BlogCom = () => {
  return (
    <div className="bg-gray-300 dark:bg-gray-900 dark:text-primary py-10 pb-14">
      <div className="container ">
        <h1
          data-aos="fade-right"
          className="my-8 border-l-8 border-primary/50 pl-2  text-3xl font-semibold"
        >
          Our Blogs
        </h1>

        {/* blog cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {BlogsData.map((data) => (
            <BlogCard key={data.id} data={data} />
          ))}
        </div>
        <div data-aos="fade-up" data-aos-delay="700" className="text-center ">
          <button className="bg-primary text-white hover:bg-primary/80 duration-300 rounded-lg px-4 py-2 ">
            View All Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogCom;
