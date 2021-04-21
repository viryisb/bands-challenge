import * as React from "react";

const UnauthenticatedApp = ({ login }) => {
  return (
    <button
      onClick={() => {
        login(true);
      }}
    >
      Authenticate me, please!
    </button>
  ); // login here
};
export default UnauthenticatedApp

