import { createGlobalStyle } from "styled-components";

const GlobalStyleProxy = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-display: swap;
  outline: none;
}

html {
  font-size: 62.5%; // 16px = 1.6rem
}

html, body {
  margin: 0;
  padding: 0;
}

body {

  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  border-right: 0px !important;
  overflow-x: hidden;
  background: #0f0f0f;

  font-size: 1.6rem;

  ::selection {
    color: lightblue;
    background-color: black;
  }
}

body, input, textarea, button {
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  color: #1d1d1d;
}

h1, h2, h3, h4, h5, h6, strong {
  font-weight: 600;
}

span {
  font-size: 1.6rem;
}

button {
  cursor: pointer;
}

a {
  color: inherit;
  text-decoration: none;
}

[disabled] {
  opacity: 0.6;
  cursor: not-allowed;
}
`;

export default GlobalStyleProxy;
