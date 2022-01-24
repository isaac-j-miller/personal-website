import React from "react";
import styled from "styled-components";

const RightPanel = styled.div`
  display: flex;

  width: 100%;
  @media only screen and (min-width: 600px) {
    right: 0;
    width: fit-content;
  }
`;

const HeroDiv = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

const TextBox = styled.div`
  font-family: "Patua One", helvetica;
  font-size: 48px;
  margin-top: auto;
  margin-bottom: auto;

  text-align: left;
  padding-left: 1em;
  padding-right: 1em;
  @media only screen and (max-width: 600px) {
    width: 100%;
    text-align: center;
  }
`;
const HeroImage = styled.img`
  @media only screen and (min-width: 600px) {
    margin-top: -1em;
    height: calc(100vh - 8em);
    width: 90%;
    object-fit: cover;
    object-position: left 10%;
  }
  @media only screen and (max-width: 600px) {
    margin-top: -1em;
    height: 50vh;
    width: 100%;
    object-fit: cover;
    object-position: left 10%;
  }
`;

type HeroProps = {
  text: string;
  imageSrc: string;
};

export const Hero: React.FC<HeroProps> = (props) => {
  return (
    <HeroDiv>
      <HeroImage src={props.imageSrc}></HeroImage>
      <RightPanel>
        <TextBox>{props.text}</TextBox>
      </RightPanel>
    </HeroDiv>
  );
};
