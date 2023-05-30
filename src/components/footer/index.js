import React from "react";
import WrapperComponent from "../wrapper";
import { FooterStyle } from "./styled";
import { ThemeProvider } from "styled-components";

const FooterComponent = () => {
  const theme = {
    background: "#f5f5dc",
    marginTop: "20px",
  };
  return (
    <ThemeProvider theme={theme}>
      <FooterStyle>
        <WrapperComponent>
          <span>&copy;Copyright 2023. All rights reserved &reg;</span>
        </WrapperComponent>
      </FooterStyle>
    </ThemeProvider>
  );
};

export default FooterComponent;
