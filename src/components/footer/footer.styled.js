import { styled } from "styled-components";

export const StyledFooter = styled.footer` // styled component for footer
  padding: 5px 0;
  margin-top: 20px;
  color: #ffffff;
  text-align: center;
  span {
    padding: ${props => props.theme.buttonPadding};
    background-color: ${(props) => props.theme.sectionBackgroundColor};
  }
`;
