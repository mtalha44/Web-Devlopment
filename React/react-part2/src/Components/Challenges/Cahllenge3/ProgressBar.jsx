import { useState } from "react"
import "./ProgressBar.css"
export const ProgressBar = () =>{
    const [ barVal , setBarVal ] = useState([])
    const handleBar = () =>{

        setBarVal( (prevBar) => [...prevBar  , { id : prevBar.length + 1 , content : `Bar + ${prevBar.length + 1}` }])
        
    }
    return (
        <>
            <button onClick={handleBar}>Add</button>
            <ul>

            {
                barVal.map((val) => {
                    return(
                        <li key={val.id}>
                            <div className="progress-bar">
                                <div className="loading"></div>
                            </div>
                        </li>
                    )
                })
            }
            </ul>
                
            
        </>
    )
}