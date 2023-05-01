import React from 'react';
import TurtleLogo from './TurtleLogo.png';
import {
  AboutUs,
  Account,
  Checkout,
  Home,
  SellProduct,
  Website,
} from './NavbarData';
import { FaAngleUp, FaShoppingCart } from 'react-icons/fa';

export function Navbar(): JSX.Element {
  return (
    <nav className="Navbar">
      <div className="flex p-4 gap-10 justify-between">
        <div className="flex items-center gap-6">
          <div className="w-16">
            <Home
              image={<img src={TurtleLogo} alt="Turtle Logo" />}
              path="./HomePage"
            />
          </div>
          <div className="WebsiteName">
            <Website name="IndigoList" path="/HomePage" />
          </div>
        </div>
        <div className="flex mr-28 items-center">
          <div className="Links">
            <SellProduct name="Sell Product" path="/ProductPage" />
            <AboutUs name="About Us" path="/AboutPage" />
            <Checkout icon={<FaShoppingCart />} path="/CheckoutPage" />
            <div className="User">
              <Account user="" path="/AuthPage" />
              <span>
                <FaAngleUp />
              </span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
