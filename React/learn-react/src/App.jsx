// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import './App.css'
import { CompProvider } from './Components/hooks/UseContextApi'
// import Practice from './Components/Practice'

import { Home } from './Components/hooks/Consumer'

// import { UseIdHook } from './Components/hooks/UseIdHook'

// import { UseForwardHook } from './Components/hooks/UseForwardHook'
// import { UseRefHook } from './Components/hooks/UseRef'
// import { Pokemon } from './Components/newProject/Pokemon'

// import { AsyncFetchPoke } from './Components/hooks/FetchUsingAsync'
// import Challenge from './Components/hooks/Effect'
// import UseEffectCleanUp from './Components/hooks/EffectChallenge'
// import { NotFetch } from './Components/hooks/HowDontFetch'
// import LoginForm from './Components/project/LoginForm'

// import { Sibling } from './Components/hooks/State'
// import LearnState from './Components/hooks/State'
// import { States } from './Components/hooks/State'

// import {DerivedStates} from './Components/DerivedStates'
// import Project from './Project'

// import { LiftStateUp } from './Components/LiftStateUp'
// import ToDo from './Components/todoProject/ToDoList'

// import Scicuit from './Components/shortCircuitEvaluation/Scircuit'
// import Challenge from "./Components/hooks/UseStateChallenge"
// import SignUpForm from './Components/project/SignUpForm'
// import ContactForm from './Components/project/ContactForm'
// import { FetchPoke } from './Components/hooks/PokemonCard'


const  App = () => {
  return (
    <>
        {/* <LearnState/>
        <Sibling/> */}
        {/* <States /> */}
        {/* <DerivedStates/> */}
        {/* <Project/> */}
        {/* <LiftStateUp/> */}
        {/* <ToDo/> */}
        {/* <Scicuit/> */}
        {/* <Challenge/> */}
        {/* <SignUpForm/> */}
        {/* <LoginForm/> */}
        {/* <ContactForm/> */}
        {/* <Challenge/> */}
        {/* <UseEffectCleanUp/> */}
        {/* <NotFetch/> */}
        {/* <FetchPoke/> */}
        {/* <AsyncFetchPoke/> */}
        {/* <Pokemon/> */}
        {/* <UseRefHook/> */}
        {/* <UseForwardHook/> */}
        {/* <UseIdHook/> */}
        {/* <Practice/> */}

          <CompProvider>
            <Home/>
          </CompProvider>
        
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
