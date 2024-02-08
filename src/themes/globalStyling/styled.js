import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle` // styled component for global styling
  body,#root {
    min-height: 100vh; 
    display: flex; 
    flex-direction: column; 
    margin: 0;
    padding: 0;
    background-image: linear-gradient(45deg, black, transparent);
    background-size: cover;
  }

  main {
    display: flex; 
    flex-direction: column; 
  }

  #root,main {
    flex: 1;
  }

  footer {
    margin-top: auto;
  }

  h2 {
    font-size: 24px;
  }

  h3,h3 span {
    font-size: 23px;
  }

  p {
    font-size: 16px;
    line-height: 23px;
  }
`;

export default GlobalStyle;
