import React from "react";
import NavBar from "../../LandingPages/Navbar/NavBar";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";
import "./productDetail.css";
import productDetail from "../../../assets/productDetail1.svg";
import frame1 from "../../../assets/frame1.svg";
import frame2 from "../../../assets/frame2.svg";
import frame3 from "../../../assets/frame3.svg";
import frame4 from "../../../assets/frame4.svg";
import Footer from "../../LandingPages/Footer";
import { Paper } from "@mui/material";
import star from "../../../assets/Star.svg";

const ProductDetail = () => {
  const navigate = useNavigate();
  const handleCartDetail = () =>{
    navigate('/cartDetails');
  }
  const { state } = useLocation();
  const product = state?.product;

  if (!product) {
    return <p>Product not found!</p>;
  }
  return (
    <>
      <NavBar />
      <Container className="product-detail-container">
        <div className="navigation">
          <Link to="/" style={{ color: "#717171" }}>
            Home
          </Link>
          &gt;
          <Link to="/products" style={{ color: "#717171" }}>
            Products
          </Link>
          &gt;
          <Link to="/">Laptops</Link>
        </div>

        <div className="product-detail-main">
          <div className="product-image-section">
            <img
              src={productDetail}
              alt="Product"
              className="main-product-image"
            />
            <div className="product-thumbnails">
              <img src={frame1} alt="frame" />
              <img src={frame2} alt="frame" />
              <img src={frame3} alt="frame" />
              <img src={frame4} alt="frame" />
              <img src={frame3} alt="frame" />
            </div>
          </div>

          <div className="product-info-section">
            <h2 className="product-detail-title">
              {product.name}
            </h2>
            <p className="product-detail-rating">
              <img src={star} alt="star" />
              {product.rating} | <span>Sold {product.stock}</span>
            </p>
            <div className="availability-section">
              <span>In Stock</span>
              <span>Guaranteed</span>
              <span>Free Delivery</span>
            </div>
            <div>
              <p>Select Color</p>
              <div className="color-selection">
                <div
                  className="color-circle"
                  style={{ backgroundColor: "#d1d1d1" }}
                ></div>
                <div
                  className="color-circle selected"
                  style={{ backgroundColor: "#444" }}
                ></div>
              </div>
            </div>

            <ul className="product-specs">
              <li>
                <span>Brand</span> {product.details.brand}
              </li>
              <li>
                <span>Model Name</span> {product.details.model}
              </li>
              <li>
                <span>Screen Size</span> {product.details.screenSize}
              </li>
              <li>
                <span>Hard Disk Size</span>{product.details.hardDiskSize}
              </li>
              <li>
                <span>CPU Model</span> core i5
              </li>
            </ul>

            <a href="#" className="show-more">
              Show More
            </a>
          </div>
          <div className="product-price-section">
            <Paper className="price-card">
              <div className="price-section">
                <h3 className="current-price">$1299.00</h3>
                <div className="price-info">
                  <span className="original-price">$1410.87</span>
                  <span className="discount-detail-badge">-12%</span>
                </div>
              </div>

              <div className="payment-options">
                <label className="payment-option">
                  <input type="radio" name="payment" /> Pay Now
                </label>
                <label className="payment-option">
                  <input type="radio" name="payment" defaultChecked /> Buy in
                  installments
                </label>
                <p className="installment-caption">
                  choose your installments period
                </p>

                <div className="installment-options">
                  <button className="installment-button active">
                    3 Months
                  </button>
                  <button className="installment-button">6 Months</button>
                  <button className="installment-button">12 Months</button>
                  <button className="installment-button">18 Months</button>
                </div>
                <p className="monthly-price">$433.00/Month</p>
              </div>

              <div className="action-buttons">
                <button className="buy-now" onClick={handleCartDetail}>Buy Now</button>
                <button className="add-to-cart">Add to cart</button>
              </div>
            </Paper>
          </div>
        </div>

        <div className="technical-details">
          <h4>Technical Details</h4>
          <table className="details-table">
            <tr>
              <td>Display</td>
              <td>13.3-inch LED-backlit display with IPS technology</td>
            </tr>
            <tr>
              <td>Graphics</td>
              <td>Apple 10-core GPU</td>
            </tr>
            <tr>
              <td>Processor</td>
              <td>Apple M2 chip</td>
            </tr>
            <tr>
              <td>In the box</td>
              <td>67W USB-C Power Adapter, USB-C Charge Cable (2 m)</td>
            </tr>
            <tr>
              <td>Height</td>
              <td>0.61 inch (1.56 cm)</td>
            </tr>
            <tr>
              <td>Width</td>
              <td>11.97 inches (30.41 cm)</td>
            </tr>
          </table>
        </div>
      </Container>

      <Footer />
    </>
  );
};

export default ProductDetail;
