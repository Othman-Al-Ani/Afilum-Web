import React, { useState } from "react";
import reactLogo from "../assets/react.svg";
import "../App.css";
import Mail from ".././assets/mail.png";
import Phone from ".././assets/phone.png";
import LinkedIn from ".././assets/LinkedIn.png";
import "../pages/Contact.css";
import "../pages/Home.css";

import Colin from "../assets/Colin.jpg";
import Ellis from "../assets/Ellis.jpg";
import Igor from "../assets/Igor.jpg";
import Olivia from "../assets/Olivia.jpg";
import Othman from "../assets/Othman.jpg";


function Card(data) {
  const { titel, mail, number,linked, image, link } = data;

  const [Ishover, setIshover] = useState(false);

  const handleEnter = () => {
    setIshover(true);
  };

  const handleLeave = () => {
    setIshover(false);
  };

  return (
    <div className="card" onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
      <img src={image} id="bgImg" alt="" />

      <div
        className="cardText"
        style={{
         height: Ishover ? "70%" : "20%",
        
          transition: "height 0.2s ease",
        }}
      >
        <h2 
       
        >
          {" "}
          {titel}{" "}
        </h2>


        {Ishover && (
          <div
            id="person_info_form_div"
            style={{
              opacity: Ishover ? 1 : 0,
              transition: "opacity 1s ease",
              fontSize: 12,
            }}
          >
      
           
                <div id="info_form2">
                  <img src={Mail} alt="" id="icon" />
                  <a href={`mailto:${mail}`}>
                    <h5>{mail}</h5>
                  </a>
                </div>
                <div id="info_form2">
                  <img src={Phone} alt="" id="icon" />
                  <h5>{number}</h5>
                </div>
                <div id="info_form2">
                  <img src={LinkedIn} alt="" id="icon" />
                  <a href={link}>
                    <h5>{linked}</h5>
                  </a>
                  
                </div>
              </div>
            
          
        )}
      </div>
    </div>
  );
}

export default Card;
