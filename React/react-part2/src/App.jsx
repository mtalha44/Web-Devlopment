// import { createBrowserRouter  , createRoutesFromElements, Route, RouterProvider } from "react-router-dom" ;

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import { createBrowserRouter } from 'react-router-dom'
import './App.css'
import { Practice } from './Components/Practice/Practice'
import { Applayout } from './Components/AppLayout/Applayout'
// import { Header } from './Components/Practice/Header'
// import { Todo } from './Components/Practice/ToDo/Todo'
import { About } from './Components/Pages/About'
import { Contact } from './Components/Pages/Contact'
import { Home } from './Components/Pages/Home'
import { ErrorPage } from './Components/Pages/Error'
import { ApiRouter } from './Components/Router/ApiRouter'


function App(){

   const route =  createBrowserRouter([
    {
        path: "/",
        element : <Applayout />,
        // preferred way of error page:
        errorElement : <ErrorPage/>,
        children : [
           {
            path : "/",
            element : <Home/>
           },
           
           {
            path : "/about",
            element : <About/>,
            loader : ApiRouter,
           },
           {
            path : "/contact",
            element : <Contact/>
           }
          ]
    }
    ])
  return <RouterProvider router={route}/> 

}
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

// function App(){
//   // return <Header />
//   return <Todo />
// }



// function App(){

//   return <Practice />
// }

export default App
