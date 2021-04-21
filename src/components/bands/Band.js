import * as React from "react";

const Band = ({ bandName, ...props }) => {
  return <h1>{bandName}</h1>;
};

export default Band