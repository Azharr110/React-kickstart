import React from 'react';
import img from "../assets/react.png"


export default function Navbar (){
    return(
        <nav className='nav'>
            <img src={img}  className="nav--icon"></img>
            <h3 className='nav-logo_text'>React Facts</h3>
            <h4 className='nav-title'>React Course - Project 1</h4>
        </nav>
    )
}