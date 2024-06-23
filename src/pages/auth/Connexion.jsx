import React from "react";
// import { Link } from "react-router-dom";
import { SlSocialGoogle } from "react-icons/sl";
import { Link } from "react-router-dom";

export const Connexion = () => {
  return (
    <div >
      <h2 className="text-center text-3xl font-semibold">Se Connecter</h2>
      <div className="grid grid-cols-3 gap-4  overflow-hidden">
        
        <div className="relative ">
          <div className="w-52 -rotate-45 h-80 rounded-2xl absolute top-8 -left-28 bg-sky-200"></div>
          <div className="w-52 rotate-12 h-80 rounded-2xl absolute top-8 -left-40 bg-sky-500"></div>
        </div>

        <form>
          <input
            className="bg-gray-200 border-none w-full h-12 rounded-lg px-4 mt-8 mb-5 "
            type="email"
            placeholder="Entrer votre mail"
          />
          <input
            className="bg-gray-200 border-none w-full h-12 rounded-lg px-4 mb-5 "
            type="password"
            placeholder="Entrer votre mot de passe"
          />
          <Link to="/dashboard">
            <button
              type="button"
              className="w-full my-8 py-3 text-white duration-150 bg-sky-500 rounded-lg hover:bg-sky-700 active:shadow-lg"
            >
              Connexion
            </button>
          </Link>
          <button className="w-full py-3 flex justify-center items-center text-white duration-150 bg-sky-900 rounded-lg hover:bg-black active:shadow-lg">
            <span className="me-2">Continuer avec Google</span>
            <SlSocialGoogle />
          </button>
          <p className="flex justify-center items-center my-10">
            <span>Mot de passe oublier ?</span>
            <span>S'inscrire</span>
          </p>
        </form>

        <div className="relative">
          <div className="w-48 -rotate-45 h-48 rounded-2xl absolute bottom-24 -right-12 bg-sky-200"></div>
          <div className="w-48 rotate-12 h-48 rounded-2xl absolute bottom-36 -right-10 bg-sky-500"></div>
        </div>
      </div>
    </div>
  );
};
