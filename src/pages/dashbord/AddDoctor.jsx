import React, { useState } from "react";
import axios from "axios";
import logo from "../../assets/RVS 1.png";

export default function AddDoctor() {
  const [formData, setFormData] = useState({
    NomComplet: "",
    specialite: "",
    numero: "",
    email: "",
    description: "",
    jourDeTravail: [],
    facebook: "",
    twitter: "",
    instagram: "",
    linkedin: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    if (checked) {
      setFormData({
        ...formData,
        jourDeTravail: [...formData.jourDeTravail, name],
      });
    } else {
      setFormData({
        ...formData,
        jourDeTravail: formData.jourDeTravail.filter((day) => day !== name),
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !formData.NomComplet ||
      !formData.specialite ||
      !formData.email ||
      !formData.numero ||
      !formData.description ||
      formData.jourDeTravail.length === 0
    ) {
      alert("Tous les champs doivent être remplis.");
      return;
    }
    try {
      const response = await axios.post(
        "https://prise-de-rv-backend-nestjs.onrender.com/doctors",
        formData
      );
      setErrorMessage("");
      alert(`Docteur : ${formData.NomComplet} ajouté`);
    } catch (error) {
      setErrorMessage("Erreur lors de l'ajout du docteur.");
      console.error(error);
    }
  };

  return (
    <div className="flex justify-center items-center">
      <div className="w-3/4">
        <img
          src={logo}
          className="bg-sky-200 mx-auto rounded-full"
          width={150}
          alt=""
        />

        <form onSubmit={handleSubmit}>
          <input
            className="border rounded-xl my-3 p-5 h-12 w-full border-slate-400"
            type="text"
            name="NomComplet"
            placeholder="Ajouter le Nom complet du docteur"
            onChange={handleChange}
            value={formData.NomComplet}
          />

          <input
            className="border rounded-xl my-3 p-5 h-12 w-full border-slate-400"
            type="email"
            name="email"
            placeholder="Ajouter l'email du docteur"
            onChange={handleChange}
            value={formData.email}
          />

          <input
            className="border rounded-xl my-3 p-5 h-12 w-full border-slate-400"
            type="text"
            name="numero"
            placeholder="Ajouter le numéro du docteur"
            onChange={handleChange}
            value={formData.numero}
          />

          <input
            className="border rounded-xl my-3 p-5 h-12 w-full border-slate-400"
            type="text"
            name="specialite"
            placeholder="Ajouter la spécialité du docteur"
            onChange={handleChange}
            value={formData.specialite}
          />

          <textarea
            className="border rounded-xl my-3 p-5 h-28 w-full border-slate-400"
            name="description"
            placeholder="Ajouter la description du docteur"
            onChange={handleChange}
            value={formData.description}
          ></textarea>

          <div className="flex items-center justify-between">
            {[
              "Lundi",
              "Mardi",
              "Mercredi",
              "Jeudi",
              "Vendredi",
              "Samedi",
              "Dimanche",
            ].map((day) => (
              <div key={day}>
                <input
                  type="checkbox"
                  name={day}
                  id={day}
                  onChange={handleCheckboxChange}
                  checked={formData.jourDeTravail.includes(day)}
                />
                <span className="ml-1 text-sm">{day}</span>
              </div>
            ))}
          </div>

          <input
            className="border rounded-xl my-3 p-5 h-12 w-full border-slate-400"
            type="text"
            name="facebook"
            placeholder="Ajouter le lien Facebook du docteur"
            onChange={handleChange}
            value={formData.facebook}
          />

          <input
            className="border rounded-xl my-3 p-5 h-12 w-full border-slate-400"
            type="text"
            name="twitter"
            placeholder="Ajouter le lien Twitter du docteur"
            onChange={handleChange}
            value={formData.twitter}
          />

          <input
            className="border rounded-xl my-3 p-5 h-12 w-full border-slate-400"
            type="text"
            name="instagram"
            placeholder="Ajouter le lien Instagram du docteur"
            onChange={handleChange}
            value={formData.instagram}
          />

          <input
            className="border rounded-xl my-3 p-5 h-12 w-full border-slate-400"
            type="text"
            name="linkedin"
            placeholder="Ajouter le lien LinkedIn du docteur"
            onChange={handleChange}
            value={formData.linkedin}
          />

          <div className="flex justify-center">
            <button
              type="submit"
              className="w-2/5 py-3 my-3 text-white duration-150 bg-sky-500 rounded-lg hover:bg-sky-900 active:shadow-lg"
            >
              Enregistrer
            </button>
          </div>
        </form>
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
      </div>
    </div>
  );
}
