import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
  <nav>
      <ul className='navbar-list'>
        <li className='navbar-link'><NavLink to="/">Collections</NavLink></li>
        <li className='navbar-link'><NavLink to="/">Men</NavLink></li>
        <li className='navbar-link'><NavLink to="/">Women</NavLink></li>
        <li className='navbar-link'><NavLink to="/">About</NavLink></li>
        <li className='navbar-link'><NavLink to="/">Contact</NavLink></li>
    </ul>
  </nav>
  )
}

export default Navbar