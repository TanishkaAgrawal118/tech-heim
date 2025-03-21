import React from "react";
import cartStepperActive from "../../../../assets/stepper circle11.svg";
import cartStepperInactive from "../../../../assets/stepper circle11.svg";
import checkoutStepperActive from "../../../../assets/stepper circle22.svg";
import checkoutStepperInactive from "../../../../assets/stepper circle2.svg";
import paymentStepperActive from "../../../../assets/stepper circle33.svg";
import paymentStepperInactive from "../../../../assets/stepper circle3.svg";
import "./style.css";

const Stepper = ({ currentStep }) => {
  const steps = [
    {
      name: "Cart",
      activeImg: cartStepperActive,
      inactiveImg: cartStepperInactive,
    },
    {
      name: "Checkout",
      activeImg: checkoutStepperActive,
      inactiveImg: checkoutStepperInactive,
    },
    {
      name: "Payment",
      activeImg: paymentStepperActive,
      inactiveImg: paymentStepperInactive,
    },
  ];

  return (
    <div className={`stepper ${currentStep === 1 ? "stepper-checkout" : ""}`}>
      {steps.map((step, index) => (
        <div
          key={index}
          className={`step ${currentStep === index ? "active" : ""}`}
        >
          <img
            src={currentStep >= index ? step.activeImg : step.inactiveImg}
            alt={step.name}
          />
          <p className={currentStep >= index ? "active-text" : "inactive-text"}>
            {step.name}
          </p>
          {index < steps.length - 1 && (
            <div className="line-wrapper">
              <div
                className={`line left ${
                  currentStep >= 1 && index === 0 ? "checkout-line" : ""
                }`}
              ></div>
              <div
                className={`line right ${
                  currentStep === 2 && index === 1 ? "payment-line" : ""
                }`}
              ></div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Stepper;
