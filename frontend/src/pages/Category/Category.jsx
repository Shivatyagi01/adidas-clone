import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

// Categories
import Categories from "../../components/Categories/Categories";
export default function Category() {
  const { category } = useParams();

  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(`http://localhost:5000/api/${category}`);
      setData(result.data.products);
    };
    fetchData();
  }, [category]);

  return (
    <>
      <div className="tabs py-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-4 gap-4">
            {data.map((product) => (
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
                        onMouseOver={(e) =>
                          (e.currentTarget.src = `/src/assets/img/${
                            Array.isArray(product.image)
                              ? product.image[1].image2
                              : product.image
                          }`)
                        }
                        onMouseOut={(e) =>
                          (e.currentTarget.src = `/src/assets/img/${
                            Array.isArray(product.image)
                              ? product.image[0].image1
                              : product.image
                          }`)
                        }
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
          </div>
          <Categories title="OUR CLOTHING AND SHOE CATEGORIES" />
        </div>
      </div>
    </>
  );
}
