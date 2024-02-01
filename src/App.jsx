import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import AfilumLogo from "./assets/logo.png";
import viteLogo from "/vite.svg";
import Card from "./components/card.jsx";
import Navbar from "./components/navbar.jsx";
import "./App.css";
import {} from "react";

function App() {
  
 
 
  return (
    <>
      
      <Navbar />

      <section id="welcome">
        <img src={AfilumLogo} id="welcomeLogo" alt="" />
        <h1> Där teknologin möter expertis </h1>
      </section>

      <section id="about">
        <h1>About</h1> 

        
        <div id="faceCard"> 
        <Card titel="namn och titel"
         description="skriv om dig"
        image={reactLogo} />
         <Card titel="namn och titel"
         description="skriv om dig"
        image={reactLogo} />
         <Card titel="namn och titel"
         description="skriv om dig"
        image={reactLogo} />
         <Card titel="namn och titel"
         description="skriv om dig"
        image={reactLogo} />
         <Card titel="namn och titel"
         description="skriv om dig"
        image={reactLogo} />
       </div>
       


      </section>

      <section id="projects">
        <h1>projects</h1>
        <a href="#welcome">back</a>
      </section>
    </>
  );
}

export default App;
