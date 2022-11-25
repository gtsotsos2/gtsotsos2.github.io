import {InterestTypes} from "../../data/interests";


export const InterestItem = ({ label, description }: InterestTypes) => {
    return (
        <li>
            <span className="font-bold">{label}</span>: {description}
        </li>
    );
};
