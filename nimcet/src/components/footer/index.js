import React from "react";
import Container from "@mui/material/Container";
import { Link } from "react-router-dom";
import { Footer } from "./footerStyled";

const Index = () => {
  return (
    <Container maxWidth='xl' disableGutters={true}>
      <Footer>
        <p className="contact-para"> For more information contact us</p>
        <Link to="#" className="contact">
          www.nimcet.in
        </Link>
      </Footer>
    </Container>
  );
};

export default Index;
