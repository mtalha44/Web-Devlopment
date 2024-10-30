import "./ToDoList.css";
import { useState } from "react";

export const ToDoForm = ({addToDo}) =>{

    const [inputValue,setValue] = useState({});

    const changeHandler = (value) =>{
          setValue( { id:value, content : value , checked : false } );
    }
    
    const handleFormSubmit = (event) =>{
        event.preventDefault();
        addToDo(inputValue);
        setValue({id: "" , content : "" , checked : false});
    }
 
    return (
        <>

        <form onSubmit={handleFormSubmit}>
             
             <div className="addTask">
                
                <input type="text" name="" id="taskField" autoComplete="off" onChange={(event)=> changeHandler(event.target.value)} value={inputValue.content}/>
                <button className="addTaskBtn">Add Task</button>

             </div>
             
        </form>
        
        </>
    )
}