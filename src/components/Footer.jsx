import React from "react";
import "../assets/css/Footer.css";
import footer_logo from '../assets/image/logo.png'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left - Logo + About */}
        <div className="footer-section about">
          <img
            src={footer_logo}
            alt="NEIEA Logo"
            className="footer-logo"
          />
          <h3 className="footer-title">NEIEA</h3>
          <p>
            Empowering communities through innovative education, skill development, 
            and equitable opportunities. Together, we create lasting change through 
            knowledge and opportunity.
          </p>
        </div>

        {/* Contact Info */}
        <div className="footer-section contact">
          <h4>Contact Information</h4>
          <p>Educational Innovation Center</p>
          <p>123 Learning Avenue, Education City</p>
          <p>Email: info@neiea.org</p>
          <p>Phone: +1 (555) 123-NEIEA</p>
        </div>

        {/* Newsletter */}
        <div className="footer-section newsletter">
          <h4>Stay Connected</h4>
          <p>Subscribe for updates and success stories.</p>
          <form>
            <input type="email" placeholder="Enter your email" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © 2025 NEIEA (The New Equitable and Innovative Educational Association). 
          All rights reserved. | Registered Non-Profit
        </p>
        <div className="footer-bottom-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Shipping & Delivery</a>
          <a href="#">Pricing Policy</a>
          <a href="#">Refund Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
