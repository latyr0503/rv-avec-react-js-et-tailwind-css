import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavDashboard } from "../../components/NavDashboard";
import { Link } from "react-router-dom";
import { FaArrowCircleRight } from "react-icons/fa";

export default function NosDocteur() {
  const [Doctor, setDoctor] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const fetchDoctor = async () => {
      try {
        const response = await axios.get(
          "https://prise-de-rv-backend-nestjs.onrender.com/doctors"
        );
        setDoctor(response.data);
      } catch (error) {
        setErrorMessage("Erreur lors de la récupération des Doctor");
        console.error(error);
      }
    };

    fetchDoctor();
  }, []);
  return (
    <div>
      <NavDashboard />
      <div className="flex items-left justify-between px-12">
        <h2 className="text-3xl my-3">Mes Docteurs</h2>
        <Link to="/dashboard/adddoctor">
          <button
            title="Add New"
            className="group cursor-pointer outline-none hover:rotate-90 duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50px"
              height="50px"
              viewBox="0 0 24 24"
              className="stroke-blue-400 fill-none group-hover:fill-blue-800 group-active:stroke-blue-200 group-active:fill-blue-600 group-active:duration-0 duration-300"
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
      <table className="border-collapse w-11/12 mx-auto my-5">
        <thead>
          <tr>
            <th className="border-b-2 border-slate-700 p-2 text-left">
              Prenom Nom
            </th>
            <th className="border-b-2 border-slate-700 p-2 text-left">
              Email
            </th>
            <th className="border-b-2 border-slate-700 p-2 text-left">
              Numero
            </th>
            <th className="border-b-2 border-slate-700 p-2 text-left">
              specialite
            </th>
            <th className="border-b-2 border-slate-700 p-2 text-right">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {Doctor.length > 0 ? (
            Doctor.map((patient) => (
              <tr key={patient.id}>
                <td className="border-b-2 border-slate-700 p-2">
                  {patient.NomComplet}
                </td>
                <td className="border-b-2 border-slate-700 p-2 text-left">
                  {patient.email}
                </td>
                <td className="border-b-2 border-slate-700 p-2 text-left">
                  {patient.numero}
                </td>
                <td className="border-b-2 border-slate-700 p-2 text-left">
                  {patient.specialite}
                </td>
                <td className="border-b-2 border-slate-700 p-2 text-right">
                  <Link to={`/dashboard/patient/${patient.id}`}>
                    <button className="float-end">
                      <FaArrowCircleRight className="text-xl text-sky-700" />
                    </button>
                  </Link>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="text-left p-4">
                Aucun patient trouvé
              </td>
            </tr>
          )}
        </tbody>
      </table>
      {errorMessage && <p className="text-red-500">{errorMessage}</p>}
    </div>
  );
}
