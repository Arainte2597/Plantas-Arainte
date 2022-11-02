import React from 'react'
import Cartwidget from './cartwidget';

function Navbar() {
  return (
    <nav>
       
        <ul>
            <li>
                <a href="/"> <Cartwidget/>Plantas</a>
                
            </li>
            <li>
                <a href="/"> <Cartwidget/>Abono</a>
               
            </li>
            <li>
                <a href="/"> <Cartwidget/>Macetas</a>
                
            </li>
        </ul>
    </nav>
  )
}

export default Navbar;