import React from "react";
import { Sidebar } from "./Sidebar";
import { Outlet } from "react-router-dom";

export const Dashboard = () => {
  return (
    <div className="flex h-screen">
      <div className="w-1/5 bg-sky-400">
        <Sidebar />
      </div>
      <div className="w-4/5 p-4 overflow-y-auto">
        <Outlet />
      </div>
    </div>
  );
};
