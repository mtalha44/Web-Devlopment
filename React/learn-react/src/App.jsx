// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import './App.css'

// import { Sibling } from './Components/hooks/State'
// import LearnState from './Components/hooks/State'
// import { States } from './Components/hooks/State'

import {DerivedStates} from './Components/DerivedStates'
import Project from './Project'

const  App = () => {
  return (
    <>
        {/* <LearnState/>
        <Sibling/> */}
        {/* <States /> */}

        {/* <DerivedStates/> */}

        <Project/>

    </>
  )
}


// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// import {Form} from "./Components/Form"

// const App = () =>{
  
//   return <Form/>

// }

export default App
