// src/styles/GlobalStyle.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: ${props => props.theme.typography.fontFamily};
    font-size: ${props => props.theme.typography.fontSize};
    background-color: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    transition: background-color 0.3s, color 0.3s;
  }

  a {
    color: ${props => props.theme.colors.link};
    text-decoration: none;
  }

  a:hover {
    text-decoration: none;
  }

  button {
    background-color: ${props => props.theme.colors.buttonBackground};
    color: #ffffff;
    border: none;
    padding: ${props => props.theme.spacing.medium};
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  button:hover {
    background-color: ${props => props.theme.colors.buttonHover};
  }
`;

export default GlobalStyle;
