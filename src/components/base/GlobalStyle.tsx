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
    min-height:  ${({ wasUserGuided }) =>
      wasUserGuided ? "calc(100vh - 60px)" : "calc(100vh - 106px)"}
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
    border: 1px dashed #f5f5f5;
  }

  input:focus {
    outline: none;
    border: 1px dashed #f5f5f5;
  }

  input[type=submit]:focus{
    outline: none;
    border: 1px dashed #f5f5f5;
  }

  a:focus {
    outline: none;
    border: 1px dashed #f5f5f5;
  }

  button:focus {
    outline: none;
    border: 1px dashed #f5f5f5;
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
`;
