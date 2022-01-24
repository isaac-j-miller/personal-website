import React from "react";
import styled from "styled-components";
import { LeftPanel, RightPanel } from "./panels";

const HeroDiv = styled.div`
  width: 100%;
  display: flex;
  position: relative;
`;

const TextBox = styled.div`
  font-family: "Patua One", helvetica;
  font-size: 48px;
  margin-top: auto;
  margin-bottom: auto;
  text-align: left;
  padding-left: 1em;
  padding-right: 1em;
`;
const HeroImage = styled.img`
  height: auto;
  width: 100%;
  object-fit: contain;
`;

type HeroProps = {
  imageAlign: "left" | "right";
  text: string;
  imageSrc: string;
};

export const Hero: React.FC<HeroProps> = (props) => {
  const img = <HeroImage src={props.imageSrc}></HeroImage>;
  const text = <TextBox>{props.text}</TextBox>;
  const leftContents = props.imageAlign === "left" ? img : text;
  const rightContents = props.imageAlign === "right" ? img : text;
  return (
    <HeroDiv>
      <LeftPanel>{leftContents}</LeftPanel>
      <RightPanel>{rightContents}</RightPanel>
    </HeroDiv>
  );
};
