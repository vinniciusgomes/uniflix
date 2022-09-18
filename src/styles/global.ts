import { createGlobalStyle } from "styled-components";

import { font, primaryColors } from "./theme";

const GlobalStyleProxy: any = createGlobalStyle`
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
  background: ${primaryColors?.background};

  font-size: 1.6rem;

  ::selection {
    color: lightblue;
    background-color: black;
  }
}

body, input, textarea, button {
  font-family: ${font.family.Roboto};
  font-weight: ${font.normal};
  color: ${primaryColors?.text};
}

h1, h2, h3, h4, h5, h6, strong {
  font-weight: ${font.semiBold};
}

span {
  font-size: ${font.sizes.normal};
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
