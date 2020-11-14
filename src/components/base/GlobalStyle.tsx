import { createGlobalStyle } from "styled-components";

type Props = {
  wasUserGuided: boolean;
};

export const GlobalStyle = createGlobalStyle<Props>`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
      "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
      "Helvetica Neue", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${({ theme }) => theme.colors.material.background};
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }

  * {
    box-sizing: border-box;
  }

  *:focus {
    outline: none;
    border: ${({ theme }) => `1px dashed ${theme.colors.font.base}`};
  }

  input:focus {
    outline: none;
    border: ${({ theme }) => `1px dashed ${theme.colors.font.base}`};
  }

  input[type=submit]:focus{
    outline: none;
    border: ${({ theme }) => `1px dashed ${theme.colors.font.base}`};
  }

  a:focus {
    outline: none;
    border: ${({ theme }) => `1px dashed ${theme.colors.font.base}`};
  }

  button:focus {
    outline: none;
    border: ${({ theme }) => `1px dashed ${theme.colors.font.base}`};
  }

  a {
    color: unset;
  }

  ul,
  li {
    text-decoration: none;
    display: block;
  }

  button,
  input,
  optgroup,
  select,
  textarea {
    font-family: inherit;
    font-size: 100%;
    line-height: 1.15;
    margin: 0;
    border-width: unset;
    border-style: unset;
    border-color: unset;
  }

  button,
  input {
    overflow: visible;
  }

  button,
  select {
    text-transform: none;
  }

  button,
  [type="button"],
  [type="reset"],
  [type="submit"] {
    -webkit-appearance: button;
  }

  input[type="search"]::-webkit-search-cancel-button {
    -webkit-appearance: none;
    height: 1em;
    width: 1em;
    border-radius: 50em;
    background: url(https://pro.fontawesome.com/releases/v5.10.0/svgs/solid/times-circle.svg) no-repeat 50% 50%;
    background-size: contain;
    opacity: 0;
    pointer-events: none;
  }

  input[type="search"]:focus::-webkit-search-cancel-button {
    opacity: .3;
    pointer-events: all;
  }

  input[type="search"].dark::-webkit-search-cancel-button {
    filter: invert(1);
  }
`;
