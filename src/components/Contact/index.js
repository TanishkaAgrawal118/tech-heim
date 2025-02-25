import React from "react";
import NavBar from "../LandingPages/Navbar/NavBar";
import Footer from "../LandingPages/Footer";
import "./contact.css";
import { Container } from "react-bootstrap";
import contact1 from '../../../src/assets/contact1.svg'
import contact2 from '../../../src/assets/contact2.svg'
import contact3 from '../../../src/assets/contact3.svg'
import { Link } from "react-router";

const Contact = () => {
  return (
    <>
      <NavBar />
      <Container>
        <div className="contact-container">
          <div className="navigation">
           <Link to="/">Home</Link> &gt; <Link className="active" to="/contact">Contact Us</Link>
          </div>

          <div className="contact-info">
            <div className="contact-item">
             <img src={contact1} alt="contact"/>
              <h3>Office</h3>
              <p>123 Main Street, Anytown, USA</p>
            </div>

            <div className="contact-item">
            <img src={contact2} alt="contact"/>
              <h3>Email</h3>
              <p>info@techheim.com</p>
            </div>

            <div className="contact-item">
            <img src={contact3} alt="contact"/>
              <h3>Phone</h3>
              <p>+1 (555) 123-4567</p>
            </div>
          </div>

          <div className="contact-form">
            <div className="contact-message">
              <h2>Message us</h2>
              <p>
                We're here to assist you every step of the way. Whether you have
                a question, need technical support, or simply want to share your
                feedback, our dedicated team is ready to listen and provide
                prompt assistance.
              </p>
            </div>
            <div className="contact-form">
              <form>
                <input type="text" placeholder="Your Name *" required />
                <input type="email" placeholder="Email *" required />
                <textarea placeholder="Message"></textarea>
                <button type="submit">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </Container>

      <Footer />
    </>
  );
};

export default Contact;
