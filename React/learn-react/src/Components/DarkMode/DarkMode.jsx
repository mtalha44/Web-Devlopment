import { createContext, useContext, useState } from "react"



const DarkMode = createContext();

export const DarkModeProvider = ({children}) =>{
    const[ DarkTheme , setTheme ] = useState("Dark")
    const handleTheme = () =>{
        
             return setTheme( (prevTheme) => ( prevTheme == "Dark" ? "Light" : "Dark" ) );
    
    }
    return (
        <DarkMode.Provider value={{ DarkTheme , handleTheme }}>
            {children}
        </DarkMode.Provider>
    )
}





export const DarkModeComp = () =>{
    const { DarkTheme , handleTheme } = useContext(DarkMode);

    return (
            <div className={`h-lvh flex flex-col justify-center items-center gap-[2rem] ${ DarkTheme == "Light" ? "bg-white" : "bg-black text-white"}`}>
                <h1 className="text-[2rem]">Hello Friends! React Website</h1>
                <h2 className="text-xl" >Welcome to home page.</h2>
                <button onClick={handleTheme} className={`bg-black rounded-lg h-[2.5rem] p-[8px]  ${ DarkTheme=="Light" ? "bg-black text-white" : "bg-white text-black"} `}>Switch to {`${ DarkTheme == "Light" ? "Dark" : "Light"}`} Mode</button>
            </div>
    )
}