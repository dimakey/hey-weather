import { createGlobalStyle } from "styled-components";
import "./reset.css";
import mainBg from "../assets/main-bg.svg";

const GlobalStyle = createGlobalStyle`
  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  :root {
    box-sizing: border-box;
  }

  html * {
    font-family: "PTRootUIWeb", sans-serif;
  }

  body {
    font-size: 16px;
    background-color: ${({ theme }) => theme.colors.bg};
    color: ${({ theme }) => theme.colors.body900};
    overflow: visible;
    min-height: 100vh;


    &:before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
        //background-image: url(${mainBg});
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center center;
      opacity: 0.6;
      width: 100%;
      height: 100%;
      z-index: -999;
    }
  }

  a {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;


    &:hover {
      ${({ theme }) => theme.colors.white};
    }

    &:focus {
      border-radius: 2px;
      outline: 2px solid ${({ theme }) => theme.colors.focus};
      outline-offset: 2px;
    }
  }

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  button {
    cursor: pointer;
  }

  /* root element */
  #root {
    min-height: 100vh;
  }

  /* swiper global  customizations */
  .swiper-scrollbar {
    left: 0;
    background-color: ${({ theme }) => theme.colors.surfaceSecondary};
  }

  .swiper-scrollbar-drag {
    background-color: ${({ theme }) => theme.colors.primary}
  }
`;

export default GlobalStyle;
