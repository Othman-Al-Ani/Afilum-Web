import React from "react";
import "./navbarBTN.css";

const navbarBTN = ({ ButtonText, PageRef }) => {
  return (
    <>
      <a href={PageRef}>
        <button id="NavBTN">{ButtonText}</button>
      </a>
    </>
  );
};

export default navbarBTN;
