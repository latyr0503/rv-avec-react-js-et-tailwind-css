import React from "react";
import { FaList, FaUserFriends } from "react-icons/fa";

export default function TableauDeBord() {
  return (
    <div className="px-8">
      <h4 className="font-bold text-sky-500 text-2xl">Bienvenu ! Docteur</h4>
      <p className="my-3 w-2/4">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis
        cumque voluptatum esse libero consequatur illum qui porro .
      </p>
      <h1 className="text-5xl mb-3">Rendez-vous</h1>
      <div className="grid grid-cols-2 gap-8 ">
        <div className="w-full bg-sky-500 h-40 flex flex-col items-center justify-center	">
          <div className="flex justify-center items-center">
            <p className="p-2 font-bold text-2xl bg-white">98</p>
            <FaList className="p-2 text-3xl rounded-xl text-slate-900 bg-white" />
          </div>
          <h4 className="font-bold text-white text-2xl">
            Liste des Rendez-vous
          </h4>
        </div>
        <div className="w-full bg-green-600 h-40 flex flex-col items-center justify-center">
          <div className="flex justify-center items-center">
            <p className="p-2 font-bold text-2xl bg-white">62</p>
            <FaUserFriends className="p-2 text-3xl rounded-xl text-slate-900 bg-white" />
          </div>
          <h4 className="font-bold text-white text-2xl">Liste des Patients</h4>
        </div>
        <div className="w-full bg-gray-900 h-40 flex flex-col items-center justify-center">
          <div className="flex justify-center items-center">
            <p className="p-2 font-bold text-2xl bg-white">98</p>
            <FaList className="p-2 text-3xl rounded-xl text-slate-900 bg-white" />
          </div>
          <h4 className="font-bold text-white text-2xl">
            Liste des Rendez-vous
          </h4>
        </div>
        <div className="w-full bg-sky-300 h-40 flex flex-col items-center justify-center">
          <div className="flex justify-center items-center">
            <p className="p-2 font-bold text-2xl bg-white">62</p>
            <FaUserFriends className="p-2 text-3xl rounded-xl text-slate-900 bg-white" />
          </div>
          <h4 className="font-bold text-white text-2xl">Liste des Patients</h4>
        </div>
      </div>
    </div>
  );
}
