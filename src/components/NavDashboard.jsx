import React from "react";
import { CiSearch } from "react-icons/ci";
import { FaBell } from "react-icons/fa6";
import userProfil from "../assets/Ellipse 12.png";

export const NavDashboard = () => {
  return (
    <div className="flex justify-evenly items-center">
      <div className="flex items-center bg-sky-900 rounded-full p-3 h-14 w-2/4">
        <CiSearch className="text-2xl text-white font-bold" />
        <input
          type="text"
          placeholder="Recherche"
          className="px-4 border-none w-full bg-sky-900 text-white"
        />
      </div>

      <div className="flex items-center ">
        <FaBell className="text-2xl text-black mx-10 font-bold"  />
        <img
          src={userProfil}
          width={50}
          alt="Float UI logo"
        />
      </div>
    </div>
  );
};
