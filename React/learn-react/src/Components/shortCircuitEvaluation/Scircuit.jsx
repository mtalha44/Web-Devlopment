import { useState } from "react";

const Scicuit = () => {
    const [ loginValue , setLoginValue ] = useState(true);
    const [ userValue , setUserValue ] = useState(false);
    
    const loginStateHandle = () =>{
          setLoginValue(!loginValue);
    }
    

    return (
        <>
            <section className="w-[130vh] m-auto bg-teal-100 p-[20px]">
                <h1 className="text-center text-4xl ">Short Circuit Evaluation</h1>
                <div className="m-[30px] px-[50px]">
                    <p>{ loginValue && "You Logined" }</p>
                    <p>{ userValue ? `${userValue}` : "Please Login" }</p>
                </div>
                <div className="flex flex-row justify-around items-center  m-[10px]">
                    <button className="bg-teal-400 p-[8px]" onClick={() => loginStateHandle()}>Toggle Login States</button>
                    <button className="bg-teal-400 p-[8px]" onClick={() => setUserValue("Hello Talha")}>Set User</button>
                    <button className="bg-teal-400 p-[8px]" onClick={() => setUserValue(false)}>Clear User</button>
                </div>
            </section>
        </>
    )
}

export default Scicuit;