import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Home from "./components/Home";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = (e) => {
    e.preventDefault();
    setIsAuthenticated(true);
  };
  const logout = (e) => {
    e.preventDefault();
    setIsAuthenticated(false);
  };

  return (
    <main className="main">
      <Router>
        <Switch>
          {!isAuthenticated && <Login login={login} />}

          {isAuthenticated && (
            <Route path="/home">
              <Home logout={logout} />
            </Route>
          )}
        </Switch>
      </Router>
    </main>
  );
}

export default App;
