import React from "react";
import laptop from "../../../assets/laptop-home.svg";
import "./style.css";
import { Container } from "react-bootstrap";
import { motion } from "motion/react";

const HeroSection = () => {
  const [cursorPos, setCursorPos] = React.useState({ x: 0, y: 0 });
  const handleMouseMove = (event) => {
    setCursorPos({
      x: event.clientX,
      y: event.clientY,
    });
  };

  return (
    <>
      <Container>
        <div className="hero" onMouseMove={handleMouseMove}>
          <div className="hero-left">
            <h1>Tech Heim</h1>
            <span style={{ display: "flex", gap: "5px" }}>
              <p style={{ color: "#021736", margin: "0 5px 0 0" }}>
                "Join the{" "}
              </p>
              <p style={{ color: "#F45E0C", margin: "0 5px 0 10px" }}>
                digital revolution"
              </p>
            </span>
            <div className="light-effect-small"></div>
            <div
              className="light-effect"
              style={{
                top: cursorPos.y - 50,
                left: cursorPos.x - 50,
              }}
            ></div>

            <button>Explore More</button>
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
