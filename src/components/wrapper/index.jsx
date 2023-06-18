// import from modules
import React from "react";

// import styled components
import { StyleWrapper } from "./wrapper.styled";

const WrapperComponent = ({ children }) => {
  return <StyleWrapper className="wrapper">{children}</StyleWrapper>;
};

export default WrapperComponent;
