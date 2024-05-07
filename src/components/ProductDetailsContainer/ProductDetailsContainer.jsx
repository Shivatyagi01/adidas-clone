import React from "react";
import variation1 from "../../assets/img/variation1.avif";
import variation2 from "../../assets/img/variation2.avif";
import { FiArrowRight } from "react-icons/fi";
const ProductDetailsContainer = () => {
  return (
    <>
      <div className="product-details p-8 sticky top-0">
        <p className="text-md mb-2">Originals</p>
        <h2 className="font-bold text-3xl mb-2">SAMBA OG SHOES</h2>
        <p className="mb-8">
          <span>MRP in Indian currency:</span>
          <br />
          <b className="mr-[3px]">₹10 999.00</b>
          per pair
          <br />
          (Inclusive of tax)
        </p>
        <h5 className="font-bold">SHOE OF THE YEAR 2023</h5>
        <p className="mb-6">
          Renowned for its timeless design, unparalleled comfort, and widespread
          popularity, the SAMBA has rightfully earned its place as the SHOE OF
          THE YEAR
        </p>
        <h5 className="font-bold">Colours</h5>
        <div className="grid">
          <div className="variation flex gap-1">
            <img
              src={variation1}
              alt=""
              className="w-1/5 border-b-4 hover:border-black"
            />
            <img
              src={variation2}
              alt=""
              className="w-1/5 border-b-4 hover:border-black"
            />
          </div>
          <p className="text-sm mt-2 mb-8">
            Core Black / Cloud White / Clear Granite
          </p>
          <a
            href="#"
            className="text-md primary-btn btn-2 uppercase font-bold text-white bg-black p-3 flex justify-between items-center gap-2 rounded-sm"
          >
            ADD TO bag <FiArrowRight />
          </a>
        </div>
      </div>
    </>
  );
};

export default ProductDetailsContainer;
