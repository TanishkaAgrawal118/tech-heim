import React from "react";
import { Container } from "react-bootstrap";
import { Paper } from "@mui/material";
import "./style.css";
import { products } from "../../constants/constant";
import start from "../../../assets/Star.svg";
import { useNavigate } from "react-router";

const ViewProduct = () => {
  const navigate = useNavigate();
  const handleProductDetail = (product) => {
    navigate(`/productDetails/${product.id}`, { state: { product } });
  };

  return (
    <Container>
      <div className="product-containers">
        {products.map((product) => (
          <Paper key={product.id}>
            <div
              className="product-cards"
              onClick={() => handleProductDetail(product)}
            >
              <span className="discount-badge">{product.discount}</span>
              <div className="product-image">
                <img src={product.image} alt={product.name} />
                <h4 className="product-title">{product.name}</h4>
              </div>
             
              <div className="slider-price-detail">
                <div className="price">
                  <p className="original-price">${product.price.toFixed(2)}</p>
                  <p className="product-price">${product.price.toFixed(2)}</p>
                </div>

                <div className="rating">
                  <img src={start} alt="star" />
                  <p>{product.rating}</p>
                </div>
              </div>
            </div>
          </Paper>
        ))}
      </div>
    </Container>
  );
};

export default ViewProduct;
