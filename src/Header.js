//18- Organize components

import React from 'react';
import ReactDOM from 'react-dom/client';
import img from "./assets/react.png"
import './index.css'


export default function Header(){
    return(
   
        <header className='header'>
          <nav className='nav'>
               <img src={img} className="img"></img>
            <ul className='nav-items'>
              <li>Pricing</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </nav>
        </header>
      
    )
  }