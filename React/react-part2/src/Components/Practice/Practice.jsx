import { useEffect, useReducer, useState } from "react"


export const Practice = () => {
    //     const [ inputVal , setInputVal ] = useState("");
    //     const [ addPerson , setPerson ] = useState([]);
    //     const [ addTask , setTask ] = useState("");
    //     const handleVal = (e) =>{
    //         setInputVal(e.target.value);
    //     }
    //     const handleForm = (e) =>{
    //         e.preventDefault();
    //         setInputVal('')
    //     }
    //     const Person = () =>{
    //     if( inputVal.trim() === "" ){
           
    //     }
    //     else
    //     setPerson(inputVal)

    //     }
    //     const assignTask = () => {
    //         const task = [ "Engineer" , "Painting" , "Student" ];
    //         setTask( task[ Math.floor( Math.random() * 3 ) ]);
    //     }
    // return (
    //     <>
    //         <form onSubmit={handleForm}>
    //             <input type="text" name="" id="" onChange={handleVal} value={inputVal}/>
    //             <button onClick={Person}>Add Task</button>
    //             <button onClick={assignTask}>Assign Task</button>
    //             <div>{addPerson} : {addTask} </div>
    //             <button onClick={() => setTask("") }>Remove</button>
    //         </form>
    //     </>
    // )
    
    // const reduce = (state , action) => {
    //     if(action.type === "increment"){
    //         return state + 1 ;
    //     }
    //     else{
    //         return state - 1 ;
    //     }
    // }
    // const [ countVal , setCountVal ] =   useReducer( reduce , 0);
    // return (
    //     <>
    //      <button onClick={ () => setCountVal({ type : "increment" })}>Increament:{countVal}</button>
    //      <button onClick={() => setCountVal({ type : "decreament" } ) }>Decreament:{countVal}</button>
    //     </>
    // )

    function clock() {

        const [ date , setDate ] = useState(null)
        useEffect(() => {
    const interval =  setInterval(() => {
        const today = new Date();
        const time = today.toLocaleTimeString();
        console.log(today)
        console.log(time)
        setDate(time);
    }, 1000);
    
    clearInterval(interval);
})
    }

return <h1>{clock}</h1>
}