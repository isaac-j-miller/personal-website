import React from "react";
import styled from "styled-components";
import { Skill, SkillLevel } from "../types";

const OuterDiv = styled.div`
  width: fit-content;
  border-radius: 10px;
  font-family: helvetica;
  margin: 0.25em;
  padding: 0.25em;
  display: flex;
  flex-direction: "row";
  div {
    padding: 0.25em;
    padding-left: 0.5em;
    padding-right: 0.5em;
  }
  height: 1.5em;
`;

const LeftDiv = styled.div`
  background-color: grey;
  color: white;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  box-shadow: inset 0 0 2px 0 rgba(255, 255, 255, 0.4),
    inset 0 0 3px 0 rgba(0, 0, 0, 0.4), inset 0 0 3px 5px rgba(0, 0, 0, 0.05),
    2px 2px 4px 0 rgba(0, 0, 0, 0.25);
`;
const RightDiv = styled.div<{ color: string }>`
  background-color: ${(props) => props.color};
  color: black;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  box-shadow: inset 0 0 2px 0 rgba(255, 255, 255, 0.4),
    inset 0 0 3px 0 rgba(0, 0, 0, 0.4), inset 0 0 3px 5px rgba(0, 0, 0, 0.05),
    2px 2px 4px 0 rgba(0, 0, 0, 0.25);
`;

const getColor = (skillLevel: SkillLevel): string => {
  switch (skillLevel) {
    case "novice":
      return "white";
    case "intermediate":
      return "orange";
    case "proficient":
      return "yellow";
    case "expert":
      return "green";
    default:
      return "white";
  }
};
export const SkillPill: React.FC<Skill> = (props) => {
  const color = getColor(props.level);
  return (
    <OuterDiv>
      <LeftDiv>{props.name}</LeftDiv>
      <RightDiv color={color}>{props.level}</RightDiv>
    </OuterDiv>
  );
};
