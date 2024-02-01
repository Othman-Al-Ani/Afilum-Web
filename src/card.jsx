import React, { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";


function Card() {


  const [Ishover, setIshover] = useState(false);

const handleEnter = () => {
    setIshover(true);
  };

  const handleLeave = () => {
    setIshover(false);
  };




  return (
  <div className="card" 
  onMouseEnter={handleEnter}
  onMouseLeave={handleLeave}>

    
       
  <img src={reactLogo} width={"100%"} alt="sätt in egen bild" />

<div
  className="cardText"
  style={{
    height: Ishover ? "80%" : "20%",
    transition: "height 0.3s ease",
  }}
  
>
  <h2> Namn och titel </h2>
  {Ishover && (
    <p
      style={{
        opacity: Ishover ? 1 : 0,
        transition: "opacity 1s ease",
      }}
    >
      Om dig själv 
    </p>
  )}
</div>
</div>
  );

};

export default Card;