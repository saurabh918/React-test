// import from modules
import React from "react";

// import component
import WrapperComponent from "../wrapper";

// import styled component
import { StyledFooter } from "./footer.styled";

const FooterComponent = () => {
  return (
      <StyledFooter>
        <WrapperComponent>
          <span>&copy;Copyright 2024. All rights reserved &reg;</span>
        </WrapperComponent>
      </StyledFooter>
  );
};

export default FooterComponent;
