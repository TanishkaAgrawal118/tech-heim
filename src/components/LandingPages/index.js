import React from "react";
import NavBar from "./Navbar/NavBar";
import HeroSection from "./HeroSection";
import Devices from "./Devices";
import ProductsSlider from "./Slider";
import NewProduct from "./NewProduct";
import Banner from "./Banner";
import "./style.css";
import TopBrands from "./TopBrands";
import Footer from "./Footer";
import Bottom from "./Bottom";
import Chatbot from "../Chatbot";

const LandingPage = () => {
  return (
    <>
      <NavBar />
      <HeroSection />
      <Devices />
      <ProductsSlider />
      <NewProduct />
      <Banner />
      <TopBrands />
      <Bottom />
      <Footer />
      <Chatbot/>
    </>
  );
};

export default LandingPage;
