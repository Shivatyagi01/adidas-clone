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
                              src={`/src/assets/img/${
                                Array.isArray(product.image)
                                  ? product.image[0].image1
                                  : product.image
                              }`}
                              alt="Product Image"
                              className="w-full"
                            />
                          </div>
                          <div className="product-cont py-2">
                            <p>{product.name}</p>
                            <p>{product.category}</p>
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
                  .slice(0, 8)
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
