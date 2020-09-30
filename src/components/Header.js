import React from 'react'
import './Header.css'
import logo from './logo.jpeg'


const Header = () => {
  return (
    <div className="header">
       <div className="header__logo">
           <img className="logo__image" src={logo} alt="logo"/>
           <h3>Robust Tech</h3>

       </div>
       <div className="header__links">
       <h4 className="link hvr-sweep-to-left">Home</h4>
       <h4 className="link hvr-sweep-to-left">About Us</h4>
       <h4 className="link hvr-sweep-to-left">Contact</h4>


       </div>

       <button className="header__btn ">Get Started</button>

    </div>
  )
}

export default Header
