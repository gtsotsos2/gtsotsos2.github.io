export const education: SchoolTypes[] = [
  {
    graduation_year: 2013,
    school: "University of Western Ontario",
    location: "London, Canada",
    description: `BSc Computer Science & Software Engineering`,
  },
];

export interface SchoolTypes {
  graduation_year: number;
  school: string;
  location: string;
  description: string;
}
