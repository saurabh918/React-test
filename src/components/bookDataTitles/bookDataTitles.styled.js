import { styled } from "styled-components";

export const StyledBookTitle = styled.thead` // styled component for books table column headings
  color: #f5deb3;
  
  th {
    padding: 2%;
    width: 14%;
    font-size: 16px;
    cursor: pointer;
    &:first-child,&:last-child,&:nth-last-child(2) {
      width: 5%;
    }
    @media only screen and (max-width: ${props => props.theme.mobile}) {
      font-size: 12px;
      white-space: nowrap;
    }
  }

  .sort-order {
    color: #7fff00;
  }
`;
