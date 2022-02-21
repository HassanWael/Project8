import  './navbar.css'
import Logo from './logo.png'
import React from 'react'
import { useState } from 'react';
import { auth , db} from '../Database/firebase'
import { Link , NavLink , useNavigate} from "react-router-dom";
function Navbar() {
   const navSlide=()=>{
       const nav =document.querySelector('.nav-items');
        nav.classList.toggle('nav-active')
   }
  
  return (
    <header className='navbar'>
      <nav className='nav-contaner'>
        <div className="logo-side">
        <Link to={'/'}><img className='logo' src={Logo} alt=""/></Link>
        </div>
        <div className="nav-items-side">
            <ul className='nav-items'>
               <Link to={'/'}><li className='nav-item'>Home</li></Link>
               <Link to={'/Book'}><li className='nav-item'>Book</li></Link>
               {/* <Link><li className='nav-item'>Profile</li></Link> */}
               <Link to={'/login'}><li className='nav-item'>Login</li></Link>
               <Link to={'/register'}><li className='nav-item'>Register</li></Link>
               {/* <button onClick={()=>{auth.signOut()}}>Signout</button>
               <p>{auth.currentUser ? auth.currentUser.email:'login'}</p> */}
               <Link to={'/profile'}><li className='nav-item'>Profile</li></Link>
               
                
                <button className='Resume-btn nav-item'>Resume</button>
            </ul>
        </div>
                <div className="burger" onClick={navSlide} >
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div>
      </nav>
    </header>
  )
}

export default Navbar
