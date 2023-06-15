import { styled } from "styled-components";

export const BookContentStyling = styled.tr` // styled component for books list


  &:hover {
    border: 2px solid #fff;
  }

  td {
    padding: 10px 20px;
    width: 14%;
    color: #fffaf0;
    &:last-child,&:last-child,&:nth-last-child(2) {
      cursor: pointer;
      &:hover {
        color: #00ffff;
      }
    }

    &:first-child {
      width: 5%;
    }

    @media only screen and (max-width: 767px) {
      padding: 10px 0;
      font-size: 10px;
    }

    svg.del-btn {
      color: #ffff00;
      &:hover {
        color: #ff0000;
      }
    }

    a {
      color: #fff;
      text-decoration: none;
    }
  }
`;
