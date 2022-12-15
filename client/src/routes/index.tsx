import { Routes as ReactRouterDomRoutes, Route } from "react-router-dom";

import { Home } from "pages";

export function Routes() {
  return (
    <ReactRouterDomRoutes>
      <Route path="/" element={<Home />} />
    </ReactRouterDomRoutes>
  );
}
