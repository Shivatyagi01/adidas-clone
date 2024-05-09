import React, { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import { Link } from "react-router-dom";
import "react-multi-carousel/lib/styles.css";
import CustomPrevArrow from "../../elements/CustomPrevArrow";
import CustomNextArrow from "../../elements/CustomNextArrow";
import axios from "axios";

const ProductTab = () => {
  const [data, setData] = useState([]);
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("http://localhost:5000/api/data");
      setData(result.data.products);
    };
    fetchData();
  }, []);

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
                {data
                  .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
                  .slice(0, 8)
                  .map((product) => (
                    <div key={product._id}>
                      <Link to={`${product.url}/${product._id}`}>
                        <div className="product-box border-white border-2 border-solid cursor-pointer hover:border-black">
                          <div className="product-img w-full">
                            <img
                              src={`/src/assets/img/${product.image}`}
                              alt={product.name}
                              className="w-full"
                            />
                          </div>
                          <div className="product-cont py-2">
                            <p>{product.name}</p>
                            <p>{product.category}</p>
                            <p>{product.tag}</p>
                          </div>
                        </div>
                      </Link>
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
                {data
                  .filter((product) => product.tag === "Best Selling")
                  .map((best) => (
                    <div key={best._id}>
                      <Link to={`${best.url}/${best._id}`}>
                        <div className="product-box border-white border-2 border-solid cursor-pointer hover:border-black">
                          <div className="product-img w-full">
                            <img
                              src={`/src/assets/img/${best.image}`}
                              alt={best.name}
                              className="w-full"
                            />
                          </div>
                          <div className="product-cont py-2">
                            <p>{best.name}</p>
                            <p>{best.category}</p>
                            <p>{best.tag}</p>
                          </div>
                        </div>
                      </Link>
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
