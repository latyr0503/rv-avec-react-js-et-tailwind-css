import React from "react";
import logo from "../assets/RVS 1.png";
import userProfil from "../assets/Ellipse 12.png";
import { Link } from "react-router-dom";
import { IoGrid, IoHomeSharp } from "react-icons/io5";
import { FaList, FaUserCog, FaUserFriends } from "react-icons/fa";
import { useAuth } from "../pages/auth/AuthProvider";

export const Sidebar = () => {
  const navigation = [
    { title: "Accueil", path: "/dashboard", icon: <IoHomeSharp /> },
    {
      title: "Mes Rendez-vous",
      path: "/dashboard/mes-rendez-vous",
      icon: <FaList />,
    },
    {
      title: "Mes Patients",
      path: "/dashboard/mes-patients",
      icon: <FaUserFriends />,
    },
    { title: "Mon Compte", path: "/dashboard/mon-compte", icon: <FaUserCog /> },
  ];

  const { logout } = useAuth();
  return (
    <div>
      <Link to="/dashboard">
        <img
          src={logo}
          className="mx-auto object-cover rounded-xl my-10 h-20 bg-sky-50 w-2/4"
          alt="Float UI logo"
        />
      </Link>
      <Link to={"/dashboard"}>
        <button className="flex gap-3justify-center p-5 w-full bg-white">
          <IoGrid className="text-sky-900 text-2xl" />
          <span className="font-semibold text-sky-900">Tableau de bord</span>
        </button>
      </Link>
      <ul className="ml-7 my-10">
        {navigation.map((item, idx) => {
          return (
            <li key={idx} className="text-white">
              <Link
                to={item.path}
                className="flex gap-3 mx-auto text-lg font-semibold items-center hover:bg-white hover:text-sky-900 p-4"
              >
                {item.icon}
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
      <button
        onClick={logout}
        className="mx-auto group flex items-center justify-start w-11 h-11 bg-red-600 rounded-full cursor-pointer relative overflow-hidden transition-all duration-200 shadow-lg hover:w-44 hover:rounded-lg active:translate-x-1 active:translate-y-1"
      >
        <div className="flex items-center justify-center w-full transition-all duration-300 group-hover:justify-start group-hover:px-3">
          <svg className="w-4 h-4" viewBox="0 0 512 512" fill="white">
            <path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path>
          </svg>
        </div>
        <div className="absolute right-3 transform translate-x-full opacity-0 text-white text-lg font-semibold transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
          Déconnexion
        </div>
      </button>
    </div>
  );
};
