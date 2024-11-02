import React from "react";
import Slider from "react-slick";

const testimonialData = [
  {
    id: 1,
    name: "David Calathan - Director of Design Operations, New York",
    text: "The results have been incredible. With Power Digital, it feels like they’re in our trench, supporting and understanding us. They’re like a partner and mentor in helping us get where we want to be.",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 1,
    name: "David Calathan - Director of Design Operations, New York",
    text: "The results have been incredible. With Power Digital, it feels like they’re in our trench, supporting and understanding us. They’re like a partner and mentor in helping us get where we want to be.",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 1,
    name: "Smith - Director of Operations, New York",
    text: "The results have been incredible. With Power Digital, it feels like they’re in our trench, supporting and understanding us. They’re like a partner and mentor in helping us get where we want to be.",
    img: "https://picsum.photos/103/103",
  },
];

const Testimonial = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
  };

  return (
    <div className="dark:bg-black bg-gray-300 dark:text-white py-10">
      <div data-aos="fade-left"  className="container  ">
        {/* testimonial section */}
        <div className="grid grid-cols-1 max-w-screen-xl mx-auto gap-6 ">
          <Slider {...settings} >
            {testimonialData.map((slide) => {
              const { id, name, text, img } = slide;
              return (
                <div key={id} className="my-6">
                  <div className="flex flex-col sm:flex-row gap-5 md:gap-14 p-4 mx-4 rounded-xl bg-violet-300 dark:bg-gray-800 relative">
                    <img
                      src={img}
                      alt={name}
                      className="block mx-auto h-[300px] w-full sm:w-[200px] object-cover"
                    />
                    <div className="space-y-4">
                      <p className="text-black/80 dark:text-white/80 xl:pr-40 ">
                        {text}
                      </p>
                      <h1 className="text-xl font-bold dark:text-violet-400">{name}</h1>
                    </div>
                    <p className="text-black/10 dark:text-primary text-[12rem] font-serif absolute bottom-0 right-0 ">
                      ,,
                    </p>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
