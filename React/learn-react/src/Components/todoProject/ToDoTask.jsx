import { TiTickOutline } from "react-icons/ti";
import { MdDeleteForever } from "react-icons/md";

import "./ToDoList.css"


export const ToDoTask  = ({ cur,onDelete ,checked , onRead }) =>{
    
    return (
        <li> <span className={checked ? "checklist" : "notChecklist"}> {cur} </span> 
             <TiTickOutline className="tickIcon"     onClick={() => onRead(cur)}/>
             <MdDeleteForever className="deleteIcon"
              onClick={() => onDelete(cur)}/>
        </li>
    )
}