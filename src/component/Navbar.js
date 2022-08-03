import React from 'react'
import { NavLink } from 'react-router-dom'


export default function Navbar() {
  return (
   
        <nav>
            <NavLink to="/" className='nav-link'> Home </NavLink>
            <NavLink to="/blog" className='nav-link'> blog </NavLink>
            <NavLink to="/contact" className='nav-link'> Contact </NavLink>
           
        </nav>

  )
}

