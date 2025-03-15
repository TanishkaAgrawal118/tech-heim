import React, { useState } from "react";
import { Container } from "react-bootstrap";
import YourOrder from "../YourOrder";
import "./style.css";

const Checkout = ({ onProceed }) => {
  const [selectedShipping, setSelectedShipping] = useState("express");
  const handleShippingSelect = (option) => {
    setSelectedShipping(option);
  };
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
              HubSpot, 25 First Street, Cambridge, United States
            </div>
          </div>
          <div className="checkoutSection">
            <h4>Shipping Method</h4>
            <div 
              className={`shippingOption ${selectedShipping === "free" ? "selected" : ""}`}
              onClick={() => handleShippingSelect("free")}
            >
              <input 
                type="radio" 
                name="shipping" 
                checked={selectedShipping === "free"} 
                readOnly 
              /> 
              Free Shipping <span>$0</span>
              <p>7-30 business days</p>
            </div>
            <div 
              className={`shippingOption ${selectedShipping === "regular" ? "selected" : ""}`}
              onClick={() => handleShippingSelect("regular")}
            >
              <input 
                type="radio" 
                name="shipping" 
                checked={selectedShipping === "regular"} 
                readOnly 
              />
              Regular Shipping <span>$7.50</span>
              <p>3-14 business days</p>
            </div>
            <div 
              className={`shippingOption ${selectedShipping === "express" ? "selected" : ""}`}
              onClick={() => handleShippingSelect("express")}
            >
              <input 
                type="radio" 
                name="shipping" 
                checked={selectedShipping === "express"} 
                readOnly 
              /> 
              Express Shipping <span>$22.50</span>
              <p>1-3 business days</p>
            </div>
          </div>
        </div>
        <div className="orderSummary">
          <YourOrder onProceed={onProceed}/>
        </div>
      </div>
    </Container>
  );
};

export default Checkout;
