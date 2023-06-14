import React from "react";
import { HeaderStyle } from "./styled";
import WrapperComponent from "../wrapper";
import Navbar from "../navbar";
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
