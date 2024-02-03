import React, { useState, useEffect } from "react";
import reactLogo from "../assets/react.svg";
import AfilumLogo from "../assets/logo.png";
import { Button, ButtonGroup } from "@chakra-ui/react";
import "../App.css";
import { Link } from "react-scroll";
import "./navbar.css";

import LogoBTN from "./logo.jsx";

function navbar() {
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      setIsTop(scrollTop === 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      id="navbar"
      style={{
        backgroundColor: isTop ? "transparent" : "#fffff9",
        transition: "background-color 0.3s ease",
      }}
    >
      <LogoBTN />

      <div className="navbarLink">
        <Link to="about" smooth={true} duration={50}>
          <Button colorScheme="black" variant="ghost" href="#about">
            About us
          </Button>
        </Link>

        <Button colorScheme="black" variant="ghost" href="#projects">
          Projects
        </Button>
        <Button colorScheme="black" variant="ghost" href>
          {" "}
          Contact us{" "}
        </Button>
      </div>
    </div>
  );
}

export default navbar;
