import React, { createContext, useContext, useState } from "react";
import axios from "axios";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const login = async (formData) => {
    try {
      const response = await axios.post(
        "https://prise-de-rv-backend-nestjs.onrender.com/auth/signin",
        formData
      );
      const token = response.data.token;
      localStorage.setItem("authToken", token);
      setIsAuthenticated(true);
      setUser(response.data.user);
      setErrorMessage("");
      return true; // Renvoie une valeur pour indiquer si la connexion a réussi
    } catch (error) {
      if (error.response) {
        setErrorMessage(
          error.response.data.message || "Une erreur s'est produite"
        );
      } else {
        setErrorMessage("Une erreur s'est produite");
      }
      return false; // En cas d'échec
    }
  };

  const logout = () => {
    localStorage.removeItem("authToken");
    setIsAuthenticated(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, login, logout, user, errorMessage }}
    >
      {children}
    </AuthContext.Provider>
  );
};
