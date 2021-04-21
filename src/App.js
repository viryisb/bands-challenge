import * as React from "react";
import './App.css';

import AuthenticatedApp from "./AuthenticatedApp";
import UnauthenticatedApp from "./UnauthenticatedApp";

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false); // mock this somehow

  return isAuthenticated ? (
    <AuthenticatedApp />
  ) : (
    <UnauthenticatedApp login={setIsAuthenticated} />
  );
}



