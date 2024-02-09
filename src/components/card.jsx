import React, { useState } from "react";
import reactLogo from "../assets/react.svg";
import "../App.css";
import Mail from ".././assets/mail.png";
import Phone from ".././assets/phone.png";
import LinkedIn from ".././assets/LinkedIn.png";
import "../pages/Contact.css";
import "../pages/Home.css";

function Card(data) {
  const { titel, mail, number,linked, image } = data;

  const [Ishover, setIshover] = useState(false);

  const handleEnter = () => {
    setIshover(true);
  };

  const handleLeave = () => {
    setIshover(false);
  };

  return (
    <div className="card" onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
      <img src={image} width={"100%"} alt="sätt in egen bild" />

      <div
        className="cardText"
        style={{
          height: Ishover ? "80%" : "20%",
          transition: "height 0.3s ease",
        }}
      >
        <h2
          style={{
            fontSize: 20,
          }}
        >
          {" "}
          {titel}{" "}
        </h2>
        {Ishover && (
          
              <div id="person_info_form_div" style={{
              opacity: Ishover ? 1 : 0,
              transition: "opacity 1s ease",
              fontSize: 12,
            }}>
                <div id="info_form">
                  <img src={Mail} alt="" id="icon" />
                  <h5>{mail}</h5>
                </div>
                <div id="info_form">
                  <img src={Phone} alt="" id="icon" />
                  <h5>{number}</h5>
                </div>
                <div id="info_form">
                  <img src={LinkedIn} alt="" id="icon" />
                  <a href="https://www.linkedin.com/company/afilum/">
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
