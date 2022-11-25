
import {SkillItem} from './SkillItem';
import {skills, SkillTypes} from "../../data/skills";

export const Skills = () => {
    return (
        <div className="mb-10">
            <h3 className="title">Skills</h3>
            {skills.map((skill: SkillTypes) => (
                <SkillItem {...skill} key={skill.type} />
            ))}
        </div>
    );
};
