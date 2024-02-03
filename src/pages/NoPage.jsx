// General Imports
import React from "react";
import { ChakraProvider } from "@chakra-ui/react";

// Assets imports
import AfilumLogo from "../assets/logo.png";

// Components import
import Navbar from "../components/navbar.jsx";

import "./NoPage.css";

const NoPage = () => {
  return (
    <>
      <ChakraProvider>
        <Navbar />
        <section id="welcome">
          <img src={AfilumLogo} id="welcomeLogo" alt="" />
          <h1> Uh Oh! </h1>
          <h1> 404 Not Found: This page does not exist! </h1>
        </section>
      </ChakraProvider>
    </>
  );
};

export default NoPage;
