// import { ChildComp, getImageUrl } from './PracticeComp';

import { Children } from "react"

// export default function Practice() {
//   return (
//     <>
//     <h1>Notable Scientists</h1>
//     <ChildComp 
//         src={getImageUrl('szV5sdG')}
//         alt={'Maria Skłodowska-Curie'}
//         prof={'physicist and chemist'}
//         name={'Maria Skłodowska-Curie'}
//         awards={'(Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal)'}
//         disc={'polonium (chemical element)'}
//     />
//     <ChildComp 
//         src={getImageUrl('YfeOqp2')}
//         alt={'Katsuko Saruhashi'}
//         prof={'geochemist'}
//         name={'Ana bilis'}
//         awards={'(Miyake Prize for geochemistry, Tanaka Prize)'}
//         disc={'a method for measuring carbon dioxide in seawater'}
//     />
    
//     </>
//   );
// }

// import { useState } from "react";

// export default function Practice() {
//   const [inputValue, setInputValue] = useState("");
//   const [showMsg, setShowMsg] = useState(false);

//   const answer = "Talha";

//   const InputHandler = (event) => {
//     setInputValue(event.target.value);
//   };

//   const Checker = () => {
//     if (inputValue === answer) {
//       setShowMsg(true); // Show success message
//     } else {
//       alert("Wrong answer, try again!"); // User-friendly feedback
//       setInputValue(""); // Clear input
//     }
//   };

//   const resetHandler = () => {
//     setInputValue("");
//     setShowMsg(false); // Reset state
//   };

//   return (
//     <>
//       {showMsg ? (
//         <div>
//           <h1>Match</h1>
//           <button onClick={resetHandler}>Restart</button>
//         </div>
//       ) : (
//         <form onSubmit={(e) => e.preventDefault()}>
//           <p>What is your name?</p>
//           <input
//             type="text"
//             onChange={InputHandler}
//             value={inputValue}
//             placeholder="Enter your name"
//           />
//           <button onClick={Checker} disabled={inputValue.length === 0}>
//             Submit
//           </button>
//         </form>
//       )}
//     </>
//   );
// }


//That should be avoided

// import { useId , useState } from "react";

// export default function Practice (){
//         const [ firstName,setFirstName ]  = useState("");
//         const [ lastName,setLastName ]  = useState("");
//       const id = useId();
//       const [ fullName ,  setFullName ] = useState("")
//   const LastNameHandle = (event) =>{
//     setLastName(event.target.value);
//     setFullName( firstName + " " + event.target.value);
//   }
//   const FirstNameHandle = (event) =>{
//     setFirstName(event.target.value);
//     setFullName(event.target.value + " " + lastName);
//   }
//   return (
//     <form>

//       <label htmlFor={ id + "firstname" }>First Name</label>
//       <input type="text" onChange={FirstNameHandle} value={firstName} />
//       <label htmlFor={ id + "lastname" }>Last Name</label>
//       <input type="text" onChange={LastNameHandle} value={lastName}/>

//       <p>Your Full name is :{ fullName }</p>

//     </form>
//   )
// }

//That should be adopted 

// import { useId , useState } from "react";

// export default function Practice (){
//         const [ firstName,setFirstName ]  = useState("");
//         const [ lastName,setLastName ]  = useState("");
//       const id = useId();
//       const fullName = firstName + " " + lastName;      
//   const LastNameHandle = (event) =>{
//     setLastName(event.target.value);
//   }
//   const FirstNameHandle = (event) =>{
//     setFirstName(event.target.value);
//   }
//   return (
//     <form>

//       <label htmlFor={ id + "firstname" }>First Name</label>
//       <input type="text" onChange={FirstNameHandle} value={firstName} />
//       <label htmlFor={ id + "lastname" }>Last Name</label>
//       <input type="text" onChange={LastNameHandle} value={lastName}/>

//       <p>Your Full name is :{ fullName }</p>

//     </form>
//   )
// }

// import { useState } from "react"
// export default function Practice(){
//   const [ index , setindex ] = useState(0)
//   return (
//         <>
//           <Panel 
//               title = "About"
//               isActive = { index === 0 }
//               show = {() => setindex(0) }
//           >
//             I'm Talha I studying at Govt Science College. I'm actively in 5th semester amd maintaining 3.5 cgpa.  
//           </Panel>
//           <Panel 
//               title = "Expenses"
//               isActive = { index === 1 }
//               show = { () => setindex(1) }
//           >
//             My house is almost 50 lakh. My college fee is almost 20 thousand . My monthly expenses is almost 3000 rs.
//           </Panel>

//         </>
//       )
// }

// const Panel =  ({ title , isActive , show , children }) =>{
      
//   return (
//     <>
//       <h1 className="text-3xl">{title}</h1>
//       { 
//         isActive ? <p>{children}</p> : <button onClick={show} className="bg-blue-400 p-[5px] text-white rounded">Show me</button>
//       }
//     </>

//   )
// }

