import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  html, body, #root {
    height: 100%;
  }

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

  .react-toggle {
    touch-action: pan-x;

    display: inline-block;
    position: relative;
    cursor: pointer;
    background-color: transparent;
    border: 0;
    padding: 0;

    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .react-toggle-screenreader-only {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }

  .react-toggle--disabled {
    cursor: not-allowed;
    opacity: 0.5;
    -webkit-transition: opacity 0.25s;
    transition: opacity 0.25s;
  }

  .react-toggle-track {
    width: 50px;
    height: 24px;
    padding: 0;
    border-radius: 30px;
    background-color: ${({ theme }) => theme.colors.font.sub};
    -webkit-transition: all 0.2s ease;
    -moz-transition: all 0.2s ease;
    transition: all 0.2s ease;
  }

  .react-toggle:hover:not(.react-toggle--disabled) .react-toggle-track {
    background-color: ${({ theme }) => theme.colors.font.sub};
  }

  .react-toggle--checked .react-toggle-track {
    background-color: ${({ theme }) => theme.colors.font.sub};
  }

  .react-toggle--checked:hover:not(.react-toggle--disabled)
    .react-toggle-track {
    background-color: ${({ theme }) => theme.colors.font.sub};
  }

  .react-toggle-track-check {
    position: absolute;
    width: 17px;
    height: 17px;
    top: 0px;
    bottom: 0px;
    margin-top: auto;
    margin-bottom: auto;
    line-height: 0;
    left: 5px;
    opacity: 0;
    -webkit-transition: opacity 0.25s ease;
    -moz-transition: opacity 0.25s ease;
    transition: opacity 0.25s ease;
  }

  .react-toggle--checked .react-toggle-track-check {
    opacity: 1;
    -webkit-transition: opacity 0.25s ease;
    -moz-transition: opacity 0.25s ease;
    transition: opacity 0.25s ease;
  }

  .react-toggle-track-x {
    position: absolute;
    width: 17px;
    height: 17px;
    top: 0px;
    bottom: 0px;
    margin-top: auto;
    margin-bottom: auto;
    line-height: 0;
    right: 5px;
    opacity: 1;
    -webkit-transition: opacity 0.25s ease;
    -moz-transition: opacity 0.25s ease;
    transition: opacity 0.25s ease;
  }

  .react-toggle--checked .react-toggle-track-x {
    opacity: 0;
  }

  .react-toggle-thumb {
    transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1) 0ms;
    position: absolute;
    top: 1px;
    left: 1px;
    width: 22px;
    height: 22px;
    border: 1px solid ${({ theme }) => theme.colors.font.sub};
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.brand.lighter};

    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;

    -webkit-transition: all 0.25s ease;
    -moz-transition: all 0.25s ease;
    transition: all 0.25s ease;
  }

  .react-toggle--checked .react-toggle-thumb {
    left: 27px;
    border-color: ${({ theme }) => theme.colors.material.input};
  }

  .react-toggle--focus .react-toggle-thumb {
    -webkit-box-shadow: 0px 0px 3px 2px ${({ theme }) =>
      theme.colors.brand.lighter};
    -moz-box-shadow: 0px 0px 3px 2px ${({ theme }) =>
      theme.colors.brand.lighter};
    box-shadow: 0px 0px 2px 3px ${({ theme }) => theme.colors.brand.lighter};
  }

  .react-toggle:active:not(.react-toggle--disabled) .react-toggle-thumb {
    -webkit-box-shadow: 0px 0px 5px 5px ${({ theme }) =>
      theme.colors.brand.lighter};
    -moz-box-shadow: 0px 0px 5px 5px ${({ theme }) =>
      theme.colors.brand.lighter};
    box-shadow: 0px 0px 5px 5px ${({ theme }) => theme.colors.brand.lighter};
  }
`;
