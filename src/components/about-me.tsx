import React from "react";
import styled from "styled-components";
import { convert } from "../format";
import { AboutMe } from "../types";
import { SubHeader } from "./section";

const Headshot = styled.img`
  float: left;
  width: 33%;
  margin-right: 1em;
  border-radius: 50%;
  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`;
const Bio = styled.div`
  margin-left: 2em;
  margin-right: 2em;
`;

export const AboutMeSection: React.FC<AboutMe> = (props) => {
  return (
    <Bio>
      <Headshot src={props.headshot} />
      {props.sections.map((section, i) => (
        <>
          {section.subHeader && (
            <SubHeader
              key={`aboutme-sh-${i}`}
              dangerouslySetInnerHTML={convert(section.subHeader)}
            ></SubHeader>
          )}
          <p
            key={`aboutme-text-${i}`}
            dangerouslySetInnerHTML={convert(section.text)}
          />
        </>
      ))}
    </Bio>
  );
};
