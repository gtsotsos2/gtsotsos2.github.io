
import {InterestItem} from './InterestItem';
import {interests, InterestTypes} from "../../data/interests";


export const Interests = () => {
    return (
        <div>
            <h3 className="title">Personal Interests</h3>
            <ul>
                {interests.map((interest: InterestTypes) => (
                    <InterestItem {...interest} key={interest.label} />
                ))}
            </ul>
        </div>
    );
};
