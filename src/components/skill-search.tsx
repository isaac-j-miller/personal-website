import React from "react";
import styled, { css } from "styled-components";
import { Skill, skillLevels } from "../types";
import { SkillPill } from "./skill-pill";

const SkillBoxDiv = styled.div`
  flex-flow: row wrap;
  display: flex;
  justify-content: space-evenly;
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
  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
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

  transition: 0.5s linear;
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
    transition: 0.5s linear;
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
            @media only screen and (max-width: 600px) {
              height: 40vh;
            }
          }
          div.skillBox:after {
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            background: linear-gradient(
              to top,
              rgba(245, 245, 245, 0.95) 10%,
              rgba(245, 245, 245, 0) 80%
            );
            border-radius: 10px;
            content: "";
          }
        `}
`;

const SkillBox: React.FC<{ skills: Skill[]; search: string }> = ({
  skills,
  search,
}) => {
  const expanded = search !== "" && search !== undefined;
  const skillPills = skills.map((skill, i) => (
    <SkillPill {...skill} key={`skill-${i}`}></SkillPill>
  ));
  return (
    <ExpandBox expanded={expanded}>
      {skills.length ? (
        <SkillBoxDiv className={"skillBox"}>{skillPills}</SkillBoxDiv>
      ) : (
        <SkillBoxDiv>
          Oops, I might have missed that one! You should ask me about it!
        </SkillBoxDiv>
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
  const [search, setSearch] = React.useState<string>("");
  const useSearch = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = evt.target;
    setSearch(value);
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
          match(normalized, skill.level) ||
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
          I've compiled a searchable list of some of my skills. Try searching
          for <i>coding</i>, <i>soft skills</i>, <i>music</i>, <i>devops</i>,{" "}
          <i>engineering</i> or another category! Ask me about any skills that
          aren't listed!
        </label>
        <input
          type="search"
          name="skills"
          onChange={useSearch}
          placeholder="Search for a skill!"
        />
      </SkillSearchDiv>

      <SkillBox skills={currentSkills} search={search}></SkillBox>
    </SkillSearchBox>
  );
};
