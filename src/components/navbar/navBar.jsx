import React from 'react'
import Cartwidget from './cartwidget';
import {Link} from "react-router-dom"
import "./navbar.css"

function Navbar() {
  return (

    <nav className='nav-menu'>
       
        <ul className='nav-list'>
            <li>
                <Link to="/">
                    <img className='logo' src="http://decidite.com/upload/image/600x6001290742194_autoshop.jpg" alt="car-logo" />
                </Link>
            </li>
            <li>
                <Link to="/">
                    <h2>TOM'S CARS</h2>
                </Link>
            </li>
            <li>
                <Link to="/">Inicio</Link>
                
            </li>
            <li>
                <Link to="/category/Ford"> <Cartwidget/>Ford</Link>
               
            </li>
            <li>
                <Link to="/category/Toyota"> <Cartwidget/>Toyota</Link>
                
            </li>
        </ul>
    </nav>
  )
}

export default Navbar;