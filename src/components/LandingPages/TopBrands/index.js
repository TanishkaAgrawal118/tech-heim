import React from "react";
import { Container } from "react-bootstrap";
import Slider from "react-slick";
import "./topBrands.css";
import { topBrands } from "../../constants/constant";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const TopBrands = () => {
  const settings = {
    dots:false, 
    infinite: true, 
    speed: 7000, 
    slidesToShow: 4,
    slidesToScroll: 1, 
    autoplay: true, 
    autoplaySpeed: 0, 
    arrows: false, 
    pauseOnHover: true,
    rtl: true,
    cssEase: 'linear', 
  };

  return (
    <Container className="top-brands">
      <div className="brand-header">
        <h4>Top Brands</h4>
        <hr />
      </div>

      <Slider {...settings} className="brands-container">
        {topBrands.map((brand) => (
          <div key={brand.name}>
            <img
              src={brand.logo}
              alt={brand.name}
              className="brand-logo"
            />
          </div>
        ))}
      </Slider>
    </Container>
  );
};

export default TopBrands;
