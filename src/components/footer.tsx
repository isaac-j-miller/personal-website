import React from "react";
import styled from "styled-components";
import { SocialIcon } from "./icon";

const AppFooter = styled.nav`
  width: 100%;
  bottom: 0;
  height: 3em;
  font-family: "Patua One", helvetica;
  font-weight: bold;
  font-size: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5em;
  border-top: 1px solid grey;
  position: fixed;
  a {
    padding-left: 1em;
    padding-right: 1em;
  }
  a:hover {
    opacity: 80%;
  }
  background-color: white;
  z-index: 2;
`;

const Copyright = styled.div`
  position: absolute;
  left: 0;
  padding-left: 0.5em;
`;

export const Footer: React.FC = () => {
  return (
    <AppFooter>
      <Copyright>©2022 by Isaac Miller</Copyright>
      <SocialIcon
        src="public/linkedin.png"
        link="https://www.linkedin.com/in/isaac-j-miller/"
      ></SocialIcon>
      <SocialIcon
        src="public/github.png"
        link="https://github.com/isaac-j-miller/"
      ></SocialIcon>
    </AppFooter>
  );
};
