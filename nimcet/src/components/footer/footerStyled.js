import styled from "styled-components";

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #484848;
  color: #fff;
  max-height: 100%;
  position: absolute;
  bottom: 0;
  width: 98.05vw;
  padding: 15px;
  overflow-x: hidden;

  .contact {
    margin-top: 2rem;
    background-color: inherit;
    color: #1155b2;
    font-size: 1.2rem;
    font-weight: 700;
  }

  .contact-para {
    margin-top: 1rem;
    font-weight: 700;
    font-size: 1.2rem;
  }
`;
