import React from "react";
import Slider from "react-slick";
import randomShape from '../../../assets/random-shape-in-blue.svg'
import "./style.css";
import { productsOnSale } from "../../constants/constant";
import { Container } from "react-bootstrap";

const ProductsSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Container>
  <div className="products-slider">
    {/* <img src={randomShape} alt="randomShape"/> */}
      <div className="slider-text">
        <h2 className="slider-title">Products On Sale</h2>
        <p>Shop Now!</p>
      </div>
      <div className="main-slider">
        <Slider {...settings}>
          {productsOnSale.map((product) => (
            <div key={product.id} className="product-card">
              <span className="discount-badge">{product.discount}</span>
              <img
                src={product.image}
                alt={product.name}
                className="product-image"
              />
              <h3 className="product-name">{product.name}</h3>
              <div className="slider-price">
                <p className="original-price">
                  ${product.originalPrice.toFixed(2)}
                </p>
                <p className="discounted-price">
                  ${product.discountedPrice.toFixed(2)}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
    </Container>
  
  );
};

export default ProductsSlider;
