import React, { useState } from "react";
import "./Message.css"; // For styling
import { IoCloseSharp } from "react-icons/io5";

function Message() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const openModal = () => {
    setIsModalOpen(true);
    setIsVisible(false); // Close the message container when modal opens
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setIsVisible(true);
  };

  const closeMessage = () => {
    setIsVisible(false);
  };

  return (
    <>
      {isVisible && (
        <div className="message-container">
          <div className="message-content">
            <p>
              Need Help? <strong>Contact us now!</strong>
            </p>
            <button className="contact-btn" onClick={openModal}>
              Contact Us
            </button>
            <button className="close-btn" onClick={closeMessage}>
              X
            </button>
          </div>
        </div>
      )}

      {/* Modal for contact form */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-container">
            <div className="message-top">
              <h3>Send us a Message</h3>
              <div className="close-btn" onClick={closeModal}>
                <IoCloseSharp size={30} />
              </div>
            </div>
            <div className="number-input">
              <p className="p-title">Please add your valid mobile number</p>
              <input
                className="input-number"
                type="number"
                placeholder="Enter your number"
              />
            </div>
            <div className="message-content1">

            </div>
            <div className="input-sendbtn">
              <input
                className="type-message"
                type="text"
                placeholder="Enter your message"
              />
              <button className="send-btn">send</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Message;
