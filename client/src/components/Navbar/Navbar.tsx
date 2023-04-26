import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavbarData } from './NavbarData';
import TurtleLogo from './TurtleLogo.png';

export function Navbar(): JSX.Element {
  return (
    <div className="p-2.5">
      <nav className="grid grid-flow-col">
        <div>
          <span>
            <NavLink to={'/HomePage'}>
              <img src={TurtleLogo} alt="Turtle Logo" />
            </NavLink>
          </span>
        </div>
        <div>
          {NavbarData.map((link, index) => {
            return (
              <div key={index}>
                <NavLink to={link.path}>{link.name}</NavLink>
              </div>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
