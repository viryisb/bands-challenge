import React, { useState } from "react";
import "./App.css";
import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Band from "./components/bands/Band";
import Bands from "./components/bands/Bands";

function App() {
  const [isAuthenticated, setisAuthenticated] = useState(false);

  const login = (e) => {
    e.preventDefault();
    setisAuthenticated(true);
  };
  const logout = (e) => {
    e.preventDefault();
    setisAuthenticated(false);
  };

  return (
    <main className="main">
      <Router>
        <Switch>
          <Route exact path="/">
            <Login login={login} isAuthenticated={isAuthenticated} />
          </Route>

          <ProtectedRoute path="/home" isAuthenticated={isAuthenticated}>
            <Home logout={logout} isAuthenticated={isAuthenticated} />
          </ProtectedRoute>
           <ProtectedRoute
            path="/band"
            component={Band}
            isAuthenticated={isAuthenticated}
           
          /> 
         
        </Switch>
      </Router>
    </main>
  );
}

export default App;
