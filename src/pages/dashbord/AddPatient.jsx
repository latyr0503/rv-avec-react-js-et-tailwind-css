import React, { useState } from "react";
import axios from "axios";
import logo from "../../assets/RVS 1.png";

export const AddPatient = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    number: "",
    age: "",
    address: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !formData.fullName ||
      !formData.email ||
      !formData.number ||
      !formData.age ||
      !formData.address
    ) {
      alert("Tous les champs doivent être remplis.");
      return;
    }
    try {
      const response = await axios.post(
        "http://localhost:3000/patient",
        formData
      );
      setErrorMessage("");
      alert(`patient : ${formData.fullName} ajouter`);
    } catch (error) {
      setErrorMessage("Erreur lors de l'ajout du patient.");
      console.error(error);
    }
  };

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

        <form onSubmit={handleSubmit}>
          <input
            className="border rounded-xl my-3 p-5 h-12 w-full border-slate-400"
            type="text"
            name="fullName"
            placeholder="Ajouter le Nom complet du patient"
            onChange={handleChange}
            value={formData.fullName}
          />

          <input
            className="border rounded-xl my-3 p-5 h-12 w-full border-slate-400"
            type="email"
            name="email"
            placeholder="Ajouter l'email du patient"
            onChange={handleChange}
            value={formData.email}
          />

          <input
            className="border rounded-xl my-3 p-5 h-12 w-full border-slate-400"
            type="text"
            name="number"
            placeholder="Ajouter le numéro du patient"
            onChange={handleChange}
            value={formData.number}
          />

          <input
            className="border rounded-xl my-3 p-5 h-12 w-full border-slate-400"
            type="number"
            name="age"
            placeholder="Ajouter l'âge du patient"
            onChange={handleChange}
            value={formData.age}
          />

          <input
            className="border rounded-xl my-3 p-5 h-12 w-full border-slate-400"
            type="text"
            name="address"
            placeholder="Ajouter l'adresse du patient"
            onChange={handleChange}
            value={formData.address}
          />

          <div className="flex justify-center ">
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
      <div>
        <div className="w-48 h-36 absolute bottom-16 right-0 rotate-12 rounded-2xl bg-sky-700"></div>
        <div className="w-48 h-36 absolute bottom-24 right-0 rotate-12 rounded-2xl bg-sky-400"></div>
      </div>
    </div>
  );
};
