import React, { useState } from "react";
import axios from "axios";
import { SlSocialGoogle } from "react-icons/sl";
import { Link, useNavigate } from "react-router-dom";

export const Inscription = () => {
  const [formData, setFormData] = useState({
    username: "",
    fullName: "",
    email: "",
    phoneNumber: "",
    password: "",
    address: "",
    speciality: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !formData.username ||
      !formData.fullName ||
      !formData.email ||
      !formData.phoneNumber ||
      !formData.password ||
      !formData.address ||
      !formData.speciality
    ) {
      alert("Tous les champs doivent être remplis.");
      return;
    }
    try {
      const response = await axios.post(
        "https://prise-de-rv-backend-nestjs.onrender.com/auth/signup",
        formData
      );
      console.log(response.data);
      navigate("/dashboard");
      alert("Inscription reussie");
    } catch (error) {
      if (error.response) {
        // Gérer les erreurs du backend
        if (error.response.status === 409) {
          // Erreur 409 : Conflit, par exemple, username ou email déjà pris
          alert("Le nom d'utilisateur ou l'email est déjà pris.");
        } else {
          setErrorMessage(
            error.response.data.message || "Une erreur s'est produite"
          );
        }
      } else {
        setErrorMessage("Une erreur s'est produite");
      }
    }
  };

  return (
    <div>
      <h2 className="text-center text-3xl font-semibold">S'inscrire</h2>
      <div className="grid grid-cols-3 gap-4 overflow-hidden">
        <div className="relative">
          <div className="w-56 -rotate-45 h-72 rounded-2xl absolute top-20 -left-24 bg-sky-200"></div>
          <div className="w-56 rotate-12 h-80 rounded-2xl absolute top-28 -left-40 bg-sky-500"></div>
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
            type="text"
            name="fullName"
            placeholder="Entrer votre fullName"
            onChange={handleChange}
            value={formData.fullName}
          />
          <input
            className="bg-gray-200 border-none w-full h-12 rounded-lg px-4 mb-5"
            type="email"
            name="email"
            placeholder="Entrer votre email"
            onChange={handleChange}
            value={formData.email}
          />
          <input
            className="bg-gray-200 border-none w-full h-12 rounded-lg px-4 mb-5"
            type="number"
            name="phoneNumber"
            placeholder="Entrer votre phoneNumber"
            onChange={handleChange}
            value={formData.phoneNumber}
          />
          <input
            className="bg-gray-200 border-none w-full h-12 rounded-lg px-4 mb-5"
            type="password"
            name="password"
            placeholder="Entrer votre password"
            onChange={handleChange}
            value={formData.password}
          />
          <input
            className="bg-gray-200 border-none w-full h-12 rounded-lg px-4 mb-5"
            type="text"
            name="address"
            placeholder="Entrer votre address"
            onChange={handleChange}
            value={formData.address}
          />
          <input
            className="bg-gray-200 border-none w-full h-12 rounded-lg px-4 mb-5"
            type="text"
            name="speciality"
            placeholder="Entrer votre speciality"
            onChange={handleChange}
            value={formData.speciality}
          />
          <button
            type="submit"
            className="w-full py-3 text-white duration-150 bg-sky-500 rounded-lg hover:bg-sky-700 active:shadow-lg"
          >
            S'inscrire
          </button>
          <p className="flex justify-center items-center my-10">
            <span>J'ai deja un compte ! </span>
            <Link to="/connexion">
              <span className="text-sky-700 font-bold mx-5"> Se Connecter</span>
            </Link>
          </p>
        </form>
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        <div className="relative py-10">
          <div className="w-48 -rotate-45 h-48 rounded-2xl absolute bottom-12 -right-1 bg-sky-200"></div>
          <div className="w-48 rotate-12 h-48 rounded-2xl absolute bottom-10 -right-16 bg-sky-500"></div>
        </div>
      </div>
    </div>
  );
};
