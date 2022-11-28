export const interests: InterestTypes[] = [
  {
    type: "travel",
    label: "Travel",
    description: "Photography, Backpacking (62 countries over 6 continents)",
  },
  {
    type: "sports",
    label: "Sports",
    description: "soccer, golf, biking, tennis, volleyball, and basketball",
  },
  {
    type: "other",
    label: "Other",
    description:
      "Financial markets, Cryptocurrency, computer networking, automotive, technology, innovation, and business",
  },
];

export interface InterestTypes {
  type: string;
  label: string;
  description: string;
}
