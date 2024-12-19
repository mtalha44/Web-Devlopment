import {  useReducer } from "react"


// export const Practice = () => {
//     //     const [ inputVal , setInputVal ] = useState("");
//     //     const [ addPerson , setPerson ] = useState([]);
//     //     const [ addTask , setTask ] = useState("");
//     //     const handleVal = (e) =>{
//     //         setInputVal(e.target.value);
//     //     }
//     //     const handleForm = (e) =>{
//     //         e.preventDefault();
//     //         setInputVal('')
//     //     }
//     //     const Person = () =>{
//     //     if( inputVal.trim() === "" ){
           
//     //     }
//     //     else
//     //     setPerson(inputVal)

//     //     }
//     //     const assignTask = () => {
//     //         const task = [ "Engineer" , "Painting" , "Student" ];
//     //         setTask( task[ Math.floor( Math.random() * 3 ) ]);
//     //     }
//     // return (
//     //     <>
//     //         <form onSubmit={handleForm}>
//     //             <input type="text" name="" id="" onChange={handleVal} value={inputVal}/>
//     //             <button onClick={Person}>Add Task</button>
//     //             <button onClick={assignTask}>Assign Task</button>
//     //             <div>{addPerson} : {addTask} </div>
//     //             <button onClick={() => setTask("") }>Remove</button>
//     //         </form>
//     //     </>
//     // )
    
//     // const reduce = (state , action) => {
//     //     if(action.type === "increment"){
//     //         return state + 1 ;
//     //     }
//     //     else{
//     //         return state - 1 ;
//     //     }
//     // }
//     // const [ countVal , setCountVal ] =   useReducer( reduce , 0);
//     // return (
//     //     <>
//     //      <button onClick={ () => setCountVal({ type : "increment" })}>Increament:{countVal}</button>
//     //      <button onClick={() => setCountVal({ type : "decreament" } ) }>Decreament:{countVal}</button>
//     //     </>
//     // )

//         // const [ dateTime , setDate ] = useState("");
//         // useEffect(() => {
//         // const interval =  setInterval(() => {
//         // const today = new Date();
//         // const time = today.toLocaleTimeString();
//         // setDate(time);
//     // }, 1000);
    
//     // return () => clearInterval(interval);
// // })
//     const [ pssw , setPass ] = useState("");
//     const [ passType , chgPass ] = useState(false);
//     const handleFun = (e) => {
//           console.log(e);
//           e.preventDefault();
//           setPass(e.target.value);
//     }
// return <>
//     <input type={ passType ? "text" : "password" } onChange={handleFun} value={pssw}/>
//     <button onClick={() => chgPass(!passType)}>Show</button>
// </>

// }

export const Practice = () => {
    const reduce = ( state , action ) => {
            switch( action.type )
            {
            case "name" :
                console.log(state);
                return [...state] = action.val;       
            case "email" :
                console.log(state);
                return [...state] = action.val;       
            case "password" :
                console.log(state);
                return [...state] = action.val;      
            }   
    }
    const  initializer = [ 'email' , 'name' , 'password' ]
    const [ inputVal , dispatch ] = useReducer( reduce , initializer )

    return (

        <form>
            <label htmlFor="">Name:</label><br />
            <input type="text" onChange={(e) => dispatch({ type : 'name' , val : e.target.value})} value={inputVal}/><br />
            <label htmlFor="">Email:</label><br />
            <input type="email" onChange={(e) => dispatch({ type : 'email' , val : e.target.value})} value={inputVal} /><br />
            <label htmlFor="">Password:</label><br />
            <input type="password" onChange = { (e) => dispatch({ type : 'password' , val : e.target.value}) } value={inputVal}/><br />
        </form>
    )

}