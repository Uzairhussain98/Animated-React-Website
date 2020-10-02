import React from 'react'
import './Header.css'
import logo from './logo.jpeg'
import { Link} from "react-router-dom";



const Header = () => {
  return (
    <div className="header">
       <div className="header__logo">
       <Link to="/">
  <img className="logo__image" src={logo} alt="logo"/>
  </Link>

           <h3>Robust Tech</h3>

       </div>
       
       <div className="header__links">
      <Link to="/"> <h4 className="link hvr-sweep-to-left">Home</h4> </Link>
      <Link to="/About"> <h4 className="link hvr-sweep-to-left">About Us</h4> </Link>
      <Link to="/Contact"><h4 className="link hvr-sweep-to-left">Contact</h4> </Link>


       </div>

       <button className="header__btn ">Get Started</button>

    </div>
  )
}

export default Header
