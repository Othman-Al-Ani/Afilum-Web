// General imports
import { ChakraProvider } from "@chakra-ui/react";
import "./Home.css";

// Assets
import AfilumLogo from "../assets/logo.png";
import reactLogo from "../assets/react.svg";
import sexiColin from "../assets/sexiColin.jpg";
import LinkedIn from ".././assets/LinkedIn.png";

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

        <section id="welcome">
          <img src={AfilumLogo} id="welcomeLogo" alt="" />
          <h1> Where mechanical expertise converges with technology </h1>
       

            <a  href="https://www.linkedin.com/company/afilum/" >
              <img id="linkedinLink" src={LinkedIn} alt="" />

            </a>

        
        </section>

        <section id="about">
          <h1>About</h1>
          <h2 className="about h2"
            style={{
              fontSize: 20,
            }}
          >
            The five faces that represents Afilum.{" "}
          </h2>

          <div id="faceCard">
            <Card
              titel="Ellis Jansson"
              description="The specialist who excel in design"
              image={reactLogo}
            />
            <Card
              titel="Igor Szubert"
              description=""
              image={reactLogo}
            />
            <Card
              titel="Othman Al Ani"
              description="skriv om dig"
              image={reactLogo}
            />
            <Card
              titel="Colin Bexell"
              description="skriv om dig"
              image={sexiColin}
            />
            <Card
              titel="Olivia Lindén"
              description="skriv om dig"
              image={reactLogo}
            />
          </div>
        </section>

        <section id="projects">
          <div id="projectText">
            <h1> What is Afilum</h1>

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
          <div id="Timeline">
            <h1>Timeline</h1>

            <div id="timelineCard">
              <Timeline />
            </div>
          </div>

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
