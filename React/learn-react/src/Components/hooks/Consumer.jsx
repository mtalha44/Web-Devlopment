// import { useContext } from "react"
// import { use } from "react"

import { useCompContext } from "./UseContextApi"

// 1st way
// export const Home  = () =>{
//     //3#rd Step
//     const {name,age} = useContext(CompContext);
//     return (
//         <li>What is your name : {name} . What is your name : {age}</li>
//     )
// }

//2nd way
export const Home  = () =>{
    //3#rd Step
    const {name,age} = useCompContext(); // Custom hook
    return (
        <h1>What is your name : {name} . What is your name : {age}</h1>
    ) 
}

// 3rd way but not used till yet
// export const Home  = () =>{
//     //3#rd Step
//     const {name,age} = use(CompContext); // Custom hook
//     return (
//         <h1>What is your name : {name} . What is your name : {age}</h1>
//     ) 
// }