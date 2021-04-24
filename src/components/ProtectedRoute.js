import React from "react";
import { Route, Redirect } from "react-router-dom";
const ProtectedRoute = ({ isAuth, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (isAuth) {
          <Component {...rest} {...props} />;
        } else {
          <Redirect to={{ pathname: "/", state: { from: props.location } }} />;
        }
      }}
    />
  );
};

export default ProtectedRoute;