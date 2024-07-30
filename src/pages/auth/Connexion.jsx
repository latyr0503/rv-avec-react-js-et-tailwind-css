import axios from "axios";
import React, { useState } from "react";
import { SlSocialGoogle } from "react-icons/sl";
import { Link, useNavigate } from "react-router-dom";

export const Connexion = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.username || !formData.password) {
      alert("Tous les champs doivent être remplis.");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:3000/auth/signin",
        formData
      );
      console.log(response.data);
      navigate("/dashboard");
      alert("Connexion réussie");
    } catch (error) {
      if (error.response) {
        setErrorMessage(
          error.response.data.message || "Une erreur s'est produite"
        );
        alert("Verifier les informations saisies");
      } else {
        setErrorMessage("Une erreur s'est produite");
        alert("Une erreur s'est produite");
      }
    }
  };
  return (
    <div>
      <h2 className="text-center text-3xl font-semibold">Se Connecter</h2>
      <div className="grid grid-cols-3 gap-4  overflow-hidden">
        <div className="relative ">
          <div className="w-52 -rotate-45 h-80 rounded-2xl absolute top-8 -left-28 bg-sky-200"></div>
          <div className="w-52 rotate-12 h-80 rounded-2xl absolute top-8 -left-40 bg-sky-500"></div>
        </div>

        <form onSubmit={handleSubmit}>
          <input
            className="bg-gray-200 border-none w-full h-12 rounded-lg px-4 my-5"
            type="text"
            name="username"
            placeholder="Entrer votre username"
            onChange={handleChange}
            value={formData.username}
          />
          <input
            className="bg-gray-200 border-none w-full h-12 rounded-lg px-4 mb-5"
            type="password"
            name="password"
            placeholder="Entrer votre password"
            onChange={handleChange}
            value={formData.password}
          />
          <button
            type="submit"
            className="w-full my-8 py-3 text-white duration-150 bg-sky-500 rounded-lg hover:bg-sky-700 active:shadow-lg"
          >
            Connexion
          </button>
          <button className="w-full py-3 flex justify-center items-center text-white duration-150 bg-sky-900 rounded-lg hover:bg-black active:shadow-lg">
            <span className="me-2">Continuer avec Google</span>
            <SlSocialGoogle />
          </button>
          <p className="flex justify-center items-center my-10">
            <span>Mot de passe oublier ? </span>
            <Link to="/inscription">
              <span className="text-sky-700 font-bold mx-5"> S'inscrire</span>
            </Link>
          </p>
        </form>
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        <div className="relative">
          <div className="w-48 -rotate-45 h-48 rounded-2xl absolute bottom-24 -right-12 bg-sky-200"></div>
          <div className="w-48 rotate-12 h-48 rounded-2xl absolute bottom-36 -right-10 bg-sky-500"></div>
        </div>
      </div>
    </div>
  );
};
