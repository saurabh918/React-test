import { styled } from "styled-components";

export const FooterStyle = styled.footer` // styled component for footer
  padding: 5px 0;
  margin-top: ${(props) => props.theme.marginTop};
  background-color: ${(props) => props.theme.background};
  text-align: center;
`;
