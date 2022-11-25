import {JobTypes} from "../../data/experience";

export const Job = ({
                        start_date,
                        end_date,
                        position,
                        company,
                        location,
                        description,
                        achievements,
                    }: JobTypes) => {
    return (
        <>
            <div className="subheading">
                {start_date} - {end_date ? end_date : 'Present'}
            </div>
            <div className="mb-10">
                <h4 className="font-bold text-lg">{position}</h4>
                <h5 className="italic text-sm mb-5">
                    {company} - {location}
                </h5>

                {description && <p className="text-left mb-5">{description}</p>}
                {achievements && achievements.length > 0 && (
                    <ul className="text-left list-disc mt-5 ml-5">
                        {achievements.map((achievement, index) => (
                            <li key={index}>{achievement}</li>
                        ))}
                    </ul>
                )}
            </div>
        </>
    );
};
