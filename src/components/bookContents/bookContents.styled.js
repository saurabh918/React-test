import { styled } from "styled-components";

export const StyledBookContent = styled.tr` // styled component for books list


  td {
    padding: 15px 20px;
    width: 14%;
    color: #fffaf0;
    &:last-child,&:last-child,&:nth-last-child(2) {
      cursor: pointer;
      &:hover {
        color: ${props => props.theme.primaryColor};
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
      color: #ffffff;
      &:hover {
        color: ${props => props.theme.primaryButtonColor};
      }
    }

    a {
      color: #ffff00;
      text-decoration: none;
    }
  }
`;
