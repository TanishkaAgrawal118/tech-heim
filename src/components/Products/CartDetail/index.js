import React, { useState } from "react";
import NavBar from "../../LandingPages/Navbar/NavBar";
import Stepper from "./Stepper";
import "./style.css";
import Footer from "../../LandingPages/Footer/index.js";
import CartItems from "./CartItems/index.js";
import Checkout from "./Checkout/index.js";

const CartDetail = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const handleProceedToCheckout = () => {
    setCurrentStep(1);
  };
  return (
    <>
      <NavBar />
      <Stepper currentStep={currentStep} />
      <div className="cart-detail-container">
        {currentStep === 0 && <CartItems onProceed={handleProceedToCheckout} />}
        {currentStep === 1 && <Checkout />}
      </div>

    </>
  );
};

export default CartDetail;
