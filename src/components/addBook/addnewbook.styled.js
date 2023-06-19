import { styled } from "styled-components";

export const StyledAddNewBook = styled.div`  // styled component for add new book section
  flex-basis: 30%;
  border-radius: ${props => props.theme.borderRadius};
  background-color: ${(props) => props.theme.sectionBackgroundColor};

  @media only screen and (max-width: ${props => props.theme.desktop}) {
    padding: 20px 0;
  }

  h2 {
    color: #faebd7;
  }

  form {
    margin-top: 20px;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    row-gap: 40px;
  }

  input,select {
    margin-top: 10px;
  }

  input,
  select,
  button {
    padding: 5px;
  }

  form > div {
    flex-basis: 40%;
    &:last-child {
      flex-basis: 100%;
      display: flex;
      justify-content: center;
      column-gap: 20px;
    }

    button {
      border: ${props => props.theme.formBorderColor};
      border-radius: 5px;
      background-color: ${props => props.theme.secondaryButtonColor};
      cursor: pointer;
      &:hover {
        background-color: ${props => props.theme.buttonHoverColor};
        color: ${props => props.theme.secondaryButtonColor};
        border: 1px solid ${props => props.theme.secondaryButtonColor};
      }

      &.add-btn {
        padding: ${props => props.theme.buttonPadding};
        border: 1px solid ${props => props.theme.whiteColor};
        background-color: ${props => props.theme.currentPageColor};
        &:hover {
          background-color: ${props => props.theme.addBtnColor};
        }
      }

      &.delete-btn {
        background-color: ${props => props.theme.primaryButtonColor};
        border: 1px solid ${props => props.theme.secondaryButtonColor};
        &:hover {
          background-color: ${props => props.theme.buttonHoverColor};
          color: ${props => props.theme.whiteColor};
        }
      }

      &.cancel-btn {
        background-color: ${props => props.theme.blackColor};
        border: 1px solid ${props => props.theme.whiteColor};
        &:hover {
          background-color: ${props => props.theme.addNewSectionBackgroundColor};
        }
      }

      &.add-new-btn {
        display: block;
        margin: auto;
      }
    }
    @media only screen and (max-width: 1476px) {
      flex-basis: 50%;
    }
    @media only screen and (max-width: ${props => props.theme.mobile}) {
      flex-basis: 48%;
    }
    @media only screen and (max-width: 616px) {
      flex-basis: 100%;
    }

    @media only screen and (min-width: 1069px) and (max-width: 1366px) {
      flex-basis: 100%;
    }
  }

  label {
    color: ${props => props.theme.whiteColor};
  }

  option {
    &:first-child {  // to show the selected option
      background-color: ${props => props.theme.selectedOptionBackgroundColor};
      color: ${props => props.theme.whiteColor};
    }
  }

  p {
    color: ${props => props.theme.whiteColor};
  }
`;
