import React from "react";
import img1 from "../../assets/img/shoe-1.avif";
import video from "../../assets/img/shoe-1.webm";
import img2 from "../../assets/img/shoe-2.avif";
import img3 from "../../assets/img/shoe-3.avif";
import img4 from "../../assets/img/shoe-4.avif";

const ProductGallery = () => {
  return (
    <div className="grid grid-cols-2 productGallery gap-1">
      <img src={img1} alt="" />
      <video src={video} autoPlay muted></video>
      <img src={img2} alt="" />
      <img src={img3} alt="" />
      <img src={img4} alt="" />
    </div>
  );
};

export default ProductGallery;
