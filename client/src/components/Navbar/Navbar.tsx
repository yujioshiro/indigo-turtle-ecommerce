import React from 'react';
import type { UserState } from '../../store';
import store, { selectUser, auth, logout } from '../../store';
import { useSelector, useDispatch } from 'react-redux';
import TurtleLogo from './TurtleLogo.png';
import { FaInfoCircle, FaShoppingCart, FaStore } from 'react-icons/fa';
import { Logo, NavList, SiteName } from './NavbarData';

const navItems = [
  {
    icon: <FaStore />,
    name: 'Sell Product',
    path: '/ProductPage',
  },
  {
    icon: <FaInfoCircle />,
    name: 'About Us',
    path: '/AboutPage',
  },
  {
    icon: <FaShoppingCart />,
    name: 'Cart',
    path: '/CheckoutPage',
  },
];

export function Navbar(): JSX.Element {
  const username = useSelector(selectUser);
  return (
    <nav className="Navbar">
      <div className="flex p-4 gap-4 justify-between">
        <div className="flex items-center gap-6">
          <Logo
            image={<img src={TurtleLogo} alt="Turtle Logo" />}
            path={'/HomePage'}
          />
          <SiteName 
            name={'IndigoList'}
            path={'/HomePage'}
           />
        </div>
        <div className='flex mr-24 items-center'>
          <NavList 
            items={navItems} 
          />
        </div>
      </div>
    </nav>
  );
}
