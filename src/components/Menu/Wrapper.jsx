// Wrapper.js
import React from "react";

const Wrapper = ({ children }) => {
  return (
    <div className="wrapper">
      <div className="body-overlay" />
      {children}
    </div>
  );
};

export default Wrapper;
