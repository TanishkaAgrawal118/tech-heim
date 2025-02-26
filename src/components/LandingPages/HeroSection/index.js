import React from "react";
import laptop from "../../../assets/laptop-home.svg";
import "./style.css";
import { Container } from "react-bootstrap";
import { motion } from "motion/react";
import ThreeSixty from "react-360-view";

const HeroSection = () => {
  const createRipple = (event) => {
    const button = event.currentTarget;
    const circle = document.createElement("span");

    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
    circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
    circle.classList.add("ripple");

    button.appendChild(circle);

    setTimeout(() => {
      circle.remove();
    }, 600);
  };
  return (
    <>
      <Container>
        <div className="hero">
          <div className="hero-left">
            <h1>Tech Heim</h1>
            <span style={{ display: "flex" }}>
              <p style={{ color: "#021736", margin: "0 5px 0 0" }}>
                "Join the{" "}
              </p>
              <p style={{ color: "#F45E0C" }}>digital revolution"</p>
            </span>
            <div className="light-effect"></div>
            {/* <button className="ripple-button" onClick={createRipple}> */}
            <button>
              Explore More
            </button>
          </div>

          <motion.div
            className="hero-right"
            animate={{
              rotateY: [0, 180],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              perspective: 1000,
              transformStyle: "preserve-3d",
            }}
          >
            <img src={laptop} alt="laptop" />
          </motion.div>
        </div>
      </Container>
    </>
  );
};

export default HeroSection;
