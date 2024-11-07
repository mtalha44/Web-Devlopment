import { useContext } from "react"
import { CompContext } from "./UseContextApi"

export const Home  = () =>{
    //#rd Step
    const {name,age} = useContext(CompContext);
    return (
        <li>What is your name : {name} . What is your name : {age}</li>
    )
}