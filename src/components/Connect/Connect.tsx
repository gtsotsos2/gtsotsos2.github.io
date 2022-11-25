import {contacts} from "../../data/contact";
import {ContactItem} from "./ContactItem";

export const Connect = ({  }) => {
    return (
        <div className="fill-white mb-20">
            <h3 className="title">Connect</h3>
            {contacts
                .map((contact) => (
                    <ContactItem {...contact} key={contact.type} />
                ))}
        </div>
    );
};