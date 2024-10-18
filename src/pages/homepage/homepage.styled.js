import { styled } from "styled-components";

export const StyledHome = styled.div`
  // styled component for homepage
  flex-grow: 1;
  text-align: center;

  h1 {
    width: 60%;
    padding: 15px 0;
    border-radius: ${props => props.theme.borderRadius};
    font-size: 50px;
    color: ${(props) => props.theme.textColor};
    font-weight: bold;
    @media only screen and (max-width: 1024px) {
      font-size: 40px;
    }
    @media only screen and (max-width: ${props => props.theme.mobile}) {
      font-size: 25px;
    }
    @media only screen and (max-width: ${props => props.theme.mobileMedium}) {
      font-size: 22px;
    }
  }

  .search-field {
    padding: 12px 20px;
    @media only screen and (max-width: ${props => props.theme.mobileMedium}) {
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
    border-radius: ${props => props.theme.borderRadius};
    background-color: ${(props) => props.theme.sectionBackgroundColor};
    @media only screen and (max-width: ${props => props.theme.mobile}) {
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
        border: none;
        background-color: ${(props) => props.theme.blackColor};
        color: ${(props) => props.theme.whiteColor};
        &:hover {
          background-color: ${(props) => props.theme.sectionBackgroundColor};
        }
      }
    }
  }
`;

export const StyledPageControls = styled.div`
  display: flex;
  justify-content: center;
  .slide-btn {
    background-color: ${(props) => props.theme.whiteColor};
    &:disabled {
      display: none;
    }
  }

  button {
    padding: ${(props) => props.theme.buttonPadding};
    border: ${(props) => props.theme.borderColor};
    background-color: ${props => props.theme.whiteColor};
    color: ${props => props.theme.blackColor};
    cursor: pointer;
    &:disabled {
      cursor: not-allowed;
    }
    &:hover {
      background-color: ${props => props.theme.blackColor};
      color: ${props => props.theme.whiteColor};
    }
  }

  .current-page {
    background-color: ${(props) => props.theme.currentPageColor};
    color: ${props => props.theme.whiteColor};
    &:hover {
      background-color: ${(props) => props.theme.currentPageColor};
      color: ${props => props.theme.whiteColor};
    }
  }
`;
