import React from "react";
import styled from "styled-components";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { Hero } from "./components/hero";
import { Points } from "./components/points";
import { Section } from "./components/section";
import { SectionDivider } from "./components/section-divider";
import resume from "./resume.json";
import { ResumeTemplate } from "./types";

const resumeJson = resume as ResumeTemplate;

const AppDiv = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

const ContentDiv = styled.div`
  width: 100%;
  overflow: scroll;
  position: fixed;
  top: 60px;
  bottom: 4em;
  background-color: #f5f5f5;
`;

export const App: React.FC = () => {
  return (
    <AppDiv>
      <Header></Header>
      <ContentDiv>
        <Hero
          imageAlign="left"
          imageSrc="/public/isaac-mexico-cropped.jpg"
          text="Isaac J Miller"
        ></Hero>
        {resumeJson.sections.map((section, i) => {
          return (
            <>
              <SectionDivider key={`sd-${i}`} id={`sd-${i}`}>
                {section.header}
              </SectionDivider>
              {section.subSections.map((subSection, j) => {
                return (
                  <Section
                    key={`s-${i}-${j}`}
                    headerAlign={subSection.headerAlign}
                    subHeader={subSection.subHeader}
                    header={subSection.header}
                  >
                    {subSection.points && (
                      <Points points={subSection.points} i={i} j={j}></Points>
                    )}
                  </Section>
                );
              })}
            </>
          );
        })}
      </ContentDiv>
      <Footer></Footer>
    </AppDiv>
  );
};
