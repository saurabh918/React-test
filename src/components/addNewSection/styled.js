import { styled } from "styled-components";

export const AddSectionStyle = styled.div` // styled component for add new author or category popup
  padding: 2% 2% 4%;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 10px 10px;
  background-color: #faebd7;
  pointer-events: auto;
  @media only screen and (max-width: 400px) {
    padding: 2% 6% 8%;
  }
  button {
    cursor: pointer;
  }
`;
