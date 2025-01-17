import React from "react";
import "./Procedure.css";
import { useNavigate } from "react-router-dom";

function HiringProcess() {
  const navigation = useNavigate();
  return (
    <div className="home-procedure">
      <h2>Our Hiring Process</h2>
      <div className="procedure-cards">
        <div className="procedure-card">
          <div className="normal">
            <h3 className="card-title">1. Understand Your Need</h3>
            <p className="card-description">
              Share your requirements and goals with us. We'll discuss your
              vision for the project and understand your needs.
            </p>
          </div>
          <div className="hovered">
            <button className="contact-btn" onClick={() => { navigation("/contact-us"); }}>
              Contact Us
            </button>
          </div>
        </div>

        <div className="procedure-card">
          <div className="normal">
            <h3 className="card-title">2. Internal Discussion</h3>
            <p className="card-description">
              We internally review your requirements and have a discussion to
              align with the best approach and resources for the project.
            </p>
          </div>
          <div className="hovered">
            <button className="contact-btn" onClick={() => { navigation("/contact-us"); }}>
              Contact Us
            </button>
          </div>
        </div>

        <div className="procedure-card">
          <div className="normal">
            <h3 className="card-title">3. Sign the Contract</h3>
            <p className="card-description">
              Once everything is finalized, we move forward with a contract to
              ensure clarity, transparency, and commitment.
            </p>
          </div>
          <div className="hovered">
            <button className="contact-btn" onClick={() => { navigation("/contact-us"); }}>
              Contact Us
            </button>
          </div>
        </div>

        <div className="procedure-card">
          <div className="normal">
            <h3 className="card-title">4. Assign Best Designer to Approve Design</h3>
            <p className="card-description">
              We assign a top designer to create and approve the design according to your specifications and feedback.
            </p>
          </div>
          <div className="hovered">
            <button className="contact-btn" onClick={() => { navigation("/contact-us"); }}>
              Contact Us
            </button>
          </div>
        </div>

        <div className="procedure-card">
          <div className="normal">
            <h3 className="card-title">5. Start the Work</h3>
            <p className="card-description">
              With the design approved, we begin executing the project as per the agreed-upon plan, with constant updates for you.
            </p>
          </div>
          <div className="hovered">
            <button className="contact-btn" onClick={() => { navigation("/contact-us"); }}>
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HiringProcess;
