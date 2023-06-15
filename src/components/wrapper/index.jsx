// import from modules
import React from "react";

// import styled components
import { WrapperStyle } from "./wrapper.styled";

const WrapperComponent = ({ children }) => {
  return <WrapperStyle className="wrapper">{children}</WrapperStyle>;
};

export default WrapperComponent;
