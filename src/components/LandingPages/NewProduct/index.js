import React, { useEffect } from "react";
import "./style.css";
import { newProducts } from "../../constants/constant";
import { Container } from "react-bootstrap";
import star  from '../../../assets/Star.svg'
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../../redux/actions/productAction";
import { useNavigate } from "react-router";

const NewProduct = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const products = useSelector((state) => state.products.products);
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleProductDetail = (product) => {
    navigate(`/productDetails/${product.id}`);
  };

  return (
    <Container>
      <div className="new-products-container">
        <div className="header">
          <h2>New Products</h2>
          <a href="#" className="view-all-link">
            View all
          </a>
        </div>
        <hr />
        <div className="products-grid">
        {products.slice(0, 4).map((product) => ( 
            <div key={product.id} className="productCard" onClick={() => handleProductDetail(product)}>
              <img
                src={product.image}
                alt={product.name}
                className="product-image"
              />
              <h3 className="product-name">{product.name}</h3>

              <div className="product-details">
                <p className="product-price">${product.originalPrice}</p>
                <span className="product-rating"><img src={star} alt="star" /> {product.rating}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default NewProduct;
