import React from "react";
import "./Logo.css";

import AfilumIcon from "../../assets/favicon.ico";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    
    <Link to={"/Home"} className="logoLink">
      <a>
        {" "}
        <img src={AfilumIcon} alt="" className="logoBTN" />{" "}
      </a>
    </Link>
  );
};

export default Logo;
