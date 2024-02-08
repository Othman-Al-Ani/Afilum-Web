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
          <h1> Där teknologin möter expertis </h1>
       

            <a  href="https://www.linkedin.com/company/afilum/" >
              <img id="linkedinLink" src={LinkedIn} alt="" />

            </a>

        
        </section>

        <section id="about">
          <h1>About</h1>
          <h2
            style={{
              fontSize: 20,
            }}
          >
            Vi är fem studenter som fixar sjuka saker{" "}
          </h2>

          <div id="faceCard">
            <Card
              titel="Ellis Jansson"
              description="skriv om dig"
              image={reactLogo}
            />
            <Card
              titel="Igor Szubert"
              description="skriv om dig"
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
              It is Icing liquorice chupa chups halvah sweet carrot cake
              chocolate bar. Liquorice oat cake dragée shortbread cake
              marshmallow bear claw pastry. Tiramisu cake danish cheesecake
              croissant caramels. Sweet roll apple pie toffee oat cake tart
              dessert soufflé gummies jujubes. Sweet roll soufflé candy canes
              soufflé apple pie bear claw jelly. Croissant brownie croissant
              apple pie fruitcake croissant ice cream. Cotton candy oat cake
              caramels cotton candy brownie jelly beans lemon drops. Biscuit
              pudding caramels pudding lemon drops gummi bears lemon drops pie
              gummi bears. Tootsie roll tart cupcake apple pie icing cake.
              Fruitcake biscuit cupcake topping pie. Chocolate bar cake
              liquorice halvah cheesecake bonbon sugar plum wafer. Jelly-o jelly
              candy canes oat cake powder caramels muffin sweet.F
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
              It is Icing liquorice chupa chups halvah sweet carrot cake
              chocolate bar. Liquorice oat cake dragée shortbread cake
              marshmallow bear claw pastry. Tiramisu cake danish cheesecake
              croissant caramels. Sweet roll apple pie toffee oat cake tart
              dessert soufflé gummies jujubes. Sweet roll soufflé candy canes
              soufflé apple pie bear claw jelly. Croissant brownie croissant
              apple pie fruitcake croissant ice cream. Cotton candy oat cake
              caramels cotton candy brownie jelly beans lemon drops. Biscuit
              pudding caramels pudding lemon drops gummi bears lemon drops pie
              gummi bears. Tootsie roll tart cupcake apple pie icing cake.
              Fruitcake biscuit cupcake topping pie. Chocolate bar cake
              liquorice halvah cheesecake bonbon sugar plum wafer. Jelly-o jelly
              candy canes oat cake powder caramels muffin sweet.F
            </p>
          </div>
        </section>

        <Footer />
      </ChakraProvider>
    </>
  );
}

export default Home;
