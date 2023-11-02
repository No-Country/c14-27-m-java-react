"use client";
import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css"; // Importa el CSS de Bootstrap
import data from "../dataHardcodeada/home"
import HomeComponent from "./components/HomeComponent";
import DestacadasPage from "./components/DestacadasPage";

export default function HomePage() {
  const token = sessionStorage.getItem('token'); // Obtener el token almacenado

  // Verificar si hay un token
  const isAuth = !!token;

  console.log('isAuth?:', isAuth);
  return (
    <div>
      <HomeComponent />
      <DestacadasPage />
    </div>
  );
}

