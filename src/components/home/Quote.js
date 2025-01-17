import React from "react";
import "./FreeQuote.css";
import { BsGlobeCentralSouthAsia } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { services } from "../../utils/static_data";
function Quote() {
  const navigation = useNavigate();
  return (
    <div className="quote-container">
      <div className="quote-top-content">
        <h1>
          Reach out to the world’s most reliable IT service Software company in
          Lucknow.
        </h1>
        <button className="top-button" onClick={()=>{navigation("/contact-us")}}>Get a free Quote</button>
      </div>
      <div className="quote-box-items">
    {services.length>0&& services.map((item)=>(
      <div className="quote-box-item" key={item.id}>
      <div className="normal">
        <div className="icon">
          <BsGlobeCentralSouthAsia size={70} />
        </div>
        <div className="box-content">
          <h3 className="title">{item.title}</h3>
          <p className="disc">
           {item.description} </p>
        </div>
        <div className="free-quote-btn-box">
          <button className="free-quote-btn" onClick={()=>{navigation("/contact-us")}}>Get a Free Quote</button>
        </div>
      </div>
    </div>
    ))}
        
       
      
      </div>
    </div>
  );
}

export default Quote;
