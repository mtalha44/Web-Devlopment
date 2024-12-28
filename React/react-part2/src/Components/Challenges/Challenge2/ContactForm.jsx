import { useId } from "react";

export const ContactForm = () => {

    const id = useId();
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e);
        const data = {
            name : e.target.name.value,
            email : e.target.email.value,
            message : e.target.message.value
        }
        console.log(data);

        /*
        Backend Code to submitt data to database
        */
        e.target.reset();
    }
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor={id + "name"}>Name: </label>
            <input type="text" name="name" required/> <br />
            <label htmlFor={id + "email"}>Email: </label>
            <input type="email" name="email" required /> <br />
            <label htmlFor={id + "message"}>Message: </label>
            <textarea name="message" id="" cols="30" rows="10" required></textarea>
            <br />
            <button type="submit">Submit</button>
        </form>
    );

}
