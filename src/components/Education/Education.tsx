
import {EducationItem} from './EducationItem';
import {education, SchoolTypes} from "../../data/education";

export const Education = () => {
    return (
        <div className="mb-10">
            <h3 className="title">Education</h3>
            {education.map((school: SchoolTypes, index: number) => (
                <EducationItem {...school} key={index} />
            ))}
        </div>
    );
};
