import React, { useState, useEffect } from "react";
import { FaUserFriends } from "react-icons/fa";
import { LuPencilLine } from "react-icons/lu";
import { FiSave } from "react-icons/fi"; // Une icône pour la sauvegarde
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Detail = () => {
  const { id } = useParams();
  const [appointment, setAppointment] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editField, setEditField] = useState(null); // Champ en édition
  const [formData, setFormData] = useState({}); // Données du formulaire
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAppointmentDetail = async () => {
      if (!id) {
        setLoading(false);
        setError("ID manquant.");
        return;
      }

      try {
        const response = await axios.get(
          `https://prise-de-rv-backend-nestjs.onrender.com/rendezvous/${id}`
        );
        setAppointment(response.data);
        setFormData(response.data);
      } catch (error) {
        setError("Erreur lors de la récupération des détails.");
      } finally {
        setLoading(false);
      }
    };

    fetchAppointmentDetail();
  }, [id]);

  const handleEditClick = (field) => {
    setEditField(field);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = async () => {
    try {
      await axios.put(
        `https://prise-de-rv-backend-nestjs.onrender.com/rendezvous/${id}`,
        formData
      );
      setAppointment(formData);
      setEditField(null); // Désactiver l'édition après la sauvegarde
    } catch (error) {
      setError("Erreur lors de la mise à jour des détails.");
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(
        `https://prise-de-rv-backend-nestjs.onrender.com/rendezvous/${id}`,
        formData
      );
      setAppointment(formData);
      alert(`Rendezvous de ${appointment.patient} supprimer `);
      navigate("/dashboard/mes-rendez-vous");
    } catch (error) {
      setError("Erreur lors de la mise à jour des détails.");
    }
  };

  if (loading) return <p>Chargement...</p>;
  if (error) return <p>{error}</p>;
  if (!appointment) return <p>Le rendez-vous demandé n'existe pas.</p>;

  return (
    <div className="w-full flex justify-center flex-col items-center my-8">
      <FaUserFriends className="bg-sky-400 text-white text-9xl p-5 mx-auto rounded-full" />
      <div className="my-5 p-5 w-3/5 mx-auto border rounded-xl border-slate-400">
        {Object.keys(appointment).map(
          (key) =>
            // Ne pas afficher l'ID
            key !== "id" && (
              <div key={key} className="flex my-4 justify-between items-center">
                {/* Masquer le texte si le champ est en cours d'édition */}
                <p className={editField === key ? "hidden" : ""}>
                  <strong className="mr-3">
                    {key.charAt(0).toUpperCase() + key.slice(1)} :
                  </strong>
                  <span>{appointment[key]}</span>
                </p>

                {/* Afficher un input si le champ est en cours d'édition */}
                {editField === key && (
                  <input
                    type="text"
                    name={key}
                    value={formData[key]}
                    onChange={handleChange}
                    className="border border-sky-500x rounded p-2 w-[90%]"
                  />
                )}

                {editField === key ? (
                  <FiSave
                    onClick={handleSave}
                    className="cursor-pointer text-sky-500 text-2xl"
                  />
                ) : (
                  <LuPencilLine
                    onClick={() => handleEditClick(key)}
                    className="cursor-pointer text-sky-500 text-2xl"
                  />
                )}
              </div>
            )
        )}
      </div>
      <button
        onClick={handleDelete}
        className="bg-red-600 flex justify-center p-3 text-white font-bold rounded-xl"
      >
        Supprimer le rendez-vous
      </button>
    </div>
  );
};
