import { useRef } from "react";

export const UseRefHook = () =>{
  
    const username = useRef(null);
    const password = useRef(null);

    const handleForm = (e) =>{
        e.preventDefault();
        console.log(username.current.value,password.current.value);
    }
    return (
        <>
        <form onSubmit={handleForm}>
        <input type="username" ref={username} className=" w-[16rem] rounded-lg h-[2.3rem] pl-[12px] border border-gray-500 focus:border-black focus:outline-none"/>
        <input type="username" ref={password} className=" w-[16rem] rounded-lg h-[2.3rem] pl-[12px] border border-gray-500 focus:border-black focus:outline-none"/>
            <button type="submit">Submit</button>
        </form>
        </>
    )
}