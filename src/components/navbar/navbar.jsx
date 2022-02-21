import  './navbar.css'
import Logo from './logo.png'
import React, { useEffect } from 'react'
import { useState } from 'react';
import { auth , db} from '../Database/firebase'
import { Link , NavLink , useNavigate} from "react-router-dom";
function Navbar() {
   const navSlide=()=>{
       const nav =document.querySelector('.nav-items');
        nav.classList.toggle('nav-active')
   }

   const navigate = useNavigate();
   const [isRegister,setIsRegister]=useState(false);
  useEffect(()=>{
    if (auth.currentUser) {
      setIsRegister(true)
    }else
    setIsRegister(false)
  })
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
               <Link to={'/project'}><li className='nav-item'>Projects</li></Link>
               {/* <Link><li className='nav-item'>Profile</li></Link> */}
              
               {/* <button onClick={()=>{auth.signOut()}}>Signout</button>
               <p>{auth.currentUser ? auth.currentUser.email:'login'}</p> */}
               {
                 (auth.currentUser)?
                  <Link to={'/profile'}><li className='nav-item'>Profile</li></Link>
                 :
                 <Link to={'/register'}><li className='nav-item'>Register</li></Link>
               }
           
               
               
                
                <button
                 className='Resume-btn nav-item'
                  onClick={()=>{
                    if(auth.currentUser)
                     { auth.signOut();
                      window.location.reload();
                      setIsRegister(false)
                      
                    }
                      else
                      navigate('/login')
                  }}
                >
                  {isRegister?'Signout':'Login'}
                </button>
           
               
                
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
