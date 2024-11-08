// import { createContext } from "react";

import { createContext, useContext } from "react";


//1st way
// export const BioContext = createContext();

// export const BioProvider = ({children}) =>{
//     const name=  'Talha' ;
//     const age = '23';
//     return <BioContext.Provider value={{name,age}}>
//         {children}
//     </BioContext.Provider>
// }



//2nd way


// // 1st step
// export const CompContext = createContext();
// //2nd Step
// export const CompProvider = ({children})=>{
//     const name = 'Talha' ;
//     const age = '23';
//     return (
//         <CompContext.Provider value={{name,age}}>
//             {children}
//         </CompContext.Provider>
//     )
// }

// //custom hook
// export const useCompContext = () =>{
    
//     const context = useContext(CompContext);
//     return context;

// }


//3rd way


// 1st step
export const CompContext = createContext();
//2nd Step
export const CompProvider = ({children})=>{
    const name = 'Talha' ;
    const age = '23';
    return (
        <CompContext.Provider value={{name,age}}>
            {children}
        </CompContext.Provider>
    )
}

//custom hook
export const useCompContext = () =>{
    
    const context = useContext(CompContext);
    return context;

}