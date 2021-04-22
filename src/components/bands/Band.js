import * as React from "react";
import { Link } from "react-router-dom";

const Band = ({ bandName, idBand, ...props }) => {
  return (
    <>
      <Link to='Band'>{bandName}</Link>
    </>
  );
};

export default Band;
