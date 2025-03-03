import React from "react";
import { useLocation, useParams } from "react-router-dom";
import NavBar from "../../LandingPages/Navbar/NavBar";
import Stepper from "./Stepper";
import "./style.css";
import { Outlet } from "react-router";

const CartDetail = () => {
  const location = useLocation();
  const { id } = useParams(); 

  const getCurrentStep = () => {
    if (location.pathname === `/cartDetails/${id}`) return 0; 
    if (location.pathname === `/cartDetails/${id}/checkout`) return 1; 
    if (location.pathname === `/cartDetails/${id}/payment`) return 2; 
    return 0; 
  };

  const currentStep = getCurrentStep();

  return (
    <>
      <NavBar />
      <Stepper currentStep={currentStep} />
      <div className="cart-detail-container">
        <Outlet context={{ productId: id }} />
      </div>
    </>
  );
};

export default CartDetail;
