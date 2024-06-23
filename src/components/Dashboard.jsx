import React from "react";
import { Sidebar } from "./Sidebar";
import { NavDashboard } from "./NavDashboard";
import { Outlet } from "react-router-dom";

export const Dashboard = () => {
  return (
    <div className="flex">
      <div className="w-1/5 h-screen bg-sky-400">
        <Sidebar />
      </div>
      <div className="w-4/5 h-screen">
        <div className=" h-24  p-5">
          <NavDashboard />
        </div>
        <div className="p-4">
            <Outlet/>
        </div>
      </div>
    </div>
  );
};
