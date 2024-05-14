import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const ProductGallery = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/data/${productId}`
        );
        console.log("Product Data:", response.data);
        setProduct(response.data.product);
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };
    fetchProductDetails();
  }, [productId]);

  return (
    <div>
      {product ? (
        <div className="grid grid-cols-2 productGallery gap-1">
          <video
            src={`/src/assets/img/${product.video}`}
            autoPlay
            muted
          ></video>
          {Array.isArray(product.image) &&
            product.image.map((imageObj, index) => (
              <img
                key={`image-${index}`}
                src={`/src/assets/img/${Object.values(imageObj)[0]}`}
                alt={`Image ${index + 1}`}
              />
            ))}
        </div>
      ) : (
        <p>Loading product details...</p>
      )}
    </div>
  );
};

export default ProductGallery;
