import React from 'react'
import {Redirect} from 'react-router-dom'



const Login = ({login,isAuth}) => {
  if (isAuth){return <Redirect to ={{pathname:'/home'}}/>}
  return (
    <div className="container">
      <div className="row">
      <div className="col-md-6">
      <div className="card">
      </div>
      </div>
      </div>
      <p className="">Please Login</p>
      <form onSubmit={(e)=>login(e)} className="">
        <div className="">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            required
          />
        </div>
        <div className="">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            required
          />
        </div>
        <button type="submit" className="">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;