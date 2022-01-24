import React from "react";
import styled, { css } from "styled-components";
import { Skill, skillLevels } from "../types";
import { SkillPill } from "./skill-pill";

const SkillBoxDiv = styled.div`
  flex-flow: row wrap;
  display: flex;
`;
const SkillSearchBox = styled.div`
  @media only screen and (min-width: 600px) {
    margin-left: 10%;
    margin-right: 10%;
  }
  @media only screen and (max-width: 600px) {
    margin-left: 5%;
    margin-right: 5%;
  }
  min-height: 70%;
`;
const SkillSearchDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 0.25em;
  padding-bottom: 0.25em;
  border-bottom: 1px solid black;
  label {
    margin-top: auto;
    margin-bottom: auto;
  }
  input {
    position: relative;
    height: 2em;
    width: 15em;
  }
`;
const ExpandBox = styled.div<{ expanded: boolean }>`
  border-radius: 10px;
  box-shadow: inset 0 0 2px 0 rgba(255, 255, 255, 0.4),
    inset 0 0 3px 0 rgba(0, 0, 0, 0.4), inset 0 0 3px 5px rgba(0, 0, 0, 0.05),
    2px 2px 4px 0 rgba(0, 0, 0, 0.25);
  div.expandTitle {
    font-family: "Zilla Slab", serif;
    width: 100%;
    text-align: center;
    border-bottom: 1px solid black;
    margin-top: auto;
    margin-bottom: auto;
    vertical-align: middle;
    padding-top: 1em;
    padding-bottom: 1em;
    font-weight: bold;
  }
  div.skillBox {
    overflow: hidden;
    transition: 0.25s;
    position: relative;
  }
  ${({ expanded }) =>
    expanded
      ? css`
          div.skillBox {
          }
        `
      : css`
          div.skillBox {
            height: 20vh;
          }
          div.skillBox:after {
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            background: linear-gradient(
              to top,
              rgba(255, 255, 255, 0.8) 20%,
              rgba(255, 255, 255, 0) 80%
            );
            border-radius: 10px;
            content: "";
          }
        `}
`;

const SkillBox: React.FC<{ skills: Skill[] }> = ({ skills }) => {
  const isMobile = window.matchMedia(
    "only screen and (max-width: 600px)"
  ).matches;
  const [expanded, setExpanded] = React.useState<boolean>(false);
  const skillPills = skills.map((skill, i) => (
    <SkillPill {...skill} key={`skill-${i}`}></SkillPill>
  ));
  if (!isMobile) {
    if (skills.length) {
      return <SkillBoxDiv>{skillPills}</SkillBoxDiv>;
    }
    return (
      <SkillBoxDiv>Sorry, no skills found matching the criteria!</SkillBoxDiv>
    );
  }
  return (
    <ExpandBox expanded={expanded}>
      <div className="expandTitle" onClick={() => setExpanded(!expanded)}>
        {expanded ? "Collapse [-]" : "Expand [+]"}
      </div>
      {skills.length ? (
        <SkillBoxDiv className={"skillBox"}>{skillPills}</SkillBoxDiv>
      ) : (
        <SkillBoxDiv>Sorry, no skills found matching the criteria!</SkillBoxDiv>
      )}
    </ExpandBox>
  );
};
const sortSkillFn = (s1: Skill, s2: Skill) => {
  const level1 = skillLevels.indexOf(s1.level);
  const level2 = skillLevels.indexOf(s2.level);
  return level2 - level1;
};
const randomSort = () => {
  return Math.random() * 2 - 1;
};

const allowedChars = "qwertyuiopasdfghjklzxcvbnm1234567890+-#.";
const normalize = (str: string) => {
  const asArr = Array.from(str.toLowerCase()).filter((char) =>
    allowedChars.includes(char)
  );
  return asArr.join("");
};

const match = (str1: string, str2: string): boolean => {
  return str2.includes(str1) || (str2 + "s").includes(str1);
};

export const SkillSearch: React.FC<{ skills: Skill[] }> = ({ skills }) => {
  const [currentSkills, setCurrentSkills] = React.useState<Skill[]>(skills);
  const useSearch = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = evt.target;
    if (!value) {
      setCurrentSkills(skills.sort(randomSort));
      return;
    }
    const normalized = normalize(value);
    const newSkills = skills
      .filter((skill) => {
        const normalizedSkill = normalize(skill.name);
        const alts = skill.alt ?? [];
        return (
          match(normalized, normalizedSkill) ||
          alts.some((alt) => match(normalized, normalize(alt)))
        );
      })
      .sort(sortSkillFn);
    setCurrentSkills(newSkills);
  };
  return (
    <SkillSearchBox>
      <SkillSearchDiv>
        <label htmlFor="skills">
          For your convenience, I've compiled a searchable list of some of my
          skills. Try searching for some!
        </label>
        <input
          type="search"
          name="skills"
          onChange={useSearch}
          placeholder="Search for a skill!"
        />
      </SkillSearchDiv>

      <SkillBox skills={currentSkills}></SkillBox>
    </SkillSearchBox>
  );
};
