// import from modules
import React from "react";

// import from components
import WrapperComponent from "../wrapper";
import Navbar from "../navbar";

// import styled components
import { HeaderStyle } from "./header.styled";

const HeaderComponent = () => {
  return (
      <HeaderStyle>
        <WrapperComponent>
          <Navbar />
        </WrapperComponent>
      </HeaderStyle>
  );
};

export default HeaderComponent;
