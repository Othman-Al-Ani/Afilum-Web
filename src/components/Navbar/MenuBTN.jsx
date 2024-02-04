import React from "react";
import "./MenuBTN.css";

const MenuBTN = ({ PageRef, ButtonText, Icon }) => {
  return (
    <div id="BTN_Div">
      <img src={Icon} id="Icon" />
      <a href={PageRef}>
        <button id="MenuBTN">{ButtonText}</button>
      </a>
    </div>
  );
};

export default MenuBTN;
