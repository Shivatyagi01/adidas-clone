import React from "react";
import Hero from "../../components/Hero/Hero";
import Popular from "../../components/Popular/Popular";
import ProductTab from "../../components/ProductTab/ProductTab";
import Hot from "../../components/Hot/Hot";
import Seo from "../../components/Seo/Seo";
const Home = () => {
  return (
    <>
      <Hero />
      <Popular />
      <ProductTab />
      <Hot />
      <Seo />
    </>
  );
};

export default Home;
