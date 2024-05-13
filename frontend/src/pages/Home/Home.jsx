import React from "react";
import { motion } from "framer-motion";
import Hero from "../../components/Hero/Hero";
import Popular from "../../components/Popular/Popular";
import ProductTab from "../../components/ProductTab/ProductTab";
import Hot from "../../components/Hot/Hot";
import Seo from "../../components/Seo/Seo";
const Home = () => {
  const blackBox = {
    initial: {
      height: "100vh",
      bottom: 0,
    },
    animate: {
      height: 0,
      transition: {
        when: "afterChildren",
        duration: 1.5,
        ease: [0.87, 0, 0.13, 1],
      },
    },
  };
  const InitialTransition = () => {
    return (
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="absolute z-50 flex items-center justify-center w-full bg-black"
          initial="initial"
          animate="animate"
          variants={blackBox}
          onAnimationStart={() =>
            document.body.classList.add("overflow-hidden")
          }
          onAnimationComplete={() =>
            document.body.classList.remove("overflow-hidden")
          }
        ></motion.div>
      </div>
    );
  };
  const textContainer = {
    initial: {
      opacity: 1,
    },
    animate: {
      opacity: 0,
      transition: {
        duration: 0.25,
        when: "afterChildren",
      },
    },
  };
  const text = {
    initial: {
      y: 40,
    },
    animate: {
      y: 80,
      transition: {
        duration: 1.5,
        ease: [0.87, 0, 0.13, 1],
      },
    },
  };
  return (
    <>
      <motion.div exit={{ opacity: 0 }}>
        <motion.div
          className="absolute z-50 flex items-center justify-center w-full bg-black"
          initial="initial"
          animate="animate"
          variants={blackBox}
        >
          <motion.svg variants={textContainer} className="absolute z-50 flex">
            <pattern
              id="pattern"
              patternUnits="userSpaceOnUse"
              width={750}
              height={800}
              className="text-white"
            >
              <rect className="w-full h-full fill-current" />
              <motion.rect
                variants={text}
                className="w-full h-full text-gray-600 fill-current"
              />
            </pattern>
            <text
              className="text-4xl font-bold"
              text-anchor="middle"
              x="50%"
              y="50%"
              style={{ fill: "url(#pattern)" }}
            >
              Adidas
            </text>
          </motion.svg>
        </motion.div>
        <Hero />
        <Popular />
        <ProductTab />
        <Hot />
        <Seo />
      </motion.div>
    </>
  );
};

export default Home;
