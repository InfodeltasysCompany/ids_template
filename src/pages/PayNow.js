import React from 'react';
import Styles from "./PayNow.module.css";
import { img } from "../assets/images/Images";

function PayNow() {
  return (
    <div className={Styles.container}>
      <img src={img.payfund} alt="payfund" />
      <div className={Styles.formcontent}>
        <h1>Pay Fund</h1>
        <input type="text" placeholder="Enter your name" />
        <input type="tel" placeholder="Enter your number" />
        <input type="email" placeholder="Enter your email" />
        <input type="numeric" placeholder="Enter your amount" />

        <button>Pay</button>
      </div>
    </div>
  );
}

export default PayNow;
