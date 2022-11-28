import { jobs } from "../../data/experience";
import { Job } from "./ExperienceItem";

export const Experience = () => {
  return (
    <div className="mb-10">
      <h3 className="title">Experience</h3>
      {jobs.map((job, index: number) => (
        <Job {...job} key={index} />
      ))}
    </div>
  );
};
