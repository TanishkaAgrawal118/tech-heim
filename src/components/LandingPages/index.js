import React from 'react'
import NavBar from './Navbar/NavBar'
import HeroSection from './HeroSection'
import Devices from './Devices'
import ProductsSlider from './Slider'
import NewProduct from './NewProduct'
import Banner from './Banner'
import './style.css'
import TopBrands from './TopBrands'
import Footer from './Footer'
import Bottom from './Bottom'

const LandingPage = () => {
  return (
   <>
    <NavBar/>
    <HeroSection/>
    <Devices/>
    <ProductsSlider/>
    <NewProduct/>
    <Banner/>
    <TopBrands/>
    <Bottom/>
    <Footer/>
   </>
  )
}

export default LandingPage



// import React, { useMemo, useState, useEffect } from 'react';
// import NavBar from './Navbar/NavBar';
// import HeroSection from './HeroSection';
// import Devices from './Devices';
// import ProductsSlider from './Slider';
// import NewProduct from './NewProduct';

// const LandingPage = () => {
//   const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

//   useEffect(() => {
//     const handleResize = () => setIsMobile(window.innerWidth < 768);
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   const components = isMobile
//     ? [<NavBar key="nav" />, , <HeroSection key="hero" />, <Devices key="devices" />, <NewProduct key="newProduct" />,<ProductsSlider key="slider" />]
//     : [<NavBar key="nav" />, <HeroSection key="hero" />, <Devices key="devices" />, <ProductsSlider key="slider" />, <NewProduct key="newProduct" />];

//   return <>{components}</>;
// };

// export default LandingPage;
