import React from "react";
import Dashboard from "./Dashboard";
import { Outlet } from "react-router-dom";

const Dashlayout = () => {
  return (
    <div>
      <Dashboard />
      <Outlet />
    </div>
  );
};

export default Dashlayout;
