import React from "react";
import * as Styled from "./styles/StyledLayout";

const Layout = ({ children }) => {
  return <Styled.BodyWrapper>{children}</Styled.BodyWrapper>;
};

export default Layout;
