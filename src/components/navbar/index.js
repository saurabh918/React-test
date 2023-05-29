import React from 'react'
import { NavbarStyle } from './styled'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <NavbarStyle>
      <Link to="/"> 
        Home
      </Link>
    </NavbarStyle>
  )
}

export default Navbar