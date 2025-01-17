import React from "react";
import "./HomeCompany.css"; // Ensure you have the correct CSS file
import gifImage from "../../assets/swecompany.gif"; // Path to your GIF image
import { useNavigate } from "react-router-dom";

function HomeCompany() {
  const navigation = useNavigate();
  return (
    <div className="home-company-container">
      <div className="home-image-container">
        <img
          src={gifImage}
          alt="InfoDeltaSys Services"
          className="service-gif"
        />
      </div>
      <div className="home-company-content">
        <div className="text-content">
          <h1 className="home-text-content-title text-align-center">Software Company in Lucknow</h1>
          <p className="home-text-content-subtitle text-align-center">
            Our Software Development Company in Lucknow are among the top
            Software Development Companies at Lucknow, Uttar Pradesh, and India.
          </p>

          <p className="home-text-content-disc1 text-align-center">
            InfoDeltaSys is your comprehensive solution for website design and
            development in Lucknow. Our primary goal is to create unique and
            innovative websites and web-based products that enhance our
            customers’ value. Our expert team excels in delivering captivating
            user experiences. We specialize in website design services, QA
            testing, maintenance, mobile application development, and more. Our
            skilled developers are also proficient in UX/UI design, digital
            marketing, SEO services, and beyond.
          </p>
          <p className="home-text-content-disc2 text-align-center">
            With InfoDeltaSys, you get a partner dedicated to bringing your
            digital vision to life. Hire Software Company Lucknow Team Today!
          </p>

          {/* Button */}
          <div className="home-text-content-contact-btn text-align-center">
            <button className="contact-button" onClick={()=>{navigation("/contact-us")}}>Get In Touch With Us</button>
          </div>
        </div>

        {/* Image on the right */}
      </div>
    </div>
  );
}

export default HomeCompany;
