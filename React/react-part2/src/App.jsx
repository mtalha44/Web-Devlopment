// import { createBrowserRouter  , createRoutesFromElements, Route, RouterProvider } from "react-router-dom" ;

import './App.css'
// import { Header } from './Components/Practice/Header'
import { Todo } from './Components/Practice/ToDo/Todo'
// import { About } from './Components/Pages/About'
// import { Contact } from './Components/Pages/Contact'
// import { Home } from './Components/Pages/Home'
// import { Applayout } from "./Components/AppLayout/Applayout";


// function App(){
//   const router = createBrowserRouter([
//     {
//       path:"/",
//       element : <Applayout />,
//       children : [
//         {
//           path : "/home",
//           element : <Home />
//         },
//         {
//           path : "/about",
//           element : <About />
//         },
//         {
//           path : "/contact",
//           element : <Contact/>
//         },
//       ]
//     }
//   ])
//   return <RouterProvider router={router}/>
// }


// function App(){
//   const router = createBrowserRouter(
//     createRoutesFromElements(
//       <Route>
//         <Route  path="/" element={ <Home/> } />
//         <Route  path="/about" element={ <About/> } />
//         <Route  path="/contact" element={ <Contact/>} />
//       </Route>
//     )
//   )

//   return <RouterProvider router={router}/>
// }

function App(){
  // return <Header />
  return <Todo />

}

export default App
