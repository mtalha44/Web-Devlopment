import { useEffect, useState } from "react";

const UseEffectCleanUp = () => {

        const [count,setCount] = useState(0);
        

        useEffect(()=>{
            const interval = setInterval(()=>{
                setCount( count + 1 )
            },1000)

            return () => clearInterval(interval);
        })



       
    return (
        <>
            <section className="w-[130vh] m-auto bg-teal-100 p-[20px]">
                <h1 className="text-center text-4xl ">My Subcribers on YouTube</h1>
                <div className="m-[30px] px-[50px]">
                    <p>Count:{count}</p>
                </div>
            </section>
        </>
    )
}

export default UseEffectCleanUp;