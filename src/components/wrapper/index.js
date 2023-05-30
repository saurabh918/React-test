import React from "react";
import { WrapperStyle } from "./styled";

const WrapperComponent = ({ children }) => {
  return <WrapperStyle className="wrapper">{children}</WrapperStyle>;
};

export default WrapperComponent;
