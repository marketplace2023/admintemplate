// components/layout/Layout.js
import React from "react";
import Sidebar from "./Siderbar";

const Layout = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="p-7">{children}</div>
    </div>
  );
};

export default Layout;
