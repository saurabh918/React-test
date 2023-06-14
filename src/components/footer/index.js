import React from "react";
import WrapperComponent from "../wrapper";
import { FooterStyle } from "./styled";

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
