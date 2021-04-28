import React from "react";
import { useHistory } from "react-router-dom";

const Login = ({ login }) => {
  const history = useHistory();

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="card">
            <form
              onSubmit={(e) => {
                login(e);
                history.push("/home");
              }}
              className="box"
            >
              <h1>Login</h1>
              <p className="text-muted"> Please enter your mail and password</p>

              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                required
                placeholder="Email"
              />

              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
                required
              />

              <button type="submit">Login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
