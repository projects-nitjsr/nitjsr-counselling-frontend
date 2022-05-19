import React from "react";
import { Link } from "react-router-dom";
import Container from "@mui/material/Container";
// import Footer from "../../../components/footer";
import { ParaStyled, OuterWrapper } from "./confirmationStyled";

const Index = () => {
  return (
    <OuterWrapper>
      <Container maxWidth="md" className="wrapper">
        <ParaStyled>
          <span className="user-greet-heading">Welcome , John Doe !</span>
          <br />
          You can confirm your account detail through the link below:{" "}
          <Link to="/councellor/setPassword">CONFIRM YOUR ACCOUNT</Link>
          <br />
          <span className="highlight">
            {" "}
            Regards, <br /> The NIMCET 2020 Team
          </span>
        </ParaStyled>
      </Container>
    </OuterWrapper>
  );
};

export default Index;
