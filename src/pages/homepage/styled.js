import { styled } from "styled-components";

export const HomeStyle = styled.div`
flex-grow: 1;
text-align: center;

h1 {
  font-size: 50px;
  color: ${props => props.theme.primaryColor};
  font-weight: bold;
}

.search-field {
  padding: 10px 20px;
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
  color: ${props => props.theme.primaryColor};
  background-color: ${props => props.theme.secondaryColor};
}

.row {
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 1311px) {
    flex-direction: column;
  }
}

.display-books {
  flex-basis: 50%;
}

`

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
  }

  .current-page {
    background-color: #006400;
  }
`