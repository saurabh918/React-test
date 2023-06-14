import { styled } from "styled-components";

export const BookTitleStyling = styled.thead` // styled component for books table column headings
  color: #f5deb3;
  
  th {
    width: 14%;
    cursor: pointer;
    @media only screen and (max-width: 767px) {
      font-size: 12px;
      white-space: nowrap;
    }
  }

  .sort-order {
    color: #7fff00;
  }
`;
