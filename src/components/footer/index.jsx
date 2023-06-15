// import from modules
import React from "react";

// import component
import WrapperComponent from "../wrapper";

// import styled component
import { FooterStyle } from "./footer.styled";

const FooterComponent = () => {
  return (
      <FooterStyle>
        <WrapperComponent>
          <span>&copy;Copyright 2023. All rights reserved &reg;</span>
        </WrapperComponent>
      </FooterStyle>
  );
};

export default FooterComponent;
