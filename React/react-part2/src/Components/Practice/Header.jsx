import "./Header.css"
import { useState } from "react";

export const Header = () => {

    const [ hideLi, setHide ] = useState(false);

    return (
        <header className="container">
            <div className={ `logo-section-lg flex-row ${ !hideLi ? "gayab" : "logo-section"}`}>
            <img src="/logo/Tlogo.png" alt="T" className="logo" />            
            <h3 className="logo-text">ALHA</h3>
            </div>
            <nav className={`navbar-lg ${hideLi ? "close-navbar" : "navbar"} `}>
                <ul className={`nav-list-lg ${ hideLi ? "gayab" : "nav-list" }`}>
                    <li>    <a href="#Home"     className="nav-link">     <i className='bx nav-icons  bx-home'></i> Home</a>          </li>
                    <li>    <a href="#About"    className="nav-link">    <i className='bx nav-icons bx-user'></i> About</a>          </li>
                    <li>    <a href="#Serices"  className="nav-link">  <i className='bx nav-icons bx-briefcase' ></i> Services</a> </li>
                    <li>    <a href="#Skills"   className="nav-link">   <i className='bx nav-icons bx-award' ></i> Skills</a>       </li>
                    <li>    <a href="#Portfolio"className="nav-link"><i className='bx nav-icons bx-image' ></i> Portfolio</a>    </li>
                    <li>    <a href="#Contact"  className="nav-link">  <i className='bx nav-icons bx-message-rounded-dots'></i> Contact</a> </li>
                    

                </ul>
                <i className={`bx bx-x  ${hideLi ? "gayab" : "nav-close-icon"}`} onClick={() => setHide(!hideLi)}></i>
            </nav>
                <i className={ ` bx bx-menu  ${ !hideLi ? "gayab" : "nav-menu-icon"}` } onClick={() => setHide(!hideLi)}></i>
        </header>
    )
}