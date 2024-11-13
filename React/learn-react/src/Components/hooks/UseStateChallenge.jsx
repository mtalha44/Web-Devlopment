import { useState } from "react";

const [count,setCount] = useState(0);
const Challenge = () => {
        const [inputValue,setValue] = useState(1);
        const changeeHandler =(value) =>{
            setValue(value)
        }
    return (
        <>
            <section className="w-[130vh] m-auto bg-teal-100 p-[20px]">
                <h1 className="text-center text-4xl ">useState Challenge</h1>
                <div className="m-[30px] px-[50px]">
                    <p>Count:{count}</p>
                    <span>Step:</span> <input type="number" name="" id="" onChange={(event) => changeeHandler(event.target.value)} value={inputValue}/>
                </div>
                <div className="flex flex-row justify-around items-center  m-[10px]">
                    <button className="bg-teal-400 p-[8px]" onClick={() => setCount( count + Number(inputValue))}  disabled={count > 100}>Increament</button>
                    <button className="bg-teal-400 p-[8px]" onClick={() => setCount( count - Number(inputValue) )} disabled={count <= 0}>Decreament</button>
                    <button className="bg-teal-400 p-[8px]" onClick={() => setCount(0)}>Clear</button>
                </div>
            </section>
        </>
    )
}

export default Challenge;