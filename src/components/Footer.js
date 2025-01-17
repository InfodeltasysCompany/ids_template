import React from 'react';
import './Footer.css'; // Import the CSS file for styling
import { img } from "../assets/images/Images"; // Import the image assets (ensure this path is correct)

function Footer() {
  return (
    <div className="footer">
      <div className="footer-content">
        {/* Logo Section */}
        <div className="footer-logo">
          <img src={img.idslogo} alt="Logo" className="logo" />
        </div>
        
        {/* About Company Section */}
        <div className="footer-about">
          <h3>About Company</h3>
          <p>InfoDeltaSys is a dynamic and innovative organization dedicated to providing comprehensive technological solutions tailored to meet the unique challenges and requirements of your business.</p>
        </div>

        {/* Services Section */}
        <div className="footer-services">
          <h3>Our Services</h3>
          <ul>
            <li>Website Design & Development</li>
            <li>Mobile App Development</li>
            <li>Search Engine Optimization</li>
            <li>Software Development</li>
            <li>Software/Website Training Program</li>
          </ul>
        </div>

        {/* Contact Info Section */}
        <div className="footer-contact">
          <h3>Contact</h3>
          <p>+91-5223525890</p>
          <p>+91-8090387120</p>
          <div className="footer-social">
            <ul>
              <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
              <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
              <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} InfoDeltaSys Software Solutions (OPC) Pvt. Ltd. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
