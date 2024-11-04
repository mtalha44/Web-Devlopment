import { useState } from "react";
import "./SignUpForm.css"

const SignUpForm = ()   =>{
     const [ userValue , setUser ] = useState({
        firstName : "",
        lastName : "",
        email : "",
        password : "",
        phoneNumber : "",
     })

     const handleChange = (event) =>{
        const { name , value } = event.target ;
        console.log(event.target);
        setUser((prev) => ({ ...prev , [name] : value}))
        
    }

    const handleFormSubmit = (e) =>{
            e.preventDefault();
            console.log(userValue);
    }

    return (
        <>
            <form className="form" onSubmit={handleFormSubmit}>
                <div className="bg-white">
                    <h1 className="heading">Sign Up</h1>
                    <p className="sub-heading">Please fill the form the form to create an account</p>
                </div>
                <label htmlFor="firstName">First Name</label> <br />
                <input type="text" name="firstName" id="" className="mb-[5px]" required onChange={handleChange} value={userValue.firstName}/> <br />
                <label htmlFor="lastName">Last Name</label> <br />
                <input type="text" name="lastName" id="" className="mb-[5px]"  onChange={handleChange} value={userValue.lastName}/> <br />
                <label htmlFor="email">Email</label> <br />
                 <input type="email" name="email" id="" className="mb-[5px]" required onChange={handleChange} value={userValue.email}/> <br />
                <label htmlFor="password">Password</label> <br />
                <input type="text" name="password" id="" className="mb-[5px]" required onChange={handleChange} value={userValue.password}/> <br />
                <label htmlFor="phoneNumber">Phone Number</label> <br />
                <input type="phone" name="phoneNumber" id="" className="mb-[5px]" onChange={handleChange} value={userValue.phoneNumber}/> <br />
                <div className="bg-white">
                    <p className="sub-heading">By creating an account you have to agree to our <a href="">Terms and Conditions</a> </p>
                    <button className="sign-up">Sign Up</button>
                </div>
            </form>
        </>
    )
}

export default SignUpForm;