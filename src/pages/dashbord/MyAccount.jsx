import React from "react";
import userProfil from "../../assets/Ellipse 12.png";
import { BiSolidUserPin } from "react-icons/bi";
import { LuPencilLine } from "react-icons/lu";

export default function MyAccount() {
  return (
    <div>
      <h1 className="text-4xl text-center text-sky-600">Rendez-vous</h1>
      <div className="flex items-center">
        <img
          src={userProfil}
          className="bg-sky-600 p-3 ms-20 translate-x-8 rounded-full"
          width={150}
          alt="Float UI logo"
        />
        <h4 className="bg-sky-600 font-bold ps-11 text-2xl h-16 w-full flex items-center text-white">
          Mon Compte
        </h4>
      </div>
      <div className="p-3 flex w-2/5 mx-auto justify-between items-center border rounded-xl border-slate-400">
        <p className="flex flex-col">
          <span className="text-2xl font-semibold text-sky-600">
            Docteur Ndiaye
          </span>
          <span> Dentiste</span>
        </p>
        <BiSolidUserPin className="text-5xl text-sky-600" />
      </div>
      <div className="my-3 px-5 py-3 flex w-2/5 mx-auto justify-between items-center border rounded-xl border-slate-400">
        <p>
          <span>Adresse :</span>
          <span>Cité Avion, Ouakam</span>
        </p>
        <LuPencilLine />
      </div>
      <div className="my-5 px-5 py-3 flex w-2/5 mx-auto justify-between items-center border rounded-xl border-slate-400">
        <p>
          <span>Telephone :</span>
          <span>+221 76 124 10 31</span>
        </p>
        <LuPencilLine />
      </div>
      <div className="my-5 px-5 py-3 flex w-2/5 mx-auto justify-between items-center border rounded-xl border-slate-400">
        <p>
          <span>Adression e-mail :</span>
          <span>latyr0503@gmail.com</span>
        </p>
        <LuPencilLine />
      </div>
      <div className="my-5 px-5 py-3 flex w-2/5 mx-auto justify-between items-center border rounded-xl border-slate-400">
        <p>
          <span>Mot de passe :</span>
          <span>..........</span>
        </p>
        <LuPencilLine />
      </div>
      <div className="flex justify-center ">
        <button className="w-2/5 py-3 text-white duration-150 bg-sky-500 rounded-lg hover:bg-sky-900 active:shadow-lg">
          Enregistrer
        </button>
      </div>
    </div>
  );
}
