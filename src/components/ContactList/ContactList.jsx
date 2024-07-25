import css from "./ContactList.module.css";
import {Contact} from "../Contact/Contact.jsx"; 
import { useSelector } from "react-redux"; 
import { filteredContacts } from "../../redux/contactsSlice"; 

const ContactList = () => { 

    const contacts = useSelector(filteredContacts);

    return (
        <ul className={css.contactsUl}>
            {contacts.map(contact => (
                <li key={contact.id} className={css.contactsLi}>
                    <Contact contact={contact} /> 
                </li>
            ))}
        </ul>
    );
}

export default ContactList; 

