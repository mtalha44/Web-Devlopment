
import { Header } from "./Header"
import { Footer } from "./Footer"
import { Outlet } from "react-router-dom"
import { Home } from "../Pages/Home"
import { About } from "../Pages/About"
import { Contact } from "../Pages/Contact"


export const Applayout = () =>{

    return(
        <>
          <Header/>
          <Outlet/>
          <Footer/>
        </>
    )
}