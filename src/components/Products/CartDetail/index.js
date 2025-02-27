import React from "react";
import NavBar from "../../LandingPages/Navbar/NavBar";
import Stepper from "./Stepper";
import './style.css'

const CartDetail = () => {
  const currentStep = 0;
  return (
    <>
      <NavBar />
      <div className="cart-detail-container">
        <Stepper currentStep={currentStep} />
      </div>
    </>
  );
};

export default CartDetail;
