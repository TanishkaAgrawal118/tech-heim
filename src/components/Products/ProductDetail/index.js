import React, { useEffect, useState } from "react";
import NavBar from "../../LandingPages/Navbar/NavBar";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import "./productDetail.css";
import Footer from "../../LandingPages/Footer";
import { Paper } from "@mui/material";
import star from "../../../assets/Star.svg";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductByIdThunk } from "../../../redux/actions/productAction";
import { addToCart } from "../../../redux/actions/cartAction";
import { ToastContainer, toast } from "react-toastify";
import Modal from "../../Modals/modal";
import { PiShareFat } from "react-icons/pi";
import instagram from "../../../assets/instagram.svg";
import facebook from "../../../assets/facebook-icon.svg";
import telegram from "../../../assets/telegram.svg";
import whatsapp from "../../../assets//whatsapp.svg";
import ReviewRating from "../ReviewProduct/ReviewRating";
import {
  installmentOptions,
  PRODUCT_THUMBNAILS,
  shareSocialLinks,
  TECHNICAL_DETAILS, 
} from "../../constants/constant";

const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [selectedColor, setSelectedColor] = useState("#444");
  const [selectedInstallment, setSelectedInstallment] = useState("3 Months");
  const { product, loading, error } = useSelector((state) => state.products);
  const [isReviewModal, setIsReviewModal] = useState(false);
  const [isShareModal, setIsShareModal] = useState(false);
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");
  const [reviews, setReviews] = useState([]);
  const [currentUrl, setCurrentUrl] = useState("");

  useEffect(() => {
    setCurrentUrl(window.location.href);
  }, []);
  const showToastMessage = () => {
    toast.success("Product added to cart !", {
      position: "top-right",
    });
  };

  useEffect(() => {
    const storedReviews =
      JSON.parse(localStorage.getItem("productReviews")) || {};
    const productReviews = storedReviews[product?.id] || [];
    setReviews(productReviews);
  }, [product?.id]);

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
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    showToastMessage();
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(currentUrl);
    alert("Link copied");
  };
  const shareSocialLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`,
    whatsapp: `https://wa.me/?text=${encodeURIComponent(currentUrl)}`,
    telegram: `https://t.me/share/url?url=${encodeURIComponent(currentUrl)}`,
    instagram: "https://www.instagram.com",
  };
  const handleShare = (platform) => {
    window.open(shareSocialLinks[platform], "_blank");
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
            <div className="d-flex">
              <img
                src={product?.image}
                alt="Product"
                className="main-product-image"
              />
              <PiShareFat
                className="product-share-icon"
                onClick={() => setIsShareModal(true)}
              />
            </div>
            <div className="product-thumbnails">
              {PRODUCT_THUMBNAILS.map((src, index) => (
                <img key={index} src={src} alt={`frame-${index + 1}`} />
              ))}
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
            </ul>
            <a href="#" className="show-more">
              Show More
            </a>
          </div>
          <div className="product-price-section">
            <Paper className="price-card">
              <div className="price-section">
                <h3 className="current-price">${product?.originalPrice}</h3>
                <div className="price-info">
                  <span className="original-price">
                    ${product?.discountedPrice}
                  </span>
                  <span className="discount-detail-badge">
                    -{product?.discount}
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
                  {installmentOptions.map((period) => (
                    <button
                      key={period}
                      className={`installment-button ${
                        selectedInstallment === period ? "active" : ""
                      }`}
                      onClick={() => setSelectedInstallment(period)}
                    >
                      {period}
                    </button>
                  ))}
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
            <tbody>
              {TECHNICAL_DETAILS.map(({ key, label }) => (
                <tr key={key}>
                  <td>{label}</td>
                  <td>{product?.details?.[key] ?? "N/A"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <ReviewRating
          product={product}
          reviews={reviews}
          setReviews={setReviews}
          isReviewModal={isReviewModal}
          setIsReviewModal={setIsReviewModal}
        />
        <Modal isOpen={isShareModal} onClose={() => {
            setIsShareModal(false);
          }}
        >
          <div className="share-modal">
            <p>Share this link via</p>
            <hr />
            <div className="share-icons">
            <img src={facebook} alt="facebook" onClick={() => handleShare('facebook')} />
            <img src={whatsapp} alt="whatsapp" onClick={() => handleShare('whatsapp')} />
            <img src={telegram} alt="telegram" onClick={() => handleShare('telegram')} />
            <img src={instagram} alt="instagram" onClick={() => handleShare('instagram')} />
            </div>
            <p className="mb-2">Or Copy Link</p>
            <div className="share-input-container">
              <input type="text" value={currentUrl} readOnly />
              <button onClick={handleCopy}>Copy</button>
            </div>
          </div>
        </Modal>
        </Container>

        <ToastContainer />
        <Footer />
      </>
  );
};
export default ProductDetail;
