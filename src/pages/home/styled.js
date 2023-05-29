import { styled } from "styled-components";

export const HomeStyle = styled.div`
flex-grow: 1;
text-align: center;
font-size: 50px;
color: blue;
font-weight: bold;

button {
  color: ${props => props.theme.primaryColor};
  background-color: ${props => props.theme.secondaryColor};
}
`