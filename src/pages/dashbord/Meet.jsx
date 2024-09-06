import React, { useEffect, useState } from "react";
import { FaArrowCircleRight } from "react-icons/fa";
import { NavDashboard } from "../../components/NavDashboard";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Meet() {
  const [appointments, setAppointments] = useState([]);
  const [filteredAppointments, setFilteredAppointments] = useState([]);
  const [filter, setFilter] = useState("");

  // Fonction pour récupérer les rendez-vous
  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await axios.get(
          "https://prise-de-rv-backend-nestjs.onrender.com/rendezvous"
        );
        setAppointments(response.data);
        setFilteredAppointments(response.data); // Initialiser les rendez-vous filtrés
      } catch (error) {
        console.error("Erreur lors de la récupération des rendez-vous", error);
      }
    };

    fetchAppointments();
  }, []);

  // Filtrage des rendez-vous selon le nom du patient
  useEffect(() => {
    if (filter) {
      setFilteredAppointments(
        appointments.filter((appointment) =>
          appointment.patient.toLowerCase().includes(filter.toLowerCase())
        )
      );
    } else {
      setFilteredAppointments(appointments); // Remettre la liste initiale si pas de filtre
    }
  }, [filter, appointments]);

  return (
    <div>
      <NavDashboard />
      <div className="flex items-center justify-between px-12">
        <h2 className="text-3xl my-10">Mes Rendez-vous</h2>
        <Link to="/dashboard/register">
          <button
            title="Add New"
            className="group cursor-pointer outline-none hover:rotate-90 duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50px"
              height="50px"
              viewBox="0 0 24 24"
              className="stroke-sky-600 fill-none group-hover:fill-sky-800 group-active:stroke-sky-200 group-active:fill-sky-600 group-active:duration-0 duration-300"
            >
              <path
                d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                strokeWidth="1.5"
              ></path>
              <path d="M8 12H16" strokeWidth="1.5"></path>
              <path d="M12 16V8" strokeWidth="1.5"></path>
            </svg>
          </button>
        </Link>
      </div>

      <label className="mx-auto block w-11/12 pb-3 font-bold">
        Filtrer par patient
      </label>
      <input
        type="text"
        placeholder="Filtrer par patient"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="px-4 py-2 border border-sky-600 rounded-full mb-4 mx-auto block w-11/12"
      />

      {/* Tableau des rendez-vous */}
      <table className="border-collapse w-11/12 mx-auto my-5">
        <thead>
          <tr className="bg-sky-500 text-white">
            <th className="p-4 text-left w-[35%]">Motif</th>
            <th className="p-4 text-left ">Patient</th>
            <th className="p-4 text-left">Numéro</th>
            <th className="p-4 text-left">Date</th>
            <th className="p-4 text-right">Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredAppointments.length > 0 ? (
            filteredAppointments.map((item) => (
              <tr key={item.id}>
                <td className="border-b border-slate-700 p-4 w-[35%]">
                  {item.motif}
                </td>
                <td className="border-b border-slate-700 p-4">{item.patient}</td>
                <td className="border-b border-slate-700 p-4">{item.numero}</td>
                <td className="border-b border-slate-700 p-4">
                  le {item.date} à {item.heure}
                </td>
                <td className="border-b border-slate-700 p-4 ">
                  <Link to={`/dashboard/Detail/${item.id}`}>
                    <button className="float-end">
                      <FaArrowCircleRight className="text-xl text-sky-700" />
                    </button>
                  </Link>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="text-center py-4">
                Aucun rendez-vous trouvé.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
