import { useState } from "react";

export  const  DerivedStates = () =>{
let [users,setUser]  = useState(
    [
        { name : "Ali", age : 25 },
        { name : "Robert", age : 35 },
        { name : "John", age : 45 },
        { name : "Talha", age : 55 },
    ]
);

const userCount = users.length;
const avgage = users.reduce((accum , curElem) => ( accum + curElem.age )  , 0  ) / userCount ; 
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
    <p>Total User: {userCount}</p>
    <p>Average age: {avgage}</p>
</div>
</>
)
};
