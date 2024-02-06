// General Imports
import React, { useRef, useState, useEffect } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import "./Contact.css";
import emailjs from "@emailjs/browser";

// Assets imports
import AfilumLogo from ".././assets/logo.png";
import Mail from ".././assets/mail.png";
import Phone from ".././assets/phone.png";
import LinkedIn from ".././assets/LinkedIn.png";

// Components import
import Navbar from "../components/Navbar/navbar.jsx";
import Footer from "../components/footer.jsx";

const Contact = () => {
  const hasSentMail = localStorage.getItem("hasSent");

  const initialHasSent = JSON.parse(hasSentMail) || false;

  const [hasSent, setHasSent] = useState(initialHasSent);

  const form = useRef();

  useEffect(() => {
    localStorage.setItem("hasSent", JSON.stringify(hasSent));
  }, [hasSent]);

  const sendEmail = (e) => {
    if (!hasSent) {
      e.preventDefault();

      emailjs
        .sendForm(
          "service_fgq2gbh",
          "template_nvfpawf",
          form.current,
          "ikDkDul_5ozV70bxG"
        )
        .then(
          (result) => {
            console.log(result.text);
            setHasSent(true);
            e.target.reset();
          },
          (error) => {
            console.log(error.text);
          }
        );
    } else {
      console.log("Already sent a message");
    }
  };

  return (
    <>
      <ChakraProvider>
        <Navbar />
        <section id="main">
          <div id="card_body">
            <div id="form_div">
              <form ref={form} onSubmit={sendEmail}>
                <h1>Contact us</h1>
               
                <input type="text" name="user_name" id="input" placeholder="    Name"/>
                
                <input type="text" name="user_email" id="input" placeholder="    Email" />
                
                <textarea type="text" name="message" id="message_input" placeholder="    Message" />
                <input
                  type="submit"
                  value={hasSent ? "Thank you" : "Send"}
                  id="send"
                  style={{
                    backgroundColor: hasSent ? "#b7f0ad" : "#FF4D4D",
                  }}
                />
              </form>
            </div>

            <div id="contact_div">
              <img src={AfilumLogo} alt="Afilum logo" id="logo" />
              <div id="info_form_div">
                <div id="info_form">
                  <img src={Mail} alt="" id="icon" />
                  <h3>colinbexell@gmail.com</h3>
                </div>
                <div id="info_form">
                  <img src={Phone} alt="" id="icon" />
                  <h3>+4601609060</h3>
                </div>
                <div id="info_form">
                  <img src={LinkedIn} alt="" id="icon" />
                  <a href="https://www.linkedin.com/company/afilum/">
                    <h3>Afilum</h3>
                  </a>
                  
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </ChakraProvider>
    </>
  );
};

export default Contact;
