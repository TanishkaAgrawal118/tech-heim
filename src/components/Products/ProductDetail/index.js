import React, { useEffect, useState } from "react";
import NavBar from "../../LandingPages/Navbar/NavBar";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { Button, Container } from "react-bootstrap";
import { Button, Container } from "react-bootstrap";
import "./productDetail.css";
import frame1 from "../../../assets/frame1.svg";
import frame2 from "../../../assets/frame2.svg";
import frame3 from "../../../assets/frame3.svg";
import frame4 from "../../../assets/frame4.svg";
import Footer from "../../LandingPages/Footer";
import { Paper, TextareaAutosize } from "@mui/material";
import star from "../../../assets/Star.svg";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductByIdThunk } from "../../../redux/actions/productAction";
import { addToCart } from "../../../redux/actions/cartAction";
import { ToastContainer, toast } from "react-toastify";
import { ToastContainer, toast } from "react-toastify";
import Modal from "../../Modals/modal";
import { MdOutlineStarPurple500 } from "react-icons/md";
import StarRating from "../ReviewProduct/starRating";
import { PiShareFat } from "react-icons/pi";
import instagram from "../../../assets/instagram.svg";
import facebook from "../../../assets/facebook-icon.svg";
import telegram from "../../../assets/telegram.svg";
import whatsapp from "../../../assets//whatsapp.svg";

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
  const [currentUrl, setCurrentUrl] = useState('');

  useEffect(() => {
    setCurrentUrl(window.location.href);
  }, []);
  const showToastMessage = () => {
    toast.success("Product added to cart !", {
      position: "top-right",
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

  useEffect(() => {
    if (product) {
      const storedReviews =
        JSON.parse(localStorage.getItem("productReviews")) || {};
      if (product.id && storedReviews[product.id]) {
        setReviews(storedReviews[product.id]);
      }
    }
  }, [product]);

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
    dispatch(addToCart(product));
    showToastMessage();
  };

  const handleSubmit = () => {
    if (!review || !rating) {
      alert("Please provide both rating and review");
      return;
    }
    const newReview = {
      id: Date.now(),
      review,
      rating,
      date: new Date().toISOString(),
    };
    const storedReviews =
      JSON.parse(localStorage.getItem("productReviews")) || {};
    const currentProductReviews = storedReviews[product?.id] || [];
    const updatedReviews = [...currentProductReviews, newReview];
    storedReviews[product?.id] = updatedReviews;
    localStorage.setItem("productReviews", JSON.stringify(storedReviews));
    setReviews(updatedReviews);
    setReview("");
    setRating(0);
    setIsReviewModal(false);
  };
  const handleCopy = () => {
    navigator.clipboard.writeText(currentUrl);
    toast.success("Product Link Copied !", {
      position: "top-right",
    });
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
              <td>Model</td>
              <td>{product?.details?.model}</td>
            </tr>
            <tr>
              <td>Display</td>
              <td>{product?.details?.display}</td>
            </tr>
            <tr>
              <td>Graphics</td>
              <td>{product?.details?.graphics}</td>
            </tr>
            <tr>
              <td>Processor</td>
              <td>{product?.details?.processor}</td>
            </tr>
            <tr>
              <td>Color</td>
              <td>{product?.details?.color}</td>
            </tr>
            <tr>
              <td>Included Items</td>
              <td>{product?.details?.includedItems}</td>
            </tr>
            <tr>
              <td>Weight</td>
              <td>{product?.details?.weight}</td>
            </tr>
            <tr>
              <td>Screen Size</td>
              <td>{product?.details?.screenSize}</td>
            </tr>
            <tr>
              <td>Hard disk Size</td>
              <td>{product?.details?.hardDiskSize}</td>
            </tr>
          </table>
        </div>

        <Paper className="reviews-section">
          <div className="review-top">
            <h4>Ratings & Reviews</h4>
            <Button onClick={() => setIsReviewModal(true)}>Rate Product</Button>
          </div>
          <div className="rating-summary">
            <div className="rating-score">
              <span className="score">
                {(
                  reviews.reduce((sum, review) => sum + review.rating, 0) /
                  (reviews.length || 1)
                ).toFixed(1)}{" "}
                ★
              </span>
              <p>
                {reviews.length} Ratings & {reviews.length} Reviews
              </p>
            </div>

            <div className="rating-bars">
              {[5, 4, 3, 2, 1].map((star) => {
                const count = reviews.filter((r) => r.rating === star).length;
                const percentage = (count / (reviews.length || 1)) * 100;

                return (
                  <div key={star} className="rating-bar">
                    <span>
                      {star} <MdOutlineStarPurple500 />
                    </span>
                    <div className="bar">
                      <div
                        className={`filled-bar star-${star}`}
                        style={{ width: `${percentage}%` }}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {reviews.length > 0 ? (
            reviews.map((review) => (
              <div key={review.id} className="review">
                <div className="review-header">
                  <span
                    className="rating"
                    style={{
                      color:
                        review.rating >= 4
                          ? "#4caf50" 
                          : review.rating >= 3
                          ? "#ffc107"
                          : "#f44336", 
                    }}
                  >
                    {review.rating} ★
                  </span>
                  <span
                    className="rating"
                    style={{
                      color:
                        review.rating >= 4
                          ? "#4caf50"
                          : review.rating >= 3
                          ? "#ffc107"
                          : "#f44336",
                    }}
                  >
                    {review.rating} ★
                  </span>
                  <strong>{review.review}</strong>
                </div>
                <span className="review-date">
                  {new Date(review.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </span>
              </div>
            ))
          ) : (
            <p>No reviews yet. Be the first to review!</p>
          )}
        </Paper>

        <Modal isOpen={isReviewModal} onClose={() => setIsReviewModal(false)}>
          <div style={{ width: "29rem", height: "27rem" }}>
            <div className="review-modal-title">
              <h4>Write Review</h4>
            </div>
            <div className="review-modal-top">
              <div>
                <img src={product?.image} />
              </div>
              <div>
                <p style={{ marginLeft: "5px" }}>{product?.name}</p>
                <StarRating value={rating} onChange={setRating} />
              </div>
            </div>
            <div className="review-modal-text">
              <TextareaAutosize
                placeholder="Please write product review here"
                onChange={(e) => setReview(e.target.value)}
              ></TextareaAutosize>
              <label>Select the image</label>
              <input type="file"></input>
              <Button onClick={handleSubmit}>Submit</Button>
            </div>
          </div>
        </Modal>

        <Modal
          isOpen={isShareModal}
          onClose={() => {
            setIsShareModal(false);
          }}
        >
          <div className="share-modal">
            <p>Share this link via</p>
            <hr />
            <div className="share-icons">
              <img src={facebook} alt="facebook" 
              onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`, '_blank')}/>
              <img src={whatsapp} alt="whatsapp"
              onClick={() => window.open(`https://wa.me/?text=${encodeURIComponent(currentUrl)}`, '_blank')}/>
              <img src={telegram} alt="telegram" 
               onClick={() => window.open(`https://t.me/share/url?url=${encodeURIComponent(currentUrl)}`, '_blank')}/>
              <img src={instagram} alt="instagram"
              onClick={() => window.open('https://www.instagram.com', '_blank')}/>
            </div>
            <p className="mb-2">Or Copy Link</p>
            <div className="share-input-container">
              <input
                type="text"
                value={currentUrl} readOnly 
              />
              <button onClick={handleCopy}>
                Copy
              </button>
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
