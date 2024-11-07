// import { createContext } from "react";

import { createContext } from "react";


// export const BioContext = createContext();

// export const BioProvider = ({children}) =>{
//     const name=  'Talha' ;
//     const age = '23';
//     return <BioContext.Provider value={{name,age}}>
//         {children}
//     </BioContext.Provider>
// }


//1st step

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
