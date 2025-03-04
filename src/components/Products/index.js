import React, { useState } from "react";
import NavBar from "../LandingPages/Navbar/NavBar";
import { Container } from "react-bootstrap";
import { Link } from "react-router";
import ViewProduct from "./ViewProduct";
import TopProduct from "./TopProducts";
import Filter from "./FIlter";
import "./style.css";
import Footer from "../LandingPages/Footer";
import Bottom from "../../components/LandingPages/Bottom";

const Product = () => {
  const [selectedFilters, setSelectedFilters] = useState({
    brand: [],
    ram: [],
    screenSize: [],
    processor: [],
    gpu: [],
    driveSize: [],
  });
  return (
    <>
      <NavBar />
      <Container>
        <div className="navigation">
          <Link to="/" style={{ color: "#717171" }}>
            Home
          </Link>{" "}
          &gt;{" "}
          <Link className="active" to="/products">
            Products
          </Link>
        </div>
        <TopProduct />
        <div className="product-filter-section">
        <Filter
            selectedFilters={selectedFilters}
            setSelectedFilters={setSelectedFilters}
          />
          <ViewProduct selectedFilters={selectedFilters} />
        </div>
      </Container>
      <Bottom />
      <Footer />
    </>
  );
};

export default Product;
