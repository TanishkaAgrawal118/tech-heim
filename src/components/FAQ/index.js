import React, { useEffect, useState } from "react";
import NavBar from "../LandingPages/Navbar/NavBar";
import { Container } from "react-bootstrap";
import frequently from "../../../src/assets/FAQ.svg";
import { Link } from "react-router";
import Footer from "../LandingPages/Footer";
import "./faq.css";
import { faqs } from "../constants/constant";
import arrowUp from "../../../src/assets/arrow-up.svg";
import Aos from "aos";

const FAQ = () => {
  useEffect(() => {
    Aos.init({
      duration: 800,
      once: true,
    });
  }, []);
  const [openQuestion, setOpenQuestion] = useState(null);
  const toggleFAQ = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };
  return (
    <>
      <NavBar />
      <Container>
        <div className="navigation">
          <Link to="/" style={{ color: "#717171" }}>
            Home
          </Link>{" "}
          &gt;{" "}
          <Link className="active" to="/FAQ">
            FAQ
          </Link>
        </div>
        <img
          src={frequently}
          alt="FAQ"
          className="faqImage"
          data-aos="fade-right"
        />
        <div className="faq-container">
          <div className="faq-section">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`faq-item ${openQuestion === index ? "open" : ""}`}
              >
                <div className="d-flex justify-content-between">
                  <h4 onClick={() => toggleFAQ(index)}>{faq.question}</h4>
                  <img
                    src={arrowUp}
                    alt="arrow-up"
                    onClick={() => toggleFAQ(index)}
                    style={{ cursor: "pointer" }}
                  />
                </div>

                <p>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>

      <Footer />
    </>
  );
};

export default FAQ;
