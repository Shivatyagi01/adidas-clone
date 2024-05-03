import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// images
import shoes from "../../assets/img/shoe.avif";

const ProductTab = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 4, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 767, min: 464 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  const slides = [
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
  ];
  return (
    <>
      <div className="tabs py-8">
        <div className="container mx-auto">
          <div className="button-group flex gap-x-4 pb-8">
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
          <Carousel
            responsive={responsive}
            autoPlay={true}
            swipeable={true}
            draggable={true}
            showDots={false}
            infinite={false}
            partialVisible={false}
          >
            {slides.map((slide) => (
              <div key={slide.id}>
                <div className="product-box border-white border-2 border-solid cursor-pointer hover:border-black">
                  <div className="product-img w-full">
                    <img
                      src={slide.image}
                      alt={slide.name}
                      className="w-full"
                    />
                  </div>
                  <div className="product-cont py-2">
                    <p>{slide.name}</p>
                    <p>{slide.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default ProductTab;
