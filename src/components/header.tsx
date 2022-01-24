import React, { useEffect } from "react";
import styled from "styled-components";
import { convert } from "../format";
import { ResumeTemplate } from "../types";

const AppHeader = styled.nav`
  width: 100vw;
  top: 0;
  position: fixed;
  height: 2em;
  font-family: "Patua One", helvetica;
  font-weight: bold;
  font-size: 24px;
  padding: 0.5em;
  border-bottom: 1px solid grey;
  color: black;
  background-color: white;
  z-index: 2;
  a:visited {
    color: black;
    text-decoration: none;
  }
  a:link {
    color: black;
    text-decoration: none;
  }
`;

type HeaderProps = {
  template: ResumeTemplate;
};

const HorizLinks = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  div {
    display: flex;
    position: relative;
    margin-right: 1em;
    transition: 0.2s;
    text-align: center;
    text-wrap: break-word;
  }
  div:hover {
    opacity: 80%;
    font-size: 28px;
  }
  div:not(:last-child):after {
    margin-left: 1em;
    height: 100%;
    margin-top: auto;
    margin-bottom: auto;
    content: "|";
  }
  div:first-child:before {
    margin-left: 1em;
  }
`;

const HamburgerMenu = styled.img`
  width: 1.5em;
  height: 1.5em;
  padding-left: 1em;
  transition: 0.25s;
  position: absolute;
  left: 0;
`;

const Menu = styled.div`
  position: fixed;
  top: 3em;
  left: 0.5em;
  right: 0.5em;
  max-height: calc(80vh);
  overflow-y: auto;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  background-color: white;
  border: solid 1px black;
  a {
    padding: 0.25em;
  }
  a:not(:last-child) {
    border-bottom: 1px solid grey;
  }
`;

const isParentMenu = (elem: Element): boolean => {
  if (elem.id === "menu") {
    return true;
  }
  if (elem.parentElement) {
    return isParentMenu(elem.parentElement);
  }
  return false;
};

export const Header: React.FC<HeaderProps> = (props) => {
  const isMobile = window.matchMedia(
    "only screen and (max-width: 850px)"
  ).matches;
  const [isOpen, setOpen] = React.useState<boolean>(false);
  useEffect(() => {
    if (isOpen) {
      const listener = (evt: MouseEvent) => {
        const element = evt.target;
        if (!element || !isParentMenu(element as Element)) {
          setOpen(false);
        }
      };
      document.addEventListener("click", listener);
      return () => {
        document.removeEventListener("click", listener);
      };
    }
  }, [isOpen]);
  const onClick = isOpen ? () => setOpen(false) : undefined;
  const elements = [
    <a href={"#skills"} key={`link-#skills`} onClick={onClick}>
      Skills
    </a>,
    ...props.template.sections.map((section, i) => (
      <a
        href={`#sd-${i}`}
        key={`link-#sd-${i}`}
        dangerouslySetInnerHTML={convert(section.header)}
        onClick={onClick}
      ></a>
    )),
    <a href={"#aboutme"} key={`link-#aboutme`} onClick={onClick}>
      About Me
    </a>,
  ];
  if (isMobile) {
    return (
      <AppHeader>
        <HamburgerMenu
          src={isOpen ? "public/x.png" : "public/hamburger.png"}
          onClick={() => setOpen(!isOpen)}
        />
        {isOpen && <Menu id="menu">{elements}</Menu>}
      </AppHeader>
    );
  }
  return (
    <AppHeader>
      <HorizLinks>
        {elements.map((elem, i) => (
          <div key={`header-link-wrapper-${i}`}>{elem}</div>
        ))}
      </HorizLinks>
    </AppHeader>
  );
};
