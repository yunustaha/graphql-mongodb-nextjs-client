import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="bg-green-500 h-screen" >
      <div>Layout</div>
      <hr/>
      <div>{children}</div>
    </div>
  );
};

export default Layout;
