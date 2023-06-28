import { Navigate, Route, Routes } from "react-router-dom";
import Login from "../Pages/Login";
import Galeria from "../Pages/Galeria";
import { Cadastro } from "../Pages/Cadastro";
import React from "react";

export function RoutesProvier() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Galeria />} />
      <Route path="/cadastro" element={<Cadastro />} />
    </Routes>
  );
}
