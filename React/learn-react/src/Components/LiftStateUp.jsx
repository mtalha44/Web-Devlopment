import { useState } from "react"

export const LiftStateUp = () =>{
    const [inputValue,setValue] = useState("");  
    return (
        <>
            <InputComp input={inputValue} setval ={setValue} />
            <DisplayComp input={inputValue}/>
           
        </>
    )


}
const InputComp = ({input,setval}) =>{
    
    return (
        <> 
            <input type="text" placeholder="Enter Your age" value={input} onChange={(e)=> setval(e.target.value)}/>
        </>
    )
}
const DisplayComp = ({input}) =>{
    return (
        <>
            <p>Age is : {input}</p>
        </>
    )
}