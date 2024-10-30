import "./ToDoList.css"
import { useEffect, useState } from "react";

export const ToDoDateTime = () =>{
    
    const [ dateTime, setDateTime ] = useState("");
    
    useEffect(() =>{
    
        const interval = setInterval(() => {
            
            const now = new Date();
            const formatteDate = now.toLocaleDateString();
            const formatteTime = now.toLocaleTimeString();
    
            setDateTime(`${formatteDate} - ${formatteTime}`);
    
        },1000)
    
        return () => clearInterval(interval);
    })

    return  <h2 className="date-time">{dateTime}</h2>;

}