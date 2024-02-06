// General
import React, { useState, useEffect } from "react";
import "./navbar.css";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import "../../App.css";
import { Link } from "react-scroll";


// Assets
import AfilumLogo from "../../assets/logo.png";
import ProjectsIcon from "../../assets/projects.png";
import AboutIcon from "../../assets/about.png";
import ContactIcon from "../../assets/mail.png";
import AfilumIcon from "../../assets/favicon.ico";


// Components
import NavbarBTN from "./navbarBTN.jsx";
import LogoBTN from "./logo.jsx";
import MenuBTN from "./MenuBTN.jsx";

function navbar() {
  const [isTop, setIsTop] = useState(true);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

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
        backgroundColor: isTop ? "transparent" : "#2a2a2a",
        transition: "background-color 0.3s ease",
      }}
    >
      <LogoBTN />

      <div className="navbarLink">
       
        <NavbarBTN ButtonText={"About Us"} PageRef={ "#about"} />
       

        <NavbarBTN ButtonText={"Projects"} PageRef={""} />

        <NavbarBTN ButtonText={"Contact us"} PageRef={"/Contact"} />

        <div id="menu_btn">
          <Button
            ref={btnRef}
            colorScheme="transparant"
            onClick={onOpen}
            fontSize={60}
            mb={16}
            fontWeight={100}
            color={"#fffff"}
          >
            <HamburgerIcon className="menu_icon" mt={5} />
          </Button>
        </div>
      </div>
      <Drawer
        size="md"
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent
          color={"#ff0000"}
          backgroundColor={"#2d2d2d"}
          borderRadius={20}
        >
          <DrawerCloseButton
            fontSize={30}
            mt={3}
            mr={3}
            zIndex={999}
            className="close_btn"
          />
          <DrawerHeader fontSize={40}>
            <img src={AfilumIcon} alt="" />
          </DrawerHeader>

          <DrawerBody>
            <MenuBTN
              ButtonText={"About us"}
              PageRef={"/Home"}
             
            />
            <MenuBTN ButtonText={"Projects"} PageRef={""} Icon={ProjectsIcon} />
            <MenuBTN
              ButtonText={"Contact us"}
              PageRef={"/Contact"}
             
            />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  );
}

export default navbar;
