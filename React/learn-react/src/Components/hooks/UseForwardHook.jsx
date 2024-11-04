import { useId, useRef } from "react"
import { forwardRef } from "react";

export const UseForwardHook = ( )=>{
    const username = useRef(null);
    const password = useRef(null);
    
    const handleForm = (e) =>{
        e.preventDefault();
        console.log(username.current.value,password.current.value);
    }
    return(
        <>
        <form onSubmit={handleForm}>

        <ChildComp label="username" ref={username} />
        <ChildComp label = "password" ref={password} />
        <button type="submit">Submit</button>
        </form>
        </>
    ) 
}

// Before v19

const ChildComp = forwardRef((props,ref)=>{
    const id = useId();
    return(
        <>
        <label htmlFor={id}>{props.label}</label><br />
        <input type={props.label}  ref={ref} className=" w-[16rem] rounded-lg h-[2.3rem] pl-[12px] border border-gray-500 focus:border-black focus:outline-none"/><br />            
        </>
    )
})

// const ChildComp = ({label,ref}) => {
//     const id = useId();
//     return(
//         <>
//         <label htmlFor={id}>{label}</label><br />
//         <input type={label}  ref={ref} className=" w-[16rem] rounded-lg h-[2.3rem] pl-[12px] border border-gray-500 focus:border-black focus:outline-none"/><br />            
//         </>
//     )
// }