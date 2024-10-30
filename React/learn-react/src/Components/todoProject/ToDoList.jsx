import "./ToDoList.css"
import { ToDoForm } from "./ToDoForm";
import { ToDoTask } from "./ToDoTask";
import { ToDoDateTime } from "./ToDoDateTime";

import { useState , useEffect } from "react";
import { getlocalStorage , settodolocalStorage } from "./ToDoStorage";

const ToDo = () =>{ 

    
    const [task , setTask] = useState([]);

    useEffect(() => {
      const initialTasks = getlocalStorage();
      setTask(initialTasks); // Set state once we have access to localStorage data
  }, []);

    const handleFormSubmit = (inputValue) =>{
        const { id, content , checked } = inputValue;
        
        //to check input is empty or not
        if(!content) return;
        
        //  to check if the data is already exist
        const ifToDoMatched =  task.find((cur) => cur.content == content);
        if(ifToDoMatched) return;


        setTask((prev) => [ ...prev, { id , content , checked } ] );
    }


      settodolocalStorage(task);

    const DeleteLi = (value) =>{
            const update = task.filter((cur) => cur.content != value );
            setTask(update);
    }

    const ReadToDo = (content) =>{
          const updateTask = task.map((curTask) =>{
            if(curTask.content == content ){
                return { ...curTask , checked : !curTask.checked };
        }
        else{
            return curTask;
        }
    })
    setTask(updateTask);
    }

    return (
        <>
        <section className="todoList">
          <section className="main">
            
            <h1 className="heading">To Do List</h1> 

            <ToDoDateTime/>
            <ToDoForm addToDo ={handleFormSubmit} />
          
          </section>
          
          <section>
            <ul>
                {
                    task.map((cur) =>{
                          return <ToDoTask 
                          key ={cur.id}
                          cur = {cur.content} 
                          onDelete ={DeleteLi}
                          checked = {cur.checked}
                          onRead = {ReadToDo}
                          />
                    })
                }
            </ul>
          </section>

          <section>

            <button className="clearBtn" onClick={() => setTask([])}>Clear All</button>

          </section>

          </section>
        </>
    )
}
export default ToDo;

