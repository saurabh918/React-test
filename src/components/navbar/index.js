import React from 'react'
import { NavbarStyle } from './styled'
import { Link } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

const Navbar = () => {
  const theme = {
    color: '#a52a2a',
    fontSize: '25px'
  }
  return (
    <ThemeProvider theme={theme}>
      <NavbarStyle>
        <Link to="/"> 
          Home
        </Link>
      </NavbarStyle>
    </ThemeProvider>
  )
}

export default Navbar