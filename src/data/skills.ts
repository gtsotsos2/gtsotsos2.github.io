export const skills: SkillTypes[] = [
  {
    type: "languages",
    label: "Languages",
    list: ["JavaScript ESNext", "CSS/SASS", "HTML"],
  },
  {
    type: "frameworks-libraries",
    label: "Frameworks / Libraries",
    list: [
      "React",
      "Redux",
      "React Native",
      "Node.js",
      "Express",
      "Sequelize",
      "Jest",
      "Flow",
    ],
  },
  {
    type: "tools",
    label: "Tools",
    list: ["Webpack", "NPM/Yarn", "Travis CI", "CircleCI"],
  },
  {
    type: "databases",
    label: "Databases",
    list: ["PostgreSQL", "MongoDB", "MySQL"],
  },
  {
    type: "other",
    label: "Other",
    list: ["Git", "Jira", "Agile workflows", "AWS"],
  },
];

export interface SkillTypes {
  type: string;
  label: string;
  list: Array<string>;
}
