import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthProvider";

export const Connexion = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { login, errorMessage } = useAuth();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false); // Nouvel état pour le loader

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      alert("Tous les champs doivent être remplis.");
      return;
    }

    setIsLoading(true); // Démarre le loader

    const success = await login(formData);
    if (success) {
      navigate("/dashboard");
      setIsLoading(false); // Arrête le loader une fois la requête réussie
    } else {
      alert("Vérifiez les informations saisies");
      setIsLoading(false); // Arrête le loader en cas d'échec
    }
  };

  return (
    <div className="grid place-content-center h-[80vh]">
      <h2 className="text-center text-5xl mb-14 font-semibold">Se Connecter</h2>
      <form onSubmit={handleSubmit} className="bg-sky-50 p-10 rounded-xl">
        <input
          className="bg-gray-200 border border-slate-700 w-full h-12 rounded-lg px-4 my-5"
          type="email"
          name="email"
          placeholder="Entrer votre email"
          onChange={handleChange}
          value={formData.email}
        />
        <input
          className="bg-gray-200 border border-slate-700 w-full h-12 rounded-lg px-4 my-5"
          type="password"
          name="password"
          placeholder="Entrer votre password"
          onChange={handleChange}
          value={formData.password}
        />
        {isLoading ? (
          <div className="flex flex-row justify-center gap-2">
            <div className="w-4 h-4 rounded-full bg-sky-500 animate-bounce [animation-delay:.7s]"></div>
            <div className="w-4 h-4 rounded-full bg-sky-500 animate-bounce [animation-delay:.3s]"></div>
            <div className="w-4 h-4 rounded-full bg-sky-500 animate-bounce [animation-delay:.7s]"></div>
          </div>
        ) : (
          <button
            type="submit"
            className="w-full py-3 text-white duration-150 bg-sky-500 rounded-lg hover:bg-sky-700 active:shadow-lg my-5"
          >
            Connexion
          </button>
        )}
        <p>{errorMessage && <p className="text-red-500">{errorMessage}</p>}</p>
      </form>
    </div>
  );
};
