import * as React from "react";
import "./App.css";
import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";



function App() {
  const [isAuth, setIsAuth] = React.useState(false);

  const login = (e) => {
    e.preventDefault();
    setIsAuth(true);
  };
  const logout = (e) => {
    e.preventDefault();
    setIsAuth(false);
  };

  return (
    <main className="main">
      <Router>
        <Switch>
        <Route exact path="/">
          <Login login={login} isAuth={isAuth} />
        </Route>
        <ProtectedRoute path="/home" isAuth={isAuth}>
          <Home logout={logout} isAuth={isAuth} />
        </ProtectedRoute>
        </Switch>
      </Router>
      </main>
  );
}

export default App;