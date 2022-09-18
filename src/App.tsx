import { BrowserRouter } from "react-router-dom";

import { Routes } from "routes";
import GlobalStyles from "styles/global";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>

      <GlobalStyles />
    </>
  );
};

export { App };
