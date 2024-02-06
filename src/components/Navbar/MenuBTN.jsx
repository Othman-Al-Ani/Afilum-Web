import React from "react";
import "./MenuBTN.css";

const MenuBTN = ({ PageRef, ButtonText }) => {
  return (
    <div id="BTN_Div">
  
      <a href={PageRef}>
        <button id="MenuBTN">{ButtonText}</button>
      </a>
    </div>
  );
};

export default MenuBTN;
