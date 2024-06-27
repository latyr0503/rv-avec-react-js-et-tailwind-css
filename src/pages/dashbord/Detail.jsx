import React from "react";
import { FaUserFriends } from "react-icons/fa";
import { LuPencilLine } from "react-icons/lu";

export const Detail = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="">
        <div className="w-48 h-36 absolute -top-5 left-64 rotate-12 rounded-2xl bg-sky-700"></div>
        <div className="w-48 h-36 absolute top-0 left-56 rotate-12 rounded-2xl bg-sky-400"></div>
      </div>
      <div className="w-full">
        <FaUserFriends className="bg-sky-200 text-9xl p-5  mx-auto rounded-full" />
        <div className="my-5 p-5 w-3/5 mx-auto border rounded-xl border-slate-400">
          <div className="flex my-4 justify-between items-center">
            <p>
              <span>Mot de passe :</span>
              <span>..........</span>
            </p>
            <LuPencilLine />
          </div>
          <div className="flex my-4 justify-between items-center">
            <p>
              <span>Mot de passe :</span>
              <span>..........</span>
            </p>
            <LuPencilLine />
          </div>
          <div className="flex my-4 justify-between items-center">
            <p>
              <span>Mot de passe :</span>
              <span>..........</span>
            </p>
            <LuPencilLine />
          </div>
          <div className="flex my-4 justify-between items-center">
            <p>
              <span>Mot de passe :</span>
              <span>..........</span>
            </p>
            <LuPencilLine />
          </div>
          <div className="flex my-4 justify-between items-center">
            <p>
              <span>Mot de passe :</span>
              <span>..........</span>
            </p>
            <LuPencilLine />
          </div>
        </div>
        <div className="flex justify-center ">
          <button className="w-3/5 py-3 text-white duration-150 bg-sky-500 rounded-lg hover:bg-sky-900 active:shadow-lg">
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
