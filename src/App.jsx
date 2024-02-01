import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import AfilumLogo from "./assets/logo.png";
import viteLogo from "/vite.svg";
import Card from "./card.jsx";
import "./App.css";
import {} from "react";

function App() {
  const [count, setCount] = useState(0);

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
    <>
      <div
        id="navbar"
        style={{
          backgroundColor: isTop ? "transparent" : "#fffff9",
          transition: "background-color 0.3s ease",
        }}
      >
        <a href="#welcome" className="logoLink">
          {" "}
          <img src={AfilumLogo} alt="" className="logo" />{" "}
        </a>

        <div className="navbarLink">
          <a href="#about">about</a>
          <a href="#projects">projects</a>
          <button href> Blackie </button>
        </div>
      </div>

      <section id="welcome">
        <img src={AfilumLogo} id="welcomeLogo" alt="" />
        <h1> Där teknologin möter expertis </h1>
      </section>

      <section id="about">
        <h1>about</h1> 

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
