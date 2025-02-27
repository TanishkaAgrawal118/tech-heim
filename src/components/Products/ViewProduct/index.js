import React from "react";
import { Container } from "react-bootstrap";
import { Paper } from "@mui/material";
import "./style.css";
import { products } from "../../constants/constant";
import start from "../../../assets/Star.svg";
import { useNavigate } from "react-router";

const ViewProduct = () => {
  const navigate = useNavigate();
  const handleProductDetail = (id) => {
    navigate(`/productDetails/${id}`);
  };

  return (
    <Container>
      <div  className="product-containers">
      {products.map((product) => (
        <Paper key={product.id}>
          <div className="product-cards" onClick={handleProductDetail}>
            <span className="discount-badge">{product.discount}</span>
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />
            <h4 className="product-title">{product.name}</h4>

            <div className="slider-price">
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
