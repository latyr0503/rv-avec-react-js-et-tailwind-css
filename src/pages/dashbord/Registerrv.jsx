import React, { useState } from "react";
import axios from "axios";
import logo from "../../assets/RVS 1.png";
import { useNavigate } from "react-router-dom";

export const Registerrv = () => {
  // États pour chaque champ du formulaire
  const [motif, setMotif] = useState("");
  const [doctor, setDoctor] = useState("");
  const [patient, setPatient] = useState("");
  const [date, setDate] = useState("");
  const [heure, setHeure] = useState("");
  const [email, setEmail] = useState("");
  const [numero, setNumero] = useState("");
  const [isLoading, setIsLoading] = useState(false); // Nouvel état pour le loader

  const navigate = useNavigate();

  // Fonction pour gérer la soumission du formulaire
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Envoyer les données du formulaire à l'API
      await axios.post(
        "https://prise-de-rv-backend-nestjs.onrender.com/rendezvous",
        {
          motif,
          doctor,
          patient,
          date,
          heure,
          email,
          numero,
        },
        setIsLoading(true) // Démarre le loader
      );
      alert(`Rendez-vous de ${patient} ajouté avec succès!`);
      navigate("/dashboard/mes-rendez-vous");
      setMotif("");
      setDoctor("");
      setPatient("");
      setDate("");
      setHeure("");
      setEmail("");
      setNumero("");
      setIsLoading(false); // Arrête le loader une fois la requête réussie
    } catch (error) {
      console.error("Erreur lors de l'ajout du rendez-vous", error);
      alert("Erreur lors de l'ajout du rendez-vous");
      setIsLoading(false); // Arrête le loader une fois la requête réussie
    }
  };

  return (
    <div className="flex justify-center items-center">
      <div className="w-2/4">
        <img
          src={logo}
          className="bg-sky-200 mx-auto rounded-full"
          width={100}
          alt=""
        />
        <form onSubmit={handleSubmit}>
          <div>
            <input
              className="border rounded-xl my-3 p-5 h-12 w-full border-slate-400"
              type="text"
              placeholder="Objet du rendez-vous"
              value={motif}
              onChange={(e) => setMotif(e.target.value)}
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
              type="email"
              placeholder="email du patient"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="border rounded-xl my-3 p-5 h-12 w-full border-slate-400"
              type="text"
              placeholder="Numero du patient"
              value={numero}
              onChange={(e) => setNumero(e.target.value)}
            />
          </div>
          <div className="flex justify-center ">
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
                Enregistrer
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};
