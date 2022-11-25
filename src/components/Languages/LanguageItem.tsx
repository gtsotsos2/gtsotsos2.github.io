

interface LanguageProps {
    label: string,
    level: string
}

export const LanguageItem = ({ label, level }: LanguageProps) => {
    return (
        <li>
            <span className="font-bold">{label}</span>: {level}
        </li>
    );
};