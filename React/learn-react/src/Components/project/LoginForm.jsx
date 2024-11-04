import { useState } from "react";
import "./LoginForm.css"

const LoginForm = ()   =>{
     const [ userValue , setUser ] = useState("")
     const [ passwordValue , setpassword ] = useState("")

    // Another Method
    //  const handleChange = (event) =>{
    //     const { name , value } = event.target ;

    //     switch(name)
    //     {
    //         case "username" :
    //             setUser(value);
    //         break;

    //         case "password" :
    //             setpassword(value);
    //         break;
    //     }
        
    // }

    const handleFormSubmit = (e) =>{
            e.preventDefault();
            const FormData = {
                userValue ,
                passwordValue 
            }
            console.log(FormData);
    }

    return (
        <>
            <form className="form" onSubmit={handleFormSubmit}>
                    <h1 className="heading">Login Form</h1>
                <label htmlFor="username">Username</label> 
                 <input type="username" name="username" id="" className="mb-[5px]" required onChange={(e) => setUser(e.target.value) } value={userValue}/> 
                <label htmlFor="password">Password</label> 
                <input type="text" name="password" id="" className="mb-[5px]" required onChange={(e) => setpassword(e.target.value) } value={passwordValue}/>                 
                    <button className="login">Login</button>
                
            </form>
        </>
    )
}

export default LoginForm;