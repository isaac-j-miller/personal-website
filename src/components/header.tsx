import React from "react";
import styled from "styled-components";

const AppHeader = styled.nav`
  width: 100%;
  top: 0;
  position: fixed;
  height: 3em;
  font-family: "Patua One", helvetica;
  font-weight: bold;
  font-size: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5em;
  border-bottom: 1px solid grey;
  color: black;
  a {
    margin-left: 1em;
    margin-right: 1em;
    transition: 0.2s;
  }
  a:hover {
    opacity: 80%;
    font-size: 28px;
  }
  a:visited {
    color: black;
    text-decoration: none;
  }
  a:link {
    color: black;
    text-decoration: none;
  }
  background-color: white;
  z-index: 2;
`;

export const Header: React.FC = () => {
  return (
    <AppHeader>
      <a href="#sd-0">Experience</a>|<a href="#sd-1">Education</a>|
      <a href="#sd-2">Projects</a>|<a href="#sd-3">Contact</a>
    </AppHeader>
  );
};
