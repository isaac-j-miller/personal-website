export type ResumeSubSection = {
  header: string;
  subHeader?: string;
  points?: PointList[];
};
export type PointList = {
  header: string;
  blurb?: string;
  items?: string[];
};
export type ResumeSection = {
  header: string;
  subSections: ResumeSubSection[];
};
export type SocialLink = {
  icon: string;
  link: string;
  type?: string;
};
export type PersonalInfo = {
  fullName: string;
  heroImage: string;
};
export type AboutMeSubSection = {
  subHeader?: string;
  text: string;
};
export type AboutMe = {
  headshot: string;
  sections: AboutMeSubSection[];
};
export const skillLevels = [
  "novice",
  "intermediate",
  "competent",
  "proficient",
  "expert",
] as const;
export type SkillLevel = typeof skillLevels[number];
export type Skill = {
  name: string;
  level: SkillLevel;
  alt?: string[];
};
export type ResumeTemplate = {
  skills: Skill[];
  sections: ResumeSection[];
  socialLinks: SocialLink[];
  info: PersonalInfo;
  aboutMe: AboutMe;
};
