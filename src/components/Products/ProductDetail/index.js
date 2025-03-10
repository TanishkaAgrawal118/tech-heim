import React, { useEffect, useState } from "react";
import NavBar from "../../LandingPages/Navbar/NavBar";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { Button, Container } from "react-bootstrap";
import "./productDetail.css";
import frame1 from "../../../assets/frame1.svg";
import frame2 from "../../../assets/frame2.svg";
import frame3 from "../../../assets/frame3.svg";
import frame4 from "../../../assets/frame4.svg";
import Footer from "../../LandingPages/Footer";
import { Paper } from "@mui/material";
import star from "../../../assets/Star.svg";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductByIdThunk } from "../../../redux/actions/productAction";
import { addToCart } from "../../../redux/actions/cartAction";
import { ToastContainer, toast } from "react-toastify";

const ProductDetail = () => {
  const [selectedColor, setSelectedColor] = useState("#444");
  const [selectedInstallment, setSelectedInstallment] = useState("3 Months");
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { product, loading, error } = useSelector((state) => state.products);
  const showToastMessage = () => {
    toast.success("Product added to cart !", {
      position: "top-right",
    });
  };
  useEffect(() => {
    dispatch(fetchProductByIdThunk(id));
  }, [dispatch, id]);

  if (loading) return <p>Loading product details...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!product) return <p>No product found!</p>;

  const handleCartDetail = (product) => {
    navigate(`/cartDetails/${product.id}`);
  };
  const handleColorSelect = (color) => {
    setSelectedColor(color);
  };
  const handleInstallmentSelect = (period) => {
    setSelectedInstallment(period);
  };

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    showToastMessage();
  };
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
              src={product?.image}
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
            <h2 className="product-detail-title">{product?.name}</h2>
            <p className="product-detail-rating">
              <img src={star} alt="star" />
              {product?.rating} | <span>Sold {product?.stock}</span>
            </p>
            <div className="availability-section">
              <span>In Stock - {product.stock}</span>
              <span>Guaranteed</span>
              <span>Free Delivery</span>
            </div>
            <div>
              <p>Select Color</p>
              <div className="color-selection">
                {["#d1d1d1", "#444"].map((color) => (
                  <div
                    key={color}
                    className={`color-circle ${
                      selectedColor === color ? "selected" : ""
                    }`}
                    style={{ backgroundColor: color }}
                    onClick={() => handleColorSelect(color)}
                  ></div>
                ))}
              </div>
            </div>

            <ul className="product-specs">
              <li>
                <span>Brand</span> {product?.brand}
              </li>
              <li>
                <span>Model Name</span> {product?.sku}
              </li>
              {/* <li>
                <span>Screen Size</span> {product.details.screenSize}
              </li>
              <li>
                <span>Hard Disk Size</span>
                {product.details.hardDiskSize}
              </li>
              <li>
                <span>CPU Model</span> core i5
              </li> */}
            </ul>

            <a href="#" className="show-more">
              Show More
            </a>
          </div>
          <div className="product-price-section">
            <Paper className="price-card">
              <div className="price-section">
                <h3 className="current-price">${product.originalPrice}</h3>
                <div className="price-info">
                  <span className="original-price">
                    ${product.discountedPrice}
                  </span>
                  <span className="discount-detail-badge">
                    -{product.discount}
                  </span>
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
                  {["3 Months", "6 Months", "12 Months", "18 Months"].map(
                    (period) => (
                      <button
                        key={period}
                        className={`installment-button ${
                          selectedInstallment === period ? "active" : ""
                        }`}
                        onClick={() => handleInstallmentSelect(period)}
                      >
                        {period}
                      </button>
                    )
                  )}
                </div>
                <p className="monthly-price">$433.00/Month</p>
              </div>

              <div className="action-buttons">
                <button
                  className="buy-now"
                  onClick={() => handleCartDetail(product)}
                >
                  Buy Now
                </button>
                <button
                  className="add-to-cart"
                  onClick={() => handleAddToCart(product)}
                >
                  Add to cart
                </button>
              </div>
            </Paper>
          </div>
        </div>

        <div className="technical-details">
          <h4>Technical Details</h4>
          <table className="details-table">
            <tr>
              <td>Display</td>
              <td>{product.details.display}</td>
            </tr>
            <tr>
              <td>Graphics</td>
              <td>{product.details.graphics}</td>
            </tr>
            <tr>
              <td>Processor</td>
              <td>{product.details.processor}</td>
            </tr>
            <tr>
              <td>In the box</td>
              <td>67W USB-C Power Adapter, USB-C Charge Cable (2 m)</td>
            </tr>
            <tr>
              <td>Included Items</td>
              <td>{product.details.includedItems}</td>
            </tr>
            <tr>
              <td>Weight</td>
              <td>{product.details.weight}</td>
            </tr>
          </table>
        </div>
      </Container>
      <ToastContainer />
      <Footer />
    </>
  );
};

export default ProductDetail;
