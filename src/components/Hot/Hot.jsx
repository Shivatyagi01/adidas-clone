import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// images
import hotVideo1 from "../../assets/videos/hot-1.mp4";
import hotVideo2 from "../../assets/videos/hot-2.mp4";
import hotVideo3 from "../../assets/videos/hot-3.mp4";

const Hot = () => {
  const CustomNextArrow = ({ onClick }) => (
    <button
      className={`text-black bg-white right-0 text-8xl absolute border-2 border-solid border-black z-10 top-[45%] right-[10%]`}
      onClick={onClick}
    >
      <svg
        width="36px"
        height="36px"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13.4697 5.46967C13.7626 5.17678 14.2374 5.17678 14.5303 5.46967L20.5303 11.4697C20.8232 11.7626 20.8232 12.2374 20.5303 12.5303L14.5303 18.5303C14.2374 18.8232 13.7626 18.8232 13.4697 18.5303C13.1768 18.2374 13.1768 17.7626 13.4697 17.4697L18.1893 12.75H4C3.58579 12.75 3.25 12.4142 3.25 12C3.25 11.5858 3.58579 11.25 4 11.25H18.1893L13.4697 6.53033C13.1768 6.23744 13.1768 5.76256 13.4697 5.46967Z"
          fill="#000000"
        />
      </svg>
    </button>
  );
  const CustomPrevArrow = ({ onClick }) => (
    <button
      className={`bg-white text-black left-0 text-8xl absolute border-2 border-solid border-black z-10 top-[45%] left-[10%]`}
      onClick={onClick}
    >
      <svg
        width="36px"
        height="36px"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.5303 5.46967C10.8232 5.76256 10.8232 6.23744 10.5303 6.53033L5.81066 11.25H20C20.4142 11.25 20.75 11.5858 20.75 12C20.75 12.4142 20.4142 12.75 20 12.75H5.81066L10.5303 17.4697C10.8232 17.7626 10.8232 18.2374 10.5303 18.5303C10.2374 18.8232 9.76256 18.8232 9.46967 18.5303L3.46967 12.5303C3.17678 12.2374 3.17678 11.7626 3.46967 11.4697L9.46967 5.46967C9.76256 5.17678 10.2374 5.17678 10.5303 5.46967Z"
          fill="#000000"
        />
      </svg>
    </button>
  );
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4.5,
      slidesToSlide: 2,
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 3,
      slidesToSlide: 3,
    },
    mobile: {
      breakpoint: { max: 767, min: 464 },
      items: 2,
      slidesToSlide: 1,
    },
  };
  const Hots = [
    {
      id: 1,
      video: hotVideo1,
      name: "MOVE FOR THE PLANET",
      description: "From May 10-22, join us on the adidas Running app.",
      buttonText: "Find Out Now",
    },
    {
      id: 2,
      video: hotVideo2,
      name: "IMAGINE YOUR WORLD",
      description: "Enjoy every moment with the new adidas LEGO® collection.",
      buttonText: "Find Out Now",
    },
    {
      id: 3,
      video: hotVideo3,
      name: "FOR THE FAST",
      description: "Meet our record-breaking running shoe family.",
      buttonText: "Shop Now",
    },
    {
      id: 4,
      video: hotVideo1,
      name: "MOVE FOR THE PLANET",
      description: "From May 10-22, join us on the adidas Running app.",
      buttonText: "Find Out Now",
    },
    {
      id: 5,
      video: hotVideo2,
      name: "IMAGINE YOUR WORLD",
      description: "Enjoy every moment with the new adidas LEGO® collection.",
      buttonText: "Find Out Now",
    },
    {
      id: 6,
      video: hotVideo3,
      name: "FOR THE FAST",
      description: "Meet our record-breaking running shoe family.",
      buttonText: "Shop Now",
    },
  ];
  return (
    <>
      <div className="popular py-8">
        <div className="container mx-auto">
          <h2 className="text-3xl font-custom font-bold text-black capitalize">
            Popular right now
          </h2>
        </div>
        <div className="hotSlider py-8">
          <div>
            <Carousel
              responsive={responsive}
              autoPlay={true}
              swipeable={true}
              draggable={true}
              showDots={false}
              infinite={false}
              partialVisible={false}
              customLeftArrow={<CustomPrevArrow />}
              customRightArrow={<CustomNextArrow />}
            >
              {Hots.map((Hot) => (
                <div key={Hot.id} className="mx-2">
                  <div className="product-box cursor-pointer flex flex-col">
                    <div className="product-img w-full aspect-[3/4]">
                      <video
                        src={Hot.video}
                        className="w-full object-cover h-full"
                      />
                    </div>
                    <div className="product-cont py-2">
                      <p className="font-bold mb-2 font-custom ">{Hot.name}</p>
                      <p className="text-xs mb-2 font-custom font-thin">
                        {Hot.description}
                      </p>
                      <button className="font-custom underline text-sm font-semibold tracking-[2px] uppercase">
                        {Hot.buttonText}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hot;
