import { styled } from "styled-components";

export const NavbarStyle = styled.div` // styled component for navbar
  a {
    margin: auto 20px;
    font-size: ${(props) => props.theme.fontSize};
    font-weight: bold;
    color: ${(props) => props.theme.color};
    text-decoration: none;
  }
`;
