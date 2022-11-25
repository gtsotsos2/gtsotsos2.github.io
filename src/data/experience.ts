export const jobs: JobTypes[] = [
  {
    start_date: "October 2019",
    end_date: "March 2022",
    position: "Senior Software Engineer",
    company: "Zensurance",
    location: "Toronto, CA",
    description: `Zensurance makes business insurance easy for Canadian entrepreneurs.`,
    achievements: [
      "Developed progressive web application used by millions of Canadians",
      "Cross-platform internal tools to increase broker efficiency and productivity",
      "Unit testing of React components using Jest, Enzyme, RTL",
    ],
  },
  {
    start_date: "September 2017",
    end_date: "November 2018",
    position: "Senior Software Engineer",
    company: "LifeWorks",
    location: "London, UK",
    description: `LifeWorks is a global employee engagement
      platform serving 50,000 companies with over 15 million users.`,
    achievements: [
      "Improved team culture and overall happiness.",
      "Increased project test coverage",
      "Complete refactor of the front-end.",
      "Helped mentor the front-end team.",
      "Improved the platform performance.",
      "Built new features in React.",
      "Refactored features from AngularJS to React.",
    ],
  },
  {
    start_date: "August 2016",
    end_date: "September 2017",
    position: "Software Engineer",
    company: "Saffron Labs",
    location: "London, UK",
    description: null,
    achievements: [
      "Developed a web and mobile based taxi dispatch platform",
      "Refactored to React/Redux architecture and React Native for mobile",
    ],
  },
];

export interface JobTypes {
  start_date: string;
  end_date: string;
  position: string;
  company: string;
  location: string;
  description: string | null;
  achievements: Array<string> | null;
}
