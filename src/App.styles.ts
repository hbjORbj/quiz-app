import styled, { createGlobalStyle } from "styled-components";
import bgImg from "./images/img1.jpg";

export const GlobalStyle = createGlobalStyle`
    html {
        height: 100%;
    }
    body {
        user-select: none;
        background-image: url(${bgImg});
        background-size: cover;
        color: #fff;
        display: flex;
        justify-content: center;
    }
    * {
        font-family: 'Catamaran', sans-serif;
        box-sizing: border-box;
    }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    font-weight: 400;
    font-size: 33px;
    text-align: center;
  }
  p {
    font-size: 20px;
  }
  .btn {
    font-size: 1rem;
    cursor: pointer;
    height: 40px;
    padding: 0 30px;
    max-width: 300px;
    border-radius: 10px;
    border: none;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    margin: 10px 0px;
  }
`;
