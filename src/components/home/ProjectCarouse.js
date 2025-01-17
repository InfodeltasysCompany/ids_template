import React,{} from "react";
// import { img } from "../../assets/images/Images"; // Make sure that the image is correctly imported
import "./carousel.css";
import { img } from "../../assets/images/Images";
import { useNavigate } from "react-router-dom";

function ProjectCarouse({item}) {
  const navigate = useNavigate();
  
  return (
    <div className="carosel-container">
      <div className="content">
        <p className="title"><span>
        {item?item.ques:"Custom Website Design"}
          </span></p>
        <p className="disc">
        {item?item.disc:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias eveniet, dolore fuga et laboriosam repellat repellendus sint placeat.
`}

         </p>
        <button className="submit" onClick={()=>{navigate("/Contact-us")}}>Request for Demo</button>
      </div>
      <div className="image">
        <img src={item?item.img:img.customWebsite} alt="Custom Website" />
      </div>
    </div>
  );
}

export default ProjectCarouse;
