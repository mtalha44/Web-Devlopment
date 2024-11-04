import { useEffect, useState } from "react";

const Challenge = () => {

        const [count,setCount] = useState(0);
        const [inputValue,setValue] = useState("");
        const changeeHandler =(value) =>{
            setValue(value)
        }
        
        useEffect(() =>{
            document.title = `count: ${count}`  
        },[count])

        useEffect(() => {
            
            console.log("name:" , inputValue)

        },[inputValue])
    return (
        <>
            <section className="w-[130vh] m-auto bg-teal-100 p-[20px]">
                <h1 className="text-center text-4xl ">useEffect Challenge</h1>
                <div className="m-[30px] px-[50px]">
                    <p>Count:{count}</p>
                    <span>Name:</span> <input type="text" name="" id="" onChange={(event) => changeeHandler(event.target.value)} value={inputValue}/>
                <p>Your name : {inputValue} </p>
                </div>
                <div className="flex flex-row justify-around items-center  m-[10px]">
                    <button className="bg-teal-400 p-[8px]" onClick={() => setCount( count + 1)}>Increament</button>
                </div>
            </section>
        </>
    )
}

export default Challenge;