import { styled } from "styled-components";

export const BookTitleStyling = styled.thead`
  color: #f5deb3;

  th {
      cursor: pointer;
      @media only screen and (max-width: 767px) {
        font-size: 12px;
      }
  }

  .sort-order {
    color: #7fff00;
  }
`