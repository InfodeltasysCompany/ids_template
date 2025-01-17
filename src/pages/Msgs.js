import React from "react";
import Styles from "./Msgs.module.css";

function Msgs({ messages }) {
  return (
    <div className={Styles.msgContainer}>
      {messages.map((msg, index) => (
        <div
          key={index}
          className={msg.sender === "user" ? Styles.userMsg : Styles.receiverMsg}
        >
          <p>{msg.text}</p>
        </div>
      ))}
    </div>
  );
}

export default Msgs;
