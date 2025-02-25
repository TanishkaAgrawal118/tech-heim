import React from "react";
import "./style.css";
import { newProducts } from "../../constants/constant";
import { Container } from "react-bootstrap";

const NewProduct = () => {
  return (
    <Container>
      <div className="new-products-container">
        <div className="header">
          <h2>New Products</h2>
          <a href="#" className="view-all-link">
            View all
          </a>
        </div>
        <hr/>
        <div className="products-grid">
          {newProducts.map((product) => (
            <div key={product.id} className="productCard">
              <img
                src={product.image}
                alt={product.name}
                className="product-image"
              />
              <h3 className="product-name">{product.name}</h3>
              <p className="product-price">${product.price.toFixed(2)}</p>
              <div className="product-details">
                <span className="product-rating">⭐ {product.rating}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default NewProduct;
