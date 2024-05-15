import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Categories = (props) => {
  //   categories
  const [categories, setCategory] = useState([]);
  useEffect(() => {
    const fetchCategory = async () => {
      const result = await axios.get("http://localhost:5000/api/category");
      setCategory(result.data.categories);
    };
    fetchCategory();
  }, []);
  return (
    <>
      <div className="py-5 mt-8">
        <h3 className="mb-6 text-lg font-custom font-bold text-black capitalize">
          {props.title}
        </h3>
        <ul className="grid grid-cols-6 gap-4">
          {categories.map((category) => (
            <li key={category._id}>
              <Link to={`/shop/${category.category}`}>{category.category}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Categories;
