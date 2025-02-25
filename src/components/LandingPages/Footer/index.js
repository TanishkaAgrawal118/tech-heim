import React from 'react';
import './footer.css';
import icons from '../../../assets/footerIcons.svg'
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-section">
        <h4>Company</h4>
        <p>about us</p>
        <p>blog</p>
        <p>returns</p>
        <p>order status</p>
      </div>

      <div className="footer-section">
        <h4>Info</h4>
        <p>How it works?</p>
        <p>our promises</p>
        <p>FAQ</p>
      </div>

      <div className="footer-section">
        <h4>Contact us</h4>
        <p>123 Main Street, Anytown, USA</p>
        <p>+1 (555) 123-4567</p>
        <p>TechHeimSupport@gmail.com</p>
      </div>

      <div className="footer-section">
        <h4>Sign up for News and updates</h4>
        <div className="email-input-container">
          <input type="email" placeholder="E-mail Address" />
        </div>
        <div className="social-icons">
          <img src={icons} alt='icons'/> 
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>© 2023 Tech Heim.</p>
        <div className="footer-links">
          <p>cookie settings</p>
          <p>Privacy Policy</p>
          <p>Terms and Conditions</p>
          <p>Imprint</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
