import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// images
import shoes from "../../assets/img/shoe.avif";
const ProductTab = () => {
  const [sliderIndex, setSliderIndex] = useState(0);

  const CustomNextArrow = ({ onClick }) => (
    <button
      className="text-black right-0 text-8xl absolute border-2 border-solid border-black"
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
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M13.4697 5.46967C13.7626 5.17678 14.2374 5.17678 14.5303 5.46967L20.5303 11.4697C20.8232 11.7626 20.8232 12.2374 20.5303 12.5303L14.5303 18.5303C14.2374 18.8232 13.7626 18.8232 13.4697 18.5303C13.1768 18.2374 13.1768 17.7626 13.4697 17.4697L18.1893 12.75H4C3.58579 12.75 3.25 12.4142 3.25 12C3.25 11.5858 3.58579 11.25 4 11.25H18.1893L13.4697 6.53033C13.1768 6.23744 13.1768 5.76256 13.4697 5.46967Z"
          fill="#000000"
        />
      </svg>
    </button>
  );

  const CustomPrevArrow = ({ onClick }) => (
    <button
      className="text-black left-0 text-8xl absolute border-2 border-solid border-black"
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
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M10.5303 5.46967C10.8232 5.76256 10.8232 6.23744 10.5303 6.53033L5.81066 11.25H20C20.4142 11.25 20.75 11.5858 20.75 12C20.75 12.4142 20.4142 12.75 20 12.75H5.81066L10.5303 17.4697C10.8232 17.7626 10.8232 18.2374 10.5303 18.5303C10.2374 18.8232 9.76256 18.8232 9.46967 18.5303L3.46967 12.5303C3.17678 12.2374 3.17678 11.7626 3.46967 11.4697L9.46967 5.46967C9.76256 5.17678 10.2374 5.17678 10.5303 5.46967Z"
          fill="#000000"
        />
      </svg>
    </button>
  );
  const settings = {
    dots: false,
    arrows: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    afterChange: (index) => setSliderIndex(index),
  };
  return (
    <div className="tabs py-8">
      <div className="container mx-auto">
        <div className="button-group flex gap-x-4">
          <a
            href="#"
            className="p-2 px-4 bg-black text-white font-custom font-bold block border-2 border-black border-solid hover:bg-white hover:text-black"
          >
            New Arrivals
          </a>
          <a
            href="#"
            className="p-2 px-4 bg-white text-black font-custom font-bold block border-2 border-black border-solid hover:bg-black hover:text-white"
          >
            Best of Adidas
          </a>
        </div>
        <Slider className="py-8" {...settings}>
          <div>
            <div className="product-box p-4">
              <div className="product-img">
                <img src={shoes} alt="" className="w-100" />
              </div>
            </div>
          </div>
          <div>
            <div className="product-box p-4">
              <div className="product-img">
                <img src={shoes} alt="" className="w-100" />
              </div>
            </div>
          </div>
          <div>
            <div className="product-box p-4">
              <div className="product-img">
                <img src={shoes} alt="" className="w-100" />
              </div>
            </div>
          </div>
          <div>
            <div className="product-box p-4">
              <div className="product-img">
                <img src={shoes} alt="" className="w-100" />
              </div>
            </div>
          </div>
          <div>
            <div className="product-box p-4">
              <div className="product-img">
                <img src={shoes} alt="" className="w-100" />
              </div>
            </div>
          </div>
          <div>
            <div className="product-box p-4">
              <div className="product-img">
                <img src={shoes} alt="" className="w-100" />
              </div>
            </div>
          </div>
        </Slider>
        <div style={{ marginTop: "20px" }}>
          <SliderIndicator currentIndex={sliderIndex} totalSlides={3} />
        </div>
      </div>
    </div>
  );
};
const SliderIndicator = ({ currentIndex, totalSlides }) => {
  const indicators = [];

  for (let i = 0; i < totalSlides; i++) {
    const className =
      i === currentIndex ? "slider-indicator active" : "slider-indicator";
    indicators.push(<div key={i} className={className} />);
  }

  return <div className="slider-indicators">{indicators}</div>;
};
export default ProductTab;
