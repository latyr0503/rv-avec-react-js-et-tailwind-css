import React, { useState } from "react";
import axios from "axios";
import logo from "../../assets/RVS 1.png";

export const Registerrv = () => {
  // États pour chaque champ du formulaire
  const [object, setObject] = useState("");
  const [doctor, setDoctor] = useState("");
  const [patient, setPatient] = useState("");
  const [date, setDate] = useState("");
  const [heure, setHeure] = useState("");
  const [lieu, setLieu] = useState("");

  // Fonction pour gérer la soumission du formulaire
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Envoyer les données du formulaire à l'API
      await axios.post("https://prise-de-rv-backend-nestjs.onrender.com/rendezvous", {
        object,
        doctor,
        patient,
        date,
        heure,
        lieu,
      });
      alert("Rendez-vous ajouté avec succès!");
      // Réinitialiser les champs du formulaire
      setObject("");
      setDoctor("");
      setPatient("");
      setDate("");
      setHeure("");
      setLieu("");
    } catch (error) {
      console.error("Erreur lors de l'ajout du rendez-vous", error);
      alert("Erreur lors de l'ajout du rendez-vous");
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
          <div>
            <input
              className="border rounded-xl my-3 p-5 h-12 w-full border-slate-400"
              type="text"
              placeholder="Objet du rendez-vous"
              value={object}
              onChange={(e) => setObject(e.target.value)}
            />
          </div>
          <input
            className="border rounded-xl my-3 p-5 h-12 w-full border-slate-400"
            type="text"
            placeholder="Nom complet du Docteur"
            value={doctor}
            onChange={(e) => setDoctor(e.target.value)}
          />
          <input
            className="border rounded-xl my-3 p-5 h-12 w-full border-slate-400"
            type="text"
            placeholder="Nom complet du Patient"
            value={patient}
            onChange={(e) => setPatient(e.target.value)}
          />
          <div>
            <input
              className="border rounded-xl my-3 p-5 h-12 w-full border-slate-400"
              type="date"
              placeholder="Date du rendez-vous"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <div>
            <input
              className="border rounded-xl my-3 p-5 h-12 w-full border-slate-400"
              type="time"
              placeholder="Heure du rendez-vous"
              value={heure}
              onChange={(e) => setHeure(e.target.value)}
            />
            <input
              className="border rounded-xl my-3 p-5 h-12 w-full border-slate-400"
              type="text"
              placeholder="Lieu du rendez-vous"
              value={lieu}
              onChange={(e) => setLieu(e.target.value)}
            />
          </div>
          <div className="flex justify-center ">
            <button
              type="submit"
              className="w-2/5 py-3 text-white duration-150 bg-sky-500 rounded-lg hover:bg-sky-900 active:shadow-lg"
            >
              Enregistrer
            </button>
          </div>
        </form>
      </div>
      <div>
        <div className="w-48 h-36 absolute bottom-16 right-0 rotate-12 rounded-2xl bg-sky-700"></div>
        <div className="w-48 h-36 absolute bottom-24 right-0 rotate-12 rounded-2xl bg-sky-400"></div>
      </div>
    </div>
  );
};
