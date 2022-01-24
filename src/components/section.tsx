import React from "react";
import styled from "styled-components";
import { convert } from "../format";

const LeftPanel = styled.div`
  display: flex;
  @media only screen and (min-width: 600px) {
    width: 20%;
  }
`;

const RightPanel = styled.div`
  display: flex;

  @media only screen and (min-width: 600px) {
    border-left: 1px solid black;
    border-radius: 20px;
    width: 80%;
  }
`;

const SectionDiv = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  min-height: 30%;
  overflow: hidden;
  height: fit-content;
  margin: 1em;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

const TextBox = styled.div`
  font-family: "Zilla Slab", serif;
  font-size: 18px;
  margin-top: auto;
  margin-bottom: auto;
  text-align: left;
  padding-left: 2em;
  padding-right: 2em;
  h2 {
    font-family: "Patua One", helvetica;
    @media only screen and (max-width: 600px) {
      font-size: 16px;
    }
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
  font-size: 18px;
  @media only screen and (min-width: 600px) {
    text-align: left;
    padding-left: 1em;
    padding-right: 1em;
    font-size: 24px;
  }
`;

export const SubHeader = styled.p`
  font-family: "Zilla Slab", serif;
  font-size: 24px;
  font-weight: bold;
  @media only screen and (max-width: 600px) {
    font-size: 18px;
  }
`;
type SectionProps = {
  header: string;
  subHeader?: string;
};

export const Section: React.FC<SectionProps> = (props) => {
  const header = (
    <SectionHeader>
      <p dangerouslySetInnerHTML={convert(props.header)} />
      <SubHeader dangerouslySetInnerHTML={convert(props.subHeader)} />
    </SectionHeader>
  );
  const text = <TextBox>{props.children}</TextBox>;
  return (
    <SectionDiv>
      <LeftPanel>{header}</LeftPanel>
      <RightPanel>{text}</RightPanel>
    </SectionDiv>
  );
};
