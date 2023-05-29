import React from 'react'
import { NavbarStyle } from './styled'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <NavbarStyle>
      <Link to="/"> 
        Home
      </Link>
      <Link to="/about">
        About
      </Link>
    </NavbarStyle>
  )
}

export default Navbar