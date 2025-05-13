import React from "react";
import Sidebar from "../../components/Sidebar";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex bg-gray-400 ">
      <Sidebar />
      <div className="flex-1 bg-amber-700/50">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
