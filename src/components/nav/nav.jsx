import React, { useState } from 'react';
import { CiLinkedin } from "react-icons/ci";
import { CgMail } from "react-icons/cg";
import { IoLogoGithub } from "react-icons/io"; 
import { HiMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5"; 
import './nav.css'

 

const Nav = () => {

  const [isNavShowing, setIsNavShowing] = useState(false);

  return (
    <nav>
      <div className="container nav__container">
        <a href="#" className="logo" onClick={()=>setIsNavShowing(false)}>photo<span>book</span></a>
        <ul className={`nav__menu ${isNavShowing ? 'show__nav' : 'hide__nav'} `}>
            <li><a href="#" className="nav__link" onClick={()=>setIsNavShowing(prev => !prev)}>home</a></li>
            <li><a href="#about" className="nav__link" onClick={()=>setIsNavShowing(prev => !prev)}>about</a></li>
            <li><a href="#gallery" className="nav__link" onClick={()=>setIsNavShowing(prev => !prev)}>gallery</a></li>
            <li><a href="#exibition" className="nav__link" onClick={()=>setIsNavShowing(prev => !prev)}>exhibition</a></li>
        </ul>
        <ul className="socials">
            <li><a href="#" className="social__link"><CiLinkedin /></a></li>
            <li><a href="#" className="social__link"><IoLogoGithub /></a></li>
            <li><a href="#" className="social__link"><CgMail /></a></li>

        </ul>
        <button className="nav__toggle-btn" onClick={()=>setIsNavShowing(prev => !prev)}>
            { isNavShowing ? <IoClose /> : <HiMenuAlt3 /> }
        </button>
        
      </div>
    </nav>
  )
}

export default Nav;
