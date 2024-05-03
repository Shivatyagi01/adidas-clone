import React, { useState } from "react";
import "tailwindcss/tailwind.css";
import { FiUser, FiShoppingCart, FiHeart, FiX } from "react-icons/fi";

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const handleLinkClick = () => {
    setIsVisible(false);
  };
  return (
    <>
      <div className="top-header">
        <div className="bg-black text-white p-3 text-center text-xs font-custom font-bold uppercase tracking-wider">
          FREE DELIVERY, RETURN & EXCHANGE
        </div>
      </div>
      <div className="header p-4 px-8">
        <div className="container-full flex items-center">
          <div className="w-1/5">
            <svg
              viewBox="100 100 50 32"
              xmlns="http://www.w3.org/2000/svg"
              className="w-1/4"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M 150.07 131.439 L 131.925 100 L 122.206 105.606 L 137.112 131.439 L 150.07 131.439 Z M 132.781 131.439 L 120.797 110.692 L 111.078 116.298 L 119.823 131.439 L 132.781 131.439 Z M 109.718 121.401 L 115.509 131.439 L 102.551 131.439 L 100 127.007 L 109.718 121.401 Z"
                fill="black"
              ></path>
            </svg>
          </div>
          <div className="w-3/5">
            <nav>
              <ul className="list-none flex gap-4 flex-row-reverse">
                <li>
                  <a href="#" className="text-sm font-custom">
                    MEN
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm font-custom">
                    WOMEN
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm font-custom">
                    KIDS
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm font-custom">
                    NEW
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm font-custom">
                    SPORTS
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm font-custom">
                    LIFESTYLE
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm font-custom">
                    OUTLET
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="w-1/5">
            <ul className="list-none flex gap-4 flex-row-reverse">
              <li>
                <a href="#" className="text-sm font-custom">
                  <FiUser />
                </a>
              </li>
              <li>
                <a href="#" className="text-sm font-custom">
                  <FiHeart />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hero-btn text-sm font-custom"
                >
                  <FiShoppingCart />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {isVisible && (
        <div className="container-full w-100 bg-gray-50 text-black p-3 text-center text-xs font-custom font-bold uppercase tracking-wider">
          ADIDAS: THE BRAND WITH THREE STRIPES
          <a
            href="#"
            className="inline-block float-right"
            onClick={handleLinkClick}
          >
            <FiX />
          </a>
        </div>
      )}
      <div className="container mx-auto"></div>
    </>
  );
};

export default Header;
