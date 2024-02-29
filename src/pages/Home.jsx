// General imports
import { ChakraProvider } from "@chakra-ui/react";
import "./Home.css";

// Assets
import AfilumLogo from "../assets/logo.png";
import reactLogo from "../assets/react.svg";
import LinkedIn from ".././assets/LinkedIn.png";
import bgImage from "../assets/bg.png";


import Colin from "../assets/Colin.jpg";
import Ellis from "../assets/Ellis.jpg";
import Igor from "../assets/Igor.jpg";
import Olivia from "../assets/Olivia.jpg";
import Othman from "../assets/Othman.jpg";

// Components imports
import Card from "../components/card.jsx";
import Navbar from "../components/Navbar/navbar.jsx";
import Timeline from "../components/timeline.jsx";
import Footer from "../components/footer.jsx";

function Home() {
  return (
    <>
      <ChakraProvider>
        <Navbar />

        <section id="welcome" >
          <img src={AfilumLogo} id="welcomeLogo" alt="" />
          <h1> Where mechanical expertise converges with technology </h1>
       

            <a  href="https://www.linkedin.com/company/afilum/" >
              <img id="linkedinLink" src={LinkedIn} alt="" />

            </a>

        
        </section>

        <section id="about" >
          <h1>About</h1>
          <h2 className="about h2"
            style={{
              fontSize: 20,
              marginTop: 20,
              
            }}
          >
            The five faces that represents Afilum.{" "}
          </h2>

          <div id="faceCard">
            <Card
              titel="Ellis Jansson"
              mail="ellis.jansson5@gmail.com"
              number="+46731558896"
              linked="LinkedIn"
              image={Ellis}
              link = "https://www.linkedin.com/in/ellis-jansson-2834a12b2/"
            />
            <Card
              titel="Igor Szubert"
              mail="szubertigor@gmail.com"
              number="+46764074280"
              linked="LinkedIn"
              image={Igor}
              link = "https://www.linkedin.com/in/igor-szubert-5a42702aa/"
            />
            <Card
              titel="Othman Al Ani"
              mail="othman2003alani@gmail.com"
              number="+46729345251"
              linked="LinkedIn"
              image={Othman}
              link = "https://www.linkedin.com/in/othman-alani-8133b4251/"
            />
            <Card
              titel="Colin Bexell"
              mail="colinbexell@gmail.com"
              number="+4601609060"
              linked="LinkedIn"
              image={Colin}
              link = "https://www.linkedin.com/in/colin-bexell-b7905129b/"
            />
            <Card
              titel="Olivia Lindén"
              mail="oliviam.linden@gmail.com"
              number="+46725331927"
              linked="LinkedIn"
              image={Olivia}
              link = "https://www.linkedin.com/in/olivia-lind%C3%A9n-6ba951295/"
            />
          </div>
        </section>

        <section id="projects">
          <div id="projectText">
            <h1> What is Afilum?</h1>

            <p>
            Afilum is a company that consists of five young entrepreneurs. 
            We digitize the process between mechanics and customers within trailer workshops. 
            Through our digitized system, we minimize the risk of mistakes and reduce the time for administrative work.
            </p>
          </div>

          <div id="projectVid">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/sUKLajoQfTs"
              title="AFILUM"
              frameborder="5"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </section>

        <section id="vision">
          {/* <div id="Timeline">
            <h1>Timeline</h1>

            <div id="timelineCard">
              <Timeline />
            </div>
          </div> */}

          <div id="visionText">
            <h1> Our Vision</h1>

            <p>
            With our prototype, mechanics can efficiently review units and monitor their tasks across workshops. 
            We've digitalized the unit format, ensuring consistency across locations. 
            Mechanics receive prompt feedback on starting tasks based on customer needs. 
            Additional features enhance workshop efficiency and task management. 
            With this we proudly present Afilum, where mechanical expertise converges with advanced technology.
            </p>
          </div>
        </section>

        <Footer />
      </ChakraProvider>
    </>
  );
}

export default Home;
