import { styled } from "styled-components";

export const StyledHome = styled.div`
  // styled component for homepage
  flex-grow: 1;
  text-align: center;

  h1 {
    width: 60%;
    padding: 15px 0;
    background-color: ${(props) => props.theme.secondaryBackgroundColor};
    font-size: 50px;
    color: ${(props) => props.theme.textColor};
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
    padding: 12px 20px;
    @media only screen and (max-width: 576px) {
      padding: ${(props) => props.theme.buttonPadding};
    }
  }

  button.clear-search-button {
    width: 35px;
    height: 35px;
    margin-left: 5px;
  }

  table {
    width: 100%;
    padding: 20px;
    margin: 20px auto;
    table-layout: fixed;
    background-color: ${(props) => props.theme.sectionBackgroundColor};
    border: 2px solid ${(props) => props.theme.primaryColor};
    @media only screen and (max-width: 767px) {
      padding: 7px;
    }
  }

  button {
    color: ${(props) => props.theme.textColor};
    background-color: ${(props) => props.theme.primaryButtonColor};
  }

  .row {
    display: flex;
    justify-content: space-between;
    @media only screen and (max-width: 1068px) {
      flex-direction: column;
    }
  }

  .display-books {
    flex-basis: 60%;
    .filter-options {
      display: flex;
      justify-content: space-between;
      .reset-button {
        height: 100%;
        padding: 10px;
        background-color: ${(props) => props.theme.secondaryButtonColor};
        &:hover {
          background-color: ${(props) => props.theme.sectionBackgroundColor};
        }
      }
    }
  }
`;

export const StyledPageControls = styled.div`
  .slide-btn {
    background-color: ${(props) => props.theme.secondaryBackgroundColor};
    &:disabled {
      display: none;
    }
  }

  button {
    padding: ${(props) => props.theme.buttonPadding};
    border: ${(props) => props.theme.borderColor};
    border-radius: ${(props) => props.theme.buttonBorderRadius};
    background-color: ${(props) => props.theme.secondaryButtonColor};
    cursor: pointer;
    &:disabled {
      cursor: not-allowed;
    }
    &:hover {
      background-color: #800080;
    }
  }

  .current-page {
    background-color: ${(props) => props.theme.currentPageColor};
  }
`;
