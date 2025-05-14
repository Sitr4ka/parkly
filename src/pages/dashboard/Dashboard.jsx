import React from "react";
import Sidebar from "../../components/Sidebar";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex overflow-x-hidden">
      <Sidebar />
      <div className="grow overflow-y-auto h-screen relative p-4 pb-8 text-[#0d1b2a]">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
