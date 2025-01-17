import React, { useState } from "react";
import "./Message.css"; // For styling
import { IoCloseSharp } from "react-icons/io5";
import Msgs from "./Msgs";

// Initial message array (start with a receiver message asking for the number)
const message1 = [
  { sender: "receiver", text: "Add your number and connect with us!" },
];

function Message() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [messages, setMessages] = useState([...message1]);
  const [text, setText] = useState("");
  const [number, setNumber] = useState("");

  // Function to open the modal
  const openModal = () => {
    setIsModalOpen(true);
    setIsVisible(false); // Hide the initial message container when modal opens
  };

  // Function to handle changes in the text input
  const onTextChange = (e) => {
    setText(e.target.value);
  };

  // Function to handle changes in the number input
  const onNumberChange = (e) => {
    setNumber(e.target.value);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
    setIsVisible(true);
  };

  // Function to close the initial message container
  const closeMessage = () => {
    setIsVisible(false);
  };

  // Function to handle sending the message
  const handleSendMessage = () => {
    if (number === "") {
      // If the number is empty, ask the user to provide it
      const newMessage = {
        sender: "receiver",
        text: "Add your number and connect with us!",
      };
      setMessages((prevMessages) => [...prevMessages, newMessage]);
    } else {
      // If the number is provided, send the user message
      const newMessage = {
        sender: "user",
        text: text,
      };
      setMessages((prevMessages) => [...prevMessages, newMessage]);
    }
    setText(""); // Clear the text input after sending the message
  };

  return (
    <>
      {/* Message container visible when not in modal */}
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

      {/* Modal overlay with message input */}
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
              {/* Input for phone number */}
              <input
                className="input-number"
                type="number"
                placeholder="Enter your number"
                value={number}
                onChange={onNumberChange}
              />
            </div>
            <div className="message-content1">
              {/* Render messages with the Msgs component */}
              <Msgs messages={messages} />
            </div>
            <div className="input-sendbtn">
              {/* Input for message text */}
              <input
                className="type-message"
                type="text"
                placeholder="Enter your message"
                value={text}
                onChange={onTextChange}
              />
              <button className="send-btn" onClick={handleSendMessage}>
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Message;
