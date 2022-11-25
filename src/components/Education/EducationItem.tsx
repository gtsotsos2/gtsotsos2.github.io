import {SchoolTypes} from "../../data/education";


export const EducationItem = ({ graduation_year, school, location, description }: SchoolTypes) => {
    return (
        <div className="grid subgrid">
            <div className="subleft">{graduation_year}</div>
            <div className="subright">
                <h4 className="font-bold text-md">{school}</h4>
                <h5 className="italic text-sm mb-5">{location}</h5>
                <p>{description}</p>
            </div>
        </div>
    );
};
