import React, { useState } from 'react';

// const LearnState = () => {
//     const [count, setCount] = useState(0); // Initialize state

//     const Inc = () => {
//         setCount(count + 1); // Update state
//     }

//     return(
//         <>
//              <h1>Count is {count}</h1>
//              <button onClick={Inc}>Increment</button>        
//         </>
//     );
// }

// import React, {useState} from 'react' ;

// const LearnState = () =>{
//     let [count,setCount]  = useState(0);
    
//     const Inc = () =>{
        
//         setCount( ++count ) // setCount( () => count + 1 )
//         console.log(count);

//     }
// console.log("Parent Componenet Rendered");
//     return(
//             <>
//             <div className="main">
//                 <h1>Count is {count}</h1>
//                 <button onClick={Inc}>Increment</button>        
//             </div>
//             <ChildComp count = {count} />
//              </>
//     );
// }

// function ChildComp({count}){
//     console.log("child component rendered");
//     return <div>
//         <h1>
//         Child Component : {count}
            
//         </h1>
//         </div>
// }

// export function Sibling(){
//     console.log("Sibling component rendered");
//     return <div>
//         <h1>
//              Sibling Component
//         </h1>
//         </div>
// }

// export default LearnState;

//useState Challenge

export const States = () =>{

        let [users,setUser]  = useState(
            [
                { name : "Ali", age : 25 },
                { name : "Robert", age : 35 },
                { name : "John", age : 45 },
                { name : "Talha", age : 55 },
            ]
        );

    return (
        <>
        <div className='main-div'>
            <h1>Users List</h1>
            <ul>
                {
                    users.map( ( cur , ind ) => {
                        return (
                            <li key={ind}>
                                { cur.name } - { cur.age } year old.
                            </li> 
                        )
                    }        
                    )
                }
            </ul>  
        </div>
        </>
    )
};


