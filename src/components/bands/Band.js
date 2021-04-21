import * as React from "react";

const Band = ({ bandName, ...props }) => {
  return <a href="#">{bandName}</a>;
};

export default Band