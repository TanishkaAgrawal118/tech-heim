import React from "react";
import { Container } from "react-bootstrap";
import YourOrder from "../YourOrder";
import "./style.css";
import { useNavigate, useOutletContext, useParams } from "react-router";

const Checkout = ({ onProceed }) => {

  return (
    <Container>
      <div className="checkout">
        <div className="checkoutDetails">
          <div className="checkoutSection">
            <h4>User</h4>
            <div className="inputBox">Jimmy Smith</div>
          </div>

          <div className="checkoutSection">
            <h4>Ship to</h4>
            <div className="inputBox">
              HubSpot, 25 First Street, Cambridge MA 02141, United States
            </div>
          </div>

          <div className="checkoutSection">
            <h4>Shipping Method</h4>
            <div className="shippingOption">
              <input type="radio" name="shipping" /> Free Shipping{" "}
              <span>$0</span>
              <p>7-30 business days</p>
            </div>
            <div className="shippingOption">
              <input type="radio" name="shipping" /> Regular Shipping{" "}
              <span>$7.50</span>
              <p>3-14 business days</p>
            </div>
            <div className="shippingOption selected">
              <input type="radio" name="shipping" defaultChecked /> Express
              Shipping <span>$22.50</span>
              <p>1-3 business days</p>
            </div>
          </div>

          <a href="/cart" className="returnLink">
            Return to cart
          </a>
        </div>

        <div className="orderSummary">
          <YourOrder onProceed={onProceed}/>
        </div>
      </div>
    </Container>
  );
};

export default Checkout;
