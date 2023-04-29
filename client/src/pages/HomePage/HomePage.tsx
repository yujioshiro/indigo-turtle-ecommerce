import React from "react";
import "../../style.css"
import TurtleLogo from '../../components/Navbar/TurtleLogo.png';

export default function HomePage(): JSX.Element {
  return (
  <div>

    <nav className="Home-nav">
      <img className="Home-img" src={TurtleLogo}></img>
      <span className="Home-navAboutUs">About Us</span>
      <span className="Home-title">Indigo E-Commerce</span>
      <button className="Home-btn-signUp">Sign Up</button>
      <button className="Home-btn-logIn">Log In</button>
    </nav>

    
  </div>
  

  
  )
}
