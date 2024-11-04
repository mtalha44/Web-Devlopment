import { useState } from "react";
import "./ContactForm.css"

const ContactForm = ()   =>{
     const [ userValue , setUser ] = useState("")
     const [ emailValue , setEmail ] = useState("")
     const [ msgValue , setmsg ] = useState("")

    // Anoter Method
     const handleChange = (event) =>{
        const { name , value } = event.target ;

        switch(name)
        {
            case "username" :
                setUser(value);
            break;

            case "email" :
                setEmail(value);
            break;

            case "message" :
                setmsg(value);
            break;
        }
        
    }

    const handleFormSubmit = (e) =>{
            e.preventDefault();
            const FormData = {
                userValue ,
                emailValue,
                msgValue
            }
            console.log(FormData);
    }

    return (
        <>
            <form className="form" onSubmit={handleFormSubmit}>
                    <h1 className="heading">Contact Form</h1>
                <label htmlFor="username">Username</label> 
                 <input type="username" name="username" id="" className="mb-[5px]" required autoComplete="off" onChange={handleChange} value={userValue}/> 
                <label htmlFor="email">Email</label> 
                <input type="text" name="email" id="" className="mb-[5px]" required autoComplete="off" onChange={handleChange} value={emailValue}/>                 
                <label htmlFor="messsage">Message</label>
                <textarea name="message" required autoComplete="off" rows="6" id="" onChange={handleChange} value={msgValue}></textarea>
                    <button className="login">Login</button>
                
            </form>
        </>
    )
}

export default ContactForm;