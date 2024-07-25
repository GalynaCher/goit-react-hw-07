import css from "./ContactForm.module.css";
// import { nanoid } from 'nanoid';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";
import { useDispatch } from "react-redux"; 
import { addContact } from "../../redux/contactsOps"; 

const ContactForm = () => { 

    const dispatch = useDispatch(); 

    const handleSubmit = (values, actions) => { 
        const newContact = {
            // id: values.id,
            name: values.name,
            number: values.number
        }
        dispatch(addContact(newContact)); 
        console.log("newContact: ",newContact);
        actions.resetForm();
    }
    
    const contactValidationSchema = Yup.object().shape({
        name: Yup.string().min(3, "Too short!").max(50, "Too long!").required("Required!"),
        number: Yup.string().min(3, "Too short!").max(50, "Too long!").required("Required!")
    })

    return (
        <Formik
            initialValues={{ name: "", number: "" }}
            onSubmit={handleSubmit} 
            validationSchema={contactValidationSchema}
        >
            <Form className={css.form}>
                <label >Name</label>
                <Field
                    className={css.formField}
                    type="text"
                    name="name"
                    placeholder="Enter your username"
                />
                <ErrorMessage className={css.errorMsg} name="name" component="span"/>
                <label >Number</label>
                <Field
                    className={css.formField}
                    type="tel"
                    name="number"
                    placeholder="Enter your phone number"
                />
                <ErrorMessage className={css.errorMsg} name="number" component="span"/>
                <button className={css.formBtn} type="submit">Add contact</button>
            </Form>
        </Formik>
    )
 };

export default ContactForm;
