import React, { createContext, useState, useEffect } from "react";
import { api } from "../service/api";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // * Estado inicial do usuario
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    verifyToken();
  }, []);

  const login = async (loginData) => {
    try {
      const { data } = await api.post("/user/login", loginData);
      const { token } = data;

      localStorage.setItem("token", token);

      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      setUser(data);
    } catch (error) {
      console.error(error);
    }
  };

  const verifyToken = async () => {
    const token = localStorage.getItem("token");

    if (token) {
      navigate("/home");
    } else {
      navigate("/login");
    }
  };

  const authContextValue = {
    verifyToken,
    login,
    user,
    setUser,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};
