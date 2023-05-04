/* eslint-disable @typescript-eslint/consistent-type-imports */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/consistent-type-definitions */
import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavItems, NavItemsProps } from '../../global';

export const Logo = (props: NavItemsProps) => {
  return (
    <div className='w-16'>
      <NavLink to={props.path}>
        {props.image}
      </NavLink>
    </div>
  )
}

export const SiteName = (props: NavItemsProps) => {
  return (
    <div className='SiteName'>
      <NavLink to={props.path}>
        {props.name}
      </NavLink>
    </div>
  )
}

export const NavList = (props: NavItems) => {
  return (
    <div className='NavLinks'>
      {props.items.map((item) => {
        return (
          <NavLink to={item.path} className='inline-flex items-center gap-2 hover:text-secondary-light duration-150'>
            {item.icon}
            {item.name}
          </NavLink>
        )
      })}
    </div>
  );
};
