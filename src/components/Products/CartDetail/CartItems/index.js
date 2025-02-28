import React from "react";
import { Container } from "react-bootstrap";
import { Paper, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import laptop1 from "../../../../assets/laptop2.svg";
import RemoveIcon from "@mui/icons-material/Remove";
import deleteIcon from "../../../../assets/trash btn.svg";
import "./style.css";
import Footer from "../../../LandingPages/Footer";

const CartItems = ({ onProceed }) => {
  const items = [
    {
      id: 1,
      name: "MacBook Pro M2 MNEJ3 2022 LLA 13.3 inch",
      price: 433.0,
      originalPrice: 1299.0,
      color: "Black",
      delivery: "Free Delivery",
      guarantee: "Guaranteed",
      image: laptop1,
      quantity: 1,
    },
  ];

  return (
    <>
      <Container>
        <div className="cartDetails">
          <div className="selectedCartItems">
            {items.map((item) => (
              <Paper key={item.id} elevation={3} className="singleCart">
                <div className="itemImage">
                  <img src={item.image} alt={item.name} />
                </div>

                <div className="itemDetails">
                  <h5>{item.name}</h5>
                  <p>
                    <strong>Color:</strong> {item.color}
                  </p>
                  <p>{item.delivery}</p>
                  <p>{item.guarantee}</p>
                  <p>
                    <del>${item.originalPrice.toFixed(2)}</del> &nbsp;
                    <strong>${item.price.toFixed(2)}</strong>
                  </p>
                </div>

                <div className="itemActions">
                  <IconButton color="error">
                    <img src={deleteIcon} alt="delete" />
                  </IconButton>

                  <div className="quantityControl">
                    <IconButton size="small">
                      <RemoveIcon />
                    </IconButton>
                    <span>{item.quantity}</span>
                    <IconButton size="small">
                      <AddIcon />
                    </IconButton>
                  </div>
                </div>
              </Paper>
            ))}
          </div>

          <div className="cartPayment">
            <Paper elevation={3} className="paymentDetails">
              <h4>Payment Details</h4>
              <div className="paymentRow">
                <span>Subtotal</span>
                <span>$519.52</span>
              </div>
              <div className="paymentRow">
                <span>Discount</span>
                <span>-$111.87</span>
              </div>
              <div className="paymentRow">
                <span>Shipment cost</span>
                <span>$22.50</span>
              </div>
              <hr />
              <div className="paymentRow">
                <strong>Grand Total</strong>
                <strong>$543.02</strong>
              </div>
              <button className="checkoutButton" onClick={onProceed}>
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
