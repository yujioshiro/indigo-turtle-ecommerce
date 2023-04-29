/* eslint-disable @typescript-eslint/consistent-type-imports */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/consistent-type-definitions */
import React from 'react'
import { NavLink } from 'react-router-dom'
import { HomePageLink, ProductPageLink, AboutPageLink, CheckoutPageLink, AuthPageLink } from '../../global'

export const Home = (props: HomePageLink) => {
  return (
    <NavLink to={props.path}>
      {props.image}
    </NavLink>
  )
}
export const SellProduct = (props: ProductPageLink) => {
  return (
    <NavLink to={props.path}>
      {props.name}
    </NavLink>
  )
}
export const AboutUs = (props: AboutPageLink) => {
  return (
    <NavLink to={props.path}>
      {props.name}
    </NavLink>
  )
}
export const Checkout = (props: CheckoutPageLink) => {
  return (
    <NavLink to={props.path}>
      {props.icon}
    </NavLink>
  )
}
export const Account = (props: AuthPageLink) => {
  return (
    <NavLink to={props.path}>
      {props.user}
    </NavLink>
  )
}

