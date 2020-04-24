import React from "react";

const Loader = () => (
  <div className="d-flex justify-content-center m-5 w-100">
    <div className="spinner-border text-success" role="status">
      <span className="sr-only">Loading...</span>
    </div>
  </div>
);

export default Loader;
