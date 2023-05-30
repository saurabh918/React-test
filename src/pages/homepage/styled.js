import { styled } from "styled-components";

export const HomeStyle = styled.div`
  flex-grow: 1;
  text-align: center;

  h1 {
    font-size: 50px;
    color: ${(props) => props.theme.primaryColor};
    font-weight: bold;
    @media only screen and (max-width: 1024px) {
      font-size: 40px;
    }
    @media only screen and (max-width: 767px) {
      font-size: 25px;
    }
    @media only screen and (max-width: 576px) {
      font-size: 22px;
    }
  }

  .search-field {
    padding: 10px 20px;
    @media only screen and (max-width: 576px) {
      padding: 5px 10px;
    }
  }

  table {
    padding: 20px;
    margin: 20px auto;
    background-color: #000;
    border: 2px solid #00ffff;
    @media only screen and (max-width: 767px) {
      padding: 7px;
    }
  }

  button {
    color: ${(props) => props.theme.primaryColor};
    background-color: ${(props) => props.theme.secondaryColor};
  }

  .row {
    display: flex;
    justify-content: space-between;
    @media only screen and (max-width: 1068px) {
      flex-direction: column;
    }
  }

  .display-books {
    flex-basis: 50%;
  }
`;

export const PageControls = styled.div`
  .slide-btn {
    background-color: #006400;
    &:disabled {
      background-color: #000000;
      color: #fff;
    }
  }

  button {
    padding: 5px 10px;
    border: 1px solid #000000;
    border-radius: 5px;
    background-color: #00008b;
    cursor: pointer;
    &:disabled {
      cursor: not-allowed;
    }
    &:hover {
      background-color: #800080;
    }
  }

  .current-page {
    background-color: #006400;
  }
`;
