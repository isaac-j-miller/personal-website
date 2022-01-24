import React from "react";
import styled from "styled-components";
import { SocialLink } from "../types";
import { SocialIcon } from "./icon";

const AppFooter = styled.nav`
  width: 100vw;
  bottom: 0;
  height: 2em;
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
  font-family: "Zilla Slab", serif;
  font-size: 18px;
  position: absolute;
  @media only screen and (min-width: 600px) {
    left: 0;
    padding-left: 0.5em;
  }
  @media only screen and (max-width: 600px) {
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);
    width: 100%;
    text-align: center;
    font-size: 12px;
  }
`;

type Props = {
  links: SocialLink[];
  name: string;
};

export const Footer: React.FC<Props> = (props) => {
  return (
    <AppFooter>
      <Copyright>
        ©{new Date().getFullYear()} by {props.name}
      </Copyright>
      {props.links.map((social, i) => (
        <SocialIcon
          src={social.icon}
          link={social.link}
          key={`social-${i}`}
        ></SocialIcon>
      ))}
    </AppFooter>
  );
};
