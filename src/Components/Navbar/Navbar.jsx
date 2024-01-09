import React from 'react'
import './Navbar.css'
import logo from '../Assets/SFC.logo.png'
import cart_icon from '../Assets/cart.logo.png'
export const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="nav-logo">
            <img src={logo} alt="" />
            <p>SHOOPER</p>
        </div>
        <ul className="nav-menu">
        <li>Shop<hr/></li>
        <li>Men</li>
        <li>Women</li>
        <li>Kids</li>
        </ul>
        <div className="nav-login-cart"></div>
        <button>login</button>
        <img src={cart-icon} alt=""/>

    </div>
  )
}
