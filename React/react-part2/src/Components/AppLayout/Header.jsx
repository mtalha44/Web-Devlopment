import { NavLink } from "react-router-dom"
import "./Applayout.css"
export const Header = () => {
    return(
        <>
            <header className="header">
                <div className="logo">Logo</div>
                <div className="navlinks">
                   <NavLink to="/" >Home</NavLink>
                   <NavLink to="about" >About</NavLink>
                   <NavLink to="contact" >Contact</NavLink>
                   <NavLink to="services" >Services</NavLink>
                </div>
            </header>
        </> 
    )
}