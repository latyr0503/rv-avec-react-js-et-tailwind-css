import React from "react";
import userProfil from "../../assets/Ellipse 12.png";
import { BiSolidUserPin } from "react-icons/bi";
import { LuPencilLine } from "react-icons/lu";

export default function MyAccount() {
  return (
    <div>
      <h1 className="text-5xl mb-3 text-sky-600">Rendez-vous</h1>
      <div className="flex items-center">
        <img
          src={userProfil}
          className="mx-auto mb-4 bg-sky-600 p-5 rounded-full"
          width={200}
          alt="Float UI logo"
        />
        <h4 className="bg-sky-600 w-full">Mon Compte</h4>
      </div>
      <div className="border-3 ">
        <p>
          <span>Docteur Ndiaye</span>
          <span> Dentiste</span>
        </p>
        <BiSolidUserPin />
      </div>
      <div>
        <p>
          <span>Adresse :</span>
          <span>Cité Avion, Ouakam</span>
        </p>
        <LuPencilLine />
      </div>
      <div>
        <p>
          <span>Telephone :</span>
          <span>+221 76 124 10 31</span>
        </p>
        <LuPencilLine />
      </div>
      <div>
        <p>
          <span>Adression e-mail :</span>
          <span>latyr0503@gmail.com</span>
        </p>
        <LuPencilLine />
      </div>
      <div>
        <p>
          <span>Mot de passe :</span>
          <span>..........</span>
        </p>
        <LuPencilLine />
      </div>
      <button className="w-full py-3 text-white duration-150 bg-sky-500 rounded-lg hover:bg-sky-900 active:shadow-lg">
        Enregistrer
      </button>
    </div>
  );
}
