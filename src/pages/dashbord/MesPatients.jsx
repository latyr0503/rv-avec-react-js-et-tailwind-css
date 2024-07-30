import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavDashboard } from "../../components/NavDashboard";
import { Link } from "react-router-dom";

export default function MesPatients() {
  const [patients, setPatients] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const response = await axios.get("http://localhost:3000/patient");
        setPatients(response.data);
      } catch (error) {
        setErrorMessage("Erreur lors de la récupération des patients");
        console.error(error);
      }
    };

    fetchPatients();
  }, []);

  return (
    <div>
      <NavDashboard />
      <div className="flex items-center justify-between px-12">
        <h2 className="text-3xl my-3">Mes Patients</h2>
        <Link to="/dashboard/addpatient">
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
              FullName
            </th>
            <th className="border-b-2 border-slate-700 p-2 text-center">
              Email
            </th>
            <th className="border-b-2 border-slate-700 p-2 text-center">
              Number
            </th>
            <th className="border-b-2 border-slate-700 p-2 text-center">
              Age
            </th>
            <th className="border-b-2 border-slate-700 p-2 text-center">
              Addresse
            </th>
            {/* <th className="border-b-2 border-slate-700 p-2 text-right">
              Action
            </th> */}
          </tr>
        </thead>
        <tbody>
          {patients.length > 0 ? (
            patients.map((patient) => (
              <tr key={patient.id}>
                <td className="border-b-2 border-slate-700 p-2">
                  {patient.fullName}
                </td>
                <td className="border-b-2 border-slate-700 p-2 text-center">
                  {patient.email}
                </td>
                <td className="border-b-2 border-slate-700 p-2 text-center">
                  {patient.number}
                </td>
                <td className="border-b-2 border-slate-700 p-2 text-center">
                  {patient.age}
                </td>
                <td className="border-b-2 border-slate-700 p-2 text-center">
                  {patient.address}
                </td>
                {/* <td className="border-b-2 border-slate-700 p-2 text-right">
                  <Link to={`/dashboard/patient/${patient.id}`}>
                    <button className="group group-hover:before:duration-500 group-hover:after:duration-1000 after:duration-500 hover:border-sky-300 duration-500 before:duration-500 hover:duration-500 underline-offset-2 hover:after:-right-2 hover:before:top-8 hover:before:right-16 hover:after:scale-150 hover:after:blur-none hover:before:-bottom-8 hover:before:blur-none hover:bg-sky-300 hover:underline hover:underline-offset-4 origin-left hover:decoration-2 hover:text-sky-900 relative bg-sky-800 h-16 w-56 border text-left p-3 text-gray-50 text-base font-bold rounded-lg overflow-hidden before:absolute before:w-12 before:h-12 before:content[''] before:right-1 before:top-1 before:z-10 before:bg-sky-400 before:rounded-full before:blur-lg after:absolute after:z-10 after:w-20 after:h-20 after:content[''] after:bg-cyan-600 after:right-8 after:top-3 after:rounded-full after:blur">
                      Voir le profil
                    </button>
                  </Link>
                </td> */}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="text-center p-4">
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
