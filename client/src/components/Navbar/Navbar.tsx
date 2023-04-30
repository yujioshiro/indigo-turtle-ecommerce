import React, { useState } from 'react';
import TurtleLogo from './TurtleLogo.png';
import { AboutUs, Account, Checkout, Home, SellProduct } from './NavbarData';
import { FaAngleUp, FaShoppingCart } from 'react-icons/fa';

export function Navbar(): JSX.Element {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="p-2.5">
      <nav className="grid grid-flow-col">
        <div>
          <Home
            image={<img src={TurtleLogo} alt="Turtle Logo" />}
            path="./HomePage"
          />
          <SellProduct name="Sell Product" path="/ProductPage" />
          <AboutUs name="About Us" path="/AboutPage" />
          <span>IndigoList</span>
          <Checkout icon={<FaShoppingCart />} path="/CheckoutPage" />
          <Account user="" path="/AuthPage" />
          <span><FaAngleUp /></span>
        </div>
      </nav>
    </div>
  );
}
