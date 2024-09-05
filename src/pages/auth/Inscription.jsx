import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export const Inscription = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    password: "",
    address: "",
    speciality: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false); // Ajout du loader
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
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

    setIsLoading(true); // Démarrage du loader
    try {
      const response = await axios.post(
        "https://prise-de-rv-backend-nestjs.onrender.com/auth/signup",
        formData
      );
      console.log(response.data);
      navigate("/connexion");
    } catch (error) {
      if (error.response) {
        if (error.response.status === 409) {
          alert("Le nom d'utilisateur ou l'email est déjà pris.");
        } else {
          setErrorMessage(
            error.response.data.message || "Une erreur s'est produite"
          );
        }
      } else {
        setErrorMessage("Une erreur s'est produite");
      }
    } finally {
      setIsLoading(false); // Arrêt du loader
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
          {isLoading ? (
            <div class="flex flex-row justify-center gap-2">
              <div class="w-4 h-4 rounded-full bg-sky-500 animate-bounce [animation-delay:.7s]"></div>
              <div class="w-4 h-4 rounded-full bg-sky-500 animate-bounce [animation-delay:.3s]"></div>
              <div class="w-4 h-4 rounded-full bg-sky-500 animate-bounce [animation-delay:.7s]"></div>
            </div>
          ) : (
            <button
              type="submit"
              className="w-full py-3 text-white duration-150 bg-sky-500 rounded-lg hover:bg-sky-700 active:shadow-lg my-5"
            >
              S'inscrire
            </button>
          )}
          <p className="flex justify-center items-center my-5">
            <span>J'ai déjà un compte ! </span>
            <Link to="/connexion">
              <span className="text-sky-700 font-bold mx-5"> Se Connecter</span>
            </Link>
          </p>
          {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        </form>
        <div className="relative">
          <div className="w-56 -rotate-45 h-72 rounded-2xl absolute top-20 -right-24 bg-sky-200"></div>
          <div className="w-56 rotate-12 h-80 rounded-2xl absolute top-28 -right-40 bg-sky-500"></div>
        </div>
      </div>
    </div>
  );
};
