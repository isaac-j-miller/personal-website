export type ResumeSubSection = {
  headerAlign: "left" | "right";
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

export type ResumeTemplate = {
  sections: ResumeSection[];
};
