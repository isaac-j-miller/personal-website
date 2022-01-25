import React from "react";
import styled from "styled-components";
import { AboutMeSection } from "./components/about-me";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { Hero } from "./components/hero";
import { Points } from "./components/points";
import { Section } from "./components/section";
import { SectionDivider } from "./components/section-divider";
import { convert } from "./format";
import { ResumeTemplate } from "./types";
import resume from "./resume.json";
import { SkillSearch } from "./components/skill-search";

const resumeJson = resume as ResumeTemplate;

const AppDiv = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

const ContentDiv = styled.div`
  overflow-y: scroll;
  overflow-x: hidden;
  position: fixed;
  top: 4em;
  bottom: 4em;
  left: 0;
  right: 0;
  padding-bottom: 3em;
  padding-top: 1em;
  background-color: #f5f5f5;
`;

export const App: React.FC = () => {
  return (
    <AppDiv>
      <Header template={resumeJson} />
      <ContentDiv>
        <Hero
          imageSrc={resumeJson.info.heroImage}
          text={resumeJson.info.fullName}
        ></Hero>
        {resumeJson.sections.map((section, i) => {
          return (
            <span key={`span-section-${i}`}>
              <SectionDivider
                key={`sd-${i}`}
                id={`sd-${i}`}
                dangerouslySetInnerHTML={convert(section.header)}
              />
              {section.subSections.map((subSection, j) => {
                return (
                  <Section
                    key={`s-${i}-${j}`}
                    subHeader={subSection.subHeader}
                    header={subSection.header}
                  >
                    {subSection.points && (
                      <Points points={subSection.points} i={i} j={j}></Points>
                    )}
                  </Section>
                );
              })}
            </span>
          );
        })}
        <SectionDivider id={"aboutme"}>About Me</SectionDivider>
        <AboutMeSection {...resumeJson.aboutMe}></AboutMeSection>
        <SectionDivider id={"skills"}>Skills</SectionDivider>
        <SkillSearch skills={resumeJson.skills}></SkillSearch>
      </ContentDiv>
      <Footer links={resumeJson.socialLinks} name={resumeJson.info.fullName} />
    </AppDiv>
  );
};
