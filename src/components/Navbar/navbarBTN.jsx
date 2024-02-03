import React from "react";
import "./navbarBTN.css";
import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const navbarBTN = ({ ButtonText, PageRef }) => {
  return (
    <>
      <Link to={PageRef}>
        <Button colorScheme="black" variant="ghost" href>
          {" "}
          {ButtonText}{" "}
        </Button>
      </Link>
    </>
  );
};

export default navbarBTN;
