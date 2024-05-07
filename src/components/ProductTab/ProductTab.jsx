import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// images
import shoes from "../../assets/img/shoe.avif";

const ProductTab = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const CustomNextArrow = ({ onClick }) => (
    <button
      className={`text-black bg-white right-0 text-8xl absolute border-2 border-solid border-black z-10 top-[45%]`}
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
      className={`bg-white text-black left-0 text-8xl absolute border-2 border-solid border-black z-10 top-[45%]`}
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
  const NewArrivals = [
    {
      id: 1,
      image: shoes,
      name: "Samba OG Shoes",
      price: 10999.0,
      category: "shoes",
    },
    {
      id: 2,
      image: shoes,
      name: "Samba OG Shoes",
      price: 10999.0,
      category: "shoes",
    },
  ];
  const Bests = [
    {
      id: 1,
      image: shoes,
      name: "Samba OG Shoes",
      price: 10999.0,
      category: "shoes",
    },
    {
      id: 2,
      image: shoes,
      name: "Samba OG Shoes",
      price: 10999.0,
      category: "shoes",
    },
    {
      id: 3,
      image: shoes,
      name: "Samba OG Shoes",
      price: 10999.0,
      category: "shoes",
    },
    {
      id: 4,
      image: shoes,
      name: "Samba OG Shoes",
      price: 10999.0,
      category: "shoes",
    },
    {
      id: 5,
      image: shoes,
      name: "Samba OG Shoes",
      price: 10999.0,
      category: "shoes",
    },
    {
      id: 6,
      image: shoes,
      name: "Samba OG Shoes",
      price: 10999.0,
      category: "shoes",
    },
    {
      id: 7,
      image: shoes,
      name: "Samba OG Shoes",
      price: 10999.0,
      category: "shoes",
    },
    {
      id: 8,
      image: shoes,
      name: "Samba OG Shoes",
      price: 10999.0,
      category: "shoes",
    },
    {
      id: 9,
      image: shoes,
      name: "Samba OG Shoes",
      price: 10999.0,
      category: "shoes",
    },
    {
      id: 10,
      image: shoes,
      name: "Samba OG Shoes",
      price: 10999.0,
      category: "shoes",
    },
  ];
  return (
    <>
      <div className="tabs py-8">
        <div className="container mx-auto">
          <div className="button-group flex gap-x-4 pb-8">
            <button
              className={`p-2 px-4 font-custom font-bold block border-2 border-solid hover:bg-black hover:text-white ${
                activeTab === 1
                  ? "bg-black text-white border-black"
                  : "bg-white text-black border-black"
              }`}
              onClick={() => handleTabClick(1)}
            >
              New Arrivals
            </button>
            <button
              className={`p-2 px-4 font-custom font-bold block border-2 border-solid hover:bg-black hover:text-white ${
                activeTab === 2
                  ? "bg-black text-white border-black"
                  : "bg-white text-black border-black"
              }`}
              onClick={() => handleTabClick(2)}
            >
              Best of Adidas
            </button>
          </div>
          {activeTab == 1 && (
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
                {NewArrivals.map((NewArrival) => (
                  <div key={NewArrival.id}>
                    <div className="product-box border-white border-2 border-solid cursor-pointer hover:border-black">
                      <div className="product-img w-full">
                        <img
                          src={NewArrival.image}
                          alt={NewArrival.name}
                          className="w-full"
                        />
                      </div>
                      <div className="product-cont py-2">
                        <p>{NewArrival.name}</p>
                        <p>{NewArrival.category}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </Carousel>
            </div>
          )}
          {activeTab == 2 && (
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
                {Bests.map((Best) => (
                  <div key={Best.id}>
                    <div className="product-box border-white border-2 border-solid cursor-pointer hover:border-black">
                      <div className="product-img w-full">
                        <img
                          src={Best.image}
                          alt={Best.name}
                          className="w-full"
                        />
                      </div>
                      <div className="product-cont py-2">
                        <p>{Best.name}</p>
                        <p>{Best.category}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </Carousel>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ProductTab;
