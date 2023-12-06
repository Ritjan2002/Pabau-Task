import React from "react";

const Header = (page) => {
  return (
    <div className="header">
      <h1>Choose Service</h1>
      <p>Step {page.step}/2</p>
    </div>
  );
};

export default Header;
