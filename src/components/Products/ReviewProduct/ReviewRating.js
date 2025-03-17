import React, { useState, useEffect } from "react";
import { Paper, Button, TextareaAutosize } from "@mui/material";
import { MdOutlineStarPurple500 } from "react-icons/md";
import StarRating from "./starRating";
import { Modal } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify"

const ReviewRating = ({ product }) => {
  const [reviews, setReview] = useState([]);
  const [rating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState("");
  const [isReviewModal, setIsReviewModal] = useState(false);

  useEffect(() => {
    if (product?.id) {
      const storedReviews =
        JSON.parse(localStorage.getItem("productReviews")) || {};
      setReview(storedReviews[product.id] || []);
    }
  }, [product?.id]);

  const handleSubmit = () => {
    if (!rating || !reviewText) {
      alert("Please provide both rating and review");
      return;
    }
    const newReview = {
      id: Date.now(),
      rating,
      review: reviewText,
      date: new Date().toISOString(),
    };
    const updatedReviews = [...reviews, newReview];
    setReview(updatedReviews);
    localStorage.setItem(
      "productReviews",
      JSON.stringify({
        ...JSON.parse(localStorage.getItem("productReviews") || "{}"),
        [product.id]: updatedReviews,
      })
    );
    toast.success("Review Added!", {
      position: "top-right",
    });
    setReviewText("");
    setRating(0);
    setIsReviewModal(false);
  };

  const averageRating =
    reviews.reduce((sum, review) => sum + review.rating, 0) /
    (reviews.length || 1);

  return (
    <>
      <Paper className="reviews-section">
        <div className="review-top">
          <h4>Ratings & Reviews</h4>
          <button
            onClick={() => setIsReviewModal(true)}
            style={{ width: "123px", height: "23px" }}
          >
            Rate Product
          </button>
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
      <Modal
        onClose={() => {
          setIsReviewModal(false);
        }}
        show={isReviewModal}
        onHide={() => setIsReviewModal(false)}
        centered
      >
        <div>
          <div className="review-modal-title">
            <h4>Write Review</h4>
          </div>
          <div className="review-modal-top">
            <div>
              <img src={product?.image} alt={product?.name} />
            </div>
            <div>
              <p style={{ marginLeft: "5px" }}>{product?.name}</p>
              <StarRating value={rating} onChange={setRating} />
            </div>
          </div>
          <div className="review-modal-text">
            <TextareaAutosize
              placeholder="Please write product review here"
              onChange={(e) => setReviewText(e.target.value)} 
              style={{
                width: "100%",
                minHeight: "100px",
                padding: "8px",
                borderRadius: "4px",
                border: "1px solid #ccc",
              }}
            />
            <label>Select the image</label>
            <input type="file" />
            <Button onClick={handleSubmit}>Submit</Button>
          </div>
        </div>
      </Modal>
      <ToastContainer />
    </>
  );
};

export default ReviewRating;
