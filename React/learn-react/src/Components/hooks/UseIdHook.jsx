// import { useId, useRef } from "react";

// export const UseIdHook = () =>{
  
//     const username = useRef(null);
//     const password = useRef(null);

//     const usernameId  = useId();
//     const passwordId = useId();

//     const handleForm = (e) =>{
//         e.preventDefault();
//         console.log(username.current.value,password.current.value);
//     }
//     return (
//         <>
//         <form onSubmit={handleForm}>
//             <label htmlFor={usernameId}>Username</label>
//         <input type="username" id={usernameId} ref={username} className=" w-[16rem] rounded-lg h-[2.3rem] pl-[12px] border border-gray-500 focus:border-black focus:outline-none"/>
//         <label htmlFor={passwordId}>Password</label>
//         <input type="password" id={passwordId} ref={password} className=" w-[16rem] rounded-lg h-[2.3rem] pl-[12px] border border-gray-500 focus:border-black focus:outline-none"/>
//             <button type="submit">Submit</button>
//         </form>
//         </>
//     )
// }




import { useId, useRef } from "react";

export const UseIdHook = () =>{
  
    const username = useRef(null);
    const password = useRef(null);

    const id  = useId();

    const handleForm = (e) =>{
        e.preventDefault();
        console.log(username.current.value,password.current.value);
    }
    return (
        <>
        <form onSubmit={handleForm}>
            <label htmlFor={ id + "usernameId" }>Username</label>
        <input type="username" id={id + "usernameId" } ref={username} className=" w-[16rem] rounded-lg h-[2.3rem] pl-[12px] border border-gray-500 focus:border-black focus:outline-none"/>
        <label htmlFor={id + "passwordId" }>Password</label>
        <input type="password" id={ id + "passwordId" } ref={password} className=" w-[16rem] rounded-lg h-[2.3rem] pl-[12px] border border-gray-500 focus:border-black focus:outline-none"/>
            <button type="submit">Submit</button>
        </form>
        </>
    )
}