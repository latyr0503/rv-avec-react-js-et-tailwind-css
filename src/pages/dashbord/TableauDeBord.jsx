import React, { useEffect, useState } from "react";
import { BsFillBellFill } from "react-icons/bs";
import userphoto from "../../assets/Ellipse 12.png";
import Card from "../../components/Card";

export default function TableauDeBord() {
  const [stats, setStats] = useState({
    patientsCount: 0,
    rendezVousCount: 0,
  });
  useEffect(() => {
    const fetchStatistics = async () => {
      try {
        const response = await fetch(
          "https://prise-de-rv-backend-nestjs.onrender.com/dashboard/statistics"
        );
        const data = await response.json();
        setStats(data);
      } catch (error) {
        console.error(
          "Erreur lors de la récupération des statistiques :",
          error
        );
      }
    };
    fetchStatistics();
  }, []);

  const table = [
    {
      className: "bg-sky-500 p-10",
      number: stats.rendezVousCount,
      text: "Liste des rendez-vous",
    },
    {
      className: "bg-blue-800 p-10",
      number: stats.patientsCount,
      text: "Liste des patients",
    },
    {
      className: "bg-blue-800 p-10",
      number: stats.patientsCount,
      text: "Liste des patients",
    },
    {
      className: "bg-blue-500 p-10",
      number: stats.rendezVousCount,
      text: "Liste des rendez-vous",
    },
  ];

  return (
    <div className="py-5 px-20">
      <div className="flex justify-between gap-5">
        <div className="w-1/2">
          <h2 className="text-3xl font-bold text-sky-600">Bienvenu! Docteur</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Voluptatem, aspernatur error! Nisi voluptatum omnis, a unde soluta
            perferendis nam iste alias nulla tempore in eligendi ipsa magnam vel
            minima impedit?
          </p>
        </div>
        <div className="flex items-center gap-3">
          <BsFillBellFill className="text-3xl" />
          <img className="w-12" src={userphoto} alt="user" />
        </div>
      </div>

      <h2 className="text-7xl my-5">Rendez-Vous</h2>
      <div className="grid grid-cols-2 gap-5">
        {table.map((awa, index) => (
          <Card
            key={index}
            className={awa.className}
            number={awa.number}
            text={awa.text}
          />
        ))}
      </div>
    </div>
  );
}
