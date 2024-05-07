import React from "react";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import Popular from "../../components/Popular/Popular";
import ProductTab from "../../components/ProductTab/ProductTab";
import Hot from "../../components/Hot/Hot";
import Seo from "../../components/Seo/Seo";
import Footer from "../../components/Footer/Footer";
const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Popular />
      <ProductTab />
      <Hot />
      <Seo />
      <Footer/>
    </>
  );
};

export default Home;
