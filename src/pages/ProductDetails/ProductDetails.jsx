import React from "react";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import ProductGallery from "../../components/ProductGallery/ProductGallery";
import ProductDetailsContainer from "../../components/ProductDetailsContainer/ProductDetailsContainer";
const ProductDetails = () => {
  return (
    <>
      <div className="productDetails relative">
        <Breadcrumbs />
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-2">
            <ProductGallery />
          </div>
          <div className="col-span-1">
            <ProductDetailsContainer />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
