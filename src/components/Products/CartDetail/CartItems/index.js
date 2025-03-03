import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { Paper, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import deleteIcon from "../../../../assets/trash btn.svg";
import "./style.css";
import Footer from "../../../LandingPages/Footer";
import { useLocation, useNavigate } from "react-router";

const CartItems = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const product = state?.product;


  const [cartProduct, setCartProduct] = useState(product || {});

  const updateQuantity = (change) => {
    setCartProduct((prevProduct) => ({
      ...prevProduct,
      quantity: Math.max(1, prevProduct.quantity + change), 
    }));
  };

  const subtotal = (cartProduct.discountedPrice || 0) * (cartProduct.quantity || 1);
  const shipmentCost = cartProduct.shipmentCost || 0;
  const discount = ((cartProduct.originalPrice - cartProduct.discountedPrice) || 0) * (cartProduct.quantity || 1);
  const grandTotal = subtotal + shipmentCost;

  const handleCheckout = () => {
    navigate(`/cartDetails/${cartProduct.id}/checkout`, { state: { product: cartProduct } });
  };

  if (!product) {
    return <p>No product found in cart.</p>;
  }

  return (
    <>
      <Container>
        <div className="cartDetails">
          <div className="selectedCartItems">
            <Paper elevation={3} className="singleCart">
              <div className="itemImage">
                <img src={cartProduct.image} alt={cartProduct.name} />
              </div>

              <div className="itemDetails">
                <h5>{cartProduct.name}</h5>
                <p>
                  <strong>Color:</strong> {cartProduct.details?.color}
                </p>
                <p>{cartProduct.delivery}</p>
                <p><strong>{cartProduct.guarantee}</strong></p>
                <p>
                  <del>${cartProduct.originalPrice?.toFixed(2)}</del> &nbsp;
                  <strong>${cartProduct.discountedPrice?.toFixed(2)}</strong>
                </p>
              </div>

              <div className="itemActions">
                <IconButton color="error">
                  <img src={deleteIcon} alt="delete" />
                </IconButton>

                <div className="quantityControl">
                  <IconButton size="small" onClick={() => updateQuantity(-1)}>
                    <RemoveIcon />
                  </IconButton>
                  <span>{cartProduct.quantity}</span>
                  <IconButton size="small" onClick={() => updateQuantity(1)}>
                    <AddIcon />
                  </IconButton>
                </div>
              </div>
            </Paper>
          </div>

          <div className="cartPayment">
            <Paper elevation={3} className="paymentDetails">
              <h4>Payment Details</h4>
              <div className="paymentRow">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="paymentRow">
                <span>Discount</span>
                <span>-${discount.toFixed(2)}</span>
              </div>
              <div className="paymentRow">
                <span>Shipment cost</span>
                <span>${shipmentCost.toFixed(2)}</span>
              </div>
              <hr />
              <div className="paymentRow">
                <strong>Grand Total</strong>
                <strong>${grandTotal.toFixed(2)}</strong>
              </div>
              <button className="checkoutButton" onClick={handleCheckout}>
                Proceed to checkout
              </button>
            </Paper>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default CartItems;
