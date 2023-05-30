import { styled } from "styled-components";

export const HeaderStyle = styled.header` // styled component for header
  padding: 5px 0;
  background-color: ${(props) => props.theme.background};
  text-align: ${(props) => props.theme.align};
`;
