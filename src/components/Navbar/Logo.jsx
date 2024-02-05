import React from "react";
import "./Logo.css";
import AfilumLogo from "../../assets/logo.png";

import { Link } from "react-router-dom";

const logo = () => {
  return (
    
    <Link to={"/Home"} className="logoLink">
      <a>
        {" "}
        <img src={AfilumLogo} alt="" className="logoBTN" />{" "}
      </a>
    </Link>
  );
};

export default logo;
