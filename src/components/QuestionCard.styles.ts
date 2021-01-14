import styled from "styled-components";

export const Wrapper = styled.div`
  p {
    font-size: 25px;
  }
`;

type ButtonWrapperProps = {
  isCorrect: boolean;
  userClicked: boolean;
};

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
  height: 50px;
  width: 100%;
  margin: 30px 0;
  transition: all 0.3s ease;
  :hover {
    opacity: 0.8;
  }
  button {
    cursor: pointer;
    width: 100%;
    height: 100%;
    background: ${({ isCorrect, userClicked }) =>
      isCorrect
        ? "linear-gradient(90deg, #56FFA4, #59BC86)"
        : !isCorrect && userClicked
        ? "linear-gradient(90deg, #FF5656, #C16868)"
        : "linear-gradient(90deg, #56ccff, #6eafb4)"};
  }
  span {
    font-size: 20px;
  }
`;
