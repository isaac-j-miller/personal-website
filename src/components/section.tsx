import React from "react";
import styled from "styled-components";
import { LeftPanel, RightPanel } from "./panels";

const SectionDiv = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  min-height: 30%;
  height: fit-content;
`;

const TextBox = styled.div`
  font-family: "Zilla Slab", serif;
  font-size: 18px;
  margin-top: auto;
  margin-bottom: auto;
  text-align: left;
  padding-left: 1em;
  padding-right: 1em;
  h2 {
    font-family: "Patua One", helvetica;
  }
  p {
    font-style: italic;
  }
`;

const SectionHeader = styled.div`
  font-family: "Patua One", helvetica;
  font-size: 48px;
  margin-top: auto;
  margin-bottom: auto;
  text-align: left;
  padding-left: 1em;
  padding-right: 1em;
`;

const SubHeader = styled.p`
  font-family: "Zilla Slab", serif;
  font-size: 24px;
`;

const Divider = styled.div`
  height: 75%;
  width: 1px;
  border-right: solid black 3px;
  margin-top: auto;
  margin-bottom: auto;
`;
type SectionProps = {
  headerAlign: "left" | "right";
  header: string;
  subHeader?: string;
};

export const Section: React.FC<SectionProps> = (props) => {
  const header = (
    <SectionHeader>
      {props.header}
      <SubHeader>{props.subHeader}</SubHeader>
    </SectionHeader>
  );
  const text = <TextBox>{props.children}</TextBox>;
  const leftContents = props.headerAlign === "left" ? header : text;
  const rightContents = props.headerAlign === "right" ? header : text;
  const leftWidth = props.headerAlign === "left" ? "40%" : "60%";
  const rightWidth = props.headerAlign === "right" ? "40%" : "60%";
  return (
    <SectionDiv>
      <LeftPanel style={{ width: leftWidth }}>{leftContents}</LeftPanel>
      <Divider></Divider>
      <RightPanel style={{ width: rightWidth }}>{rightContents}</RightPanel>
    </SectionDiv>
  );
};
