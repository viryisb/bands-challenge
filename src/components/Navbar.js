import React from "react";
import {Redirect} from 'react-router-dom'


const Navbar = ({isAuth,logout}) => {
    if (isAuth===false) return <Redirect to={{pathname:'/'}}/>
  return (
    <div className='navbar-component'>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <button className="logout" onClick={(e)=>logout(e)}>
                Log Out
            </button>
          </div>
       
      </nav>
    </div>
  );
};

export default Navbar;