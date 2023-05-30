import { styled } from "styled-components";

export const BookContentStyling = styled.tr` // styled component for books list
  &:hover {
    border: 2px solid #fff;
  }

  td {
    padding: 10px 20px;
    color: ${(props) => props.theme.tdColor};
    white-space: nowrap;
    &:last-child {
      cursor: pointer;
      &:hover {
        color: #00ffff;
      }
    }
    @media only screen and (max-width: 767px) {
      padding: 10px 0;
      font-size: 10px;
    }
  }
`;
