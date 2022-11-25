
interface SkillProps {
    label: string,
    list: Array<string>
}

export const SkillItem = ({ label, list }: SkillProps) => {
    return (
        <div className="mb-5 grid subgrid">
            <h4 className="subheading subleft">{label}</h4>
            <ul className="subright">
                {list.map((item: string, index: number) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
};
