// General
import React from "react";
import "./Projects.css";

//Assets
import AfilumLogo from "../assets/logo.png";

//Components
import Navbar from "../components/Navbar/navbar";
import { ChakraProvider } from "@chakra-ui/react";

const Projects = () => {
  return (
    <>
      <ChakraProvider>
        <Navbar />
        <section id="welcome">
          <img src={AfilumLogo} id="welcomeLogo" alt="" />
          <h1> This page is empty for now </h1>
        </section>
      </ChakraProvider>
    </>
  );
};

export default Projects;
