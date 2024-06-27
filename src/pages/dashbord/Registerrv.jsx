import React from "react";
import logo from "../../assets/RVS 1.png";

export const Registerrv = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="">
        <div className="w-48 h-36 absolute -top-5 left-64 rotate-12 rounded-2xl bg-sky-700"></div>
        <div className="w-48 h-36 absolute top-0 left-56 rotate-12 rounded-2xl bg-sky-400"></div>
      </div>
      <div className="w-2/4">
        <img
          src={logo}
          className="bg-sky-200 mx-auto rounded-full"
          width={150}
          alt=""
        />
        <div>
          <input
            className="border rounded-xl my-3 p-5 h-12 w-full border-slate-400"
            type="text"
            placeholder="Titre rendez-vous"
          />
        </div>
        <div>
          <input
            className="border rounded-xl my-3 p-5 h-12 w-full border-slate-400"
            type="text"
            placeholder="Avec qui ?"
          />
        </div>
        <div>
          <input
            className="border rounded-xl my-3 p-5 h-12 w-full border-slate-400"
            type="date"
            placeholder="Date de rv"
          />
        </div>
        <div>
          <input
            className="border rounded-xl my-3 p-5 h-12 w-full border-slate-400"
            type="time"
            placeholder="Heure de rv"
          />
        </div>
        <div>
          <input
            className="border rounded-xl my-3 p-5 h-12 w-full border-slate-400"
            type="text"
            placeholder="Lieu de rv"
          />
        </div>
        <div className="flex justify-center ">
          <button className="w-2/5 py-3 text-white duration-150 bg-sky-500 rounded-lg hover:bg-sky-900 active:shadow-lg">
            Enregistrer
          </button>
        </div>
      </div>
      <div>
        <div className="w-48 h-36 absolute bottom-16 right-0 rotate-12 rounded-2xl bg-sky-700"></div>
        <div className="w-48 h-36 absolute bottom-24 right-0 rotate-12 rounded-2xl bg-sky-400"></div>
      </div>
    </div>
  );
};
