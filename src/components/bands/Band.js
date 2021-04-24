import * as React from "react";
import { Link } from "react-router-dom";

const Band = (props) => {
  console.log("parametros", props.location.band)
  return (
    <>
      <Link to='Band'></Link>
      
    </>
  );
};

export default Band;
