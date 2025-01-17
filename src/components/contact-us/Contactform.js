import React from "react";
import Styles from "./Contactform.module.css";
import { img } from "../../assets/images/Images";

function Contactform() {
  return (
    <div className={Styles.container}>
      <div className={Styles.formContent}>
        <div className={Styles.formHeader}>
          <h1>Get in Touch</h1>
        </div>

        {/* Dropdown menu */}
        <select className={Styles.dropdownInput}>
          <option value="" disabled selected>
            Select a service
          </option>
          <option value="free-quote">Get a Free Quote</option>
          <option value="demo-request">Request for Demo</option>

          <option value="Android-development">Android Development</option>
          <option value="Ios-development">Ios development</option>
          
          <option value="web-development">Web Development</option>
          <option value="digital-marketing">Digital Marketing</option>
          <option value="other-services">Other services</option>

        </select>

        <input type="text" placeholder="Enter your name" className={Styles.input} />
        <input type="tel" placeholder="Enter your number" className={Styles.input} />
        <input type="email" placeholder="Enter your email" className={Styles.input} />

        <button className={Styles.submitButton}>Contact-us</button>
      </div>

      <div className={Styles.image}>
        <img src={img.contact_us_form_side} alt="contact-side" />
      </div>
    </div>
  );
}

export default Contactform;
