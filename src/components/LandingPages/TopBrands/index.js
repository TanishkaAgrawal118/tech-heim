import React from "react";
import { Container } from "react-bootstrap";
import "./topBrands.css";
import { topBrands } from "../../constants/constant";

const TopBrands = () => {
  return (
    <Container className="top-brands">
      <div className="brand-header">
        <h4>Top Brands</h4>
        <hr />
      </div>

      <div className="brands-container">
      {topBrands.slice(0, window.innerWidth <= 770 ? 4 : topBrands.length).map((brand) => (
          <img
            key={brand.name}
            src={brand.logo}
            alt={brand.name}
            className="brand-logo"
          />
        ))}
      </div>
    </Container>
  );
};

export default TopBrands;
