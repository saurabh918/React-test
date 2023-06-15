// import from modules
import React from "react";
import { Link } from "react-router-dom";

// import styled components
import { NavbarStyle } from "./navbar.styled";


const Navbar = () => {
  return (
      <NavbarStyle>
        <Link to="/">Home</Link>
      </NavbarStyle>
  );
};

export default Navbar;
