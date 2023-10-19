"use client";
import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css"; // Importa el CSS de Bootstrap
import data from "../../dataHardcodeada/home"

export default function HomeComponent() {
  const [selectedProvince, setSelectedProvince] = useState("");
  const [city, setCity] = useState("");
  const provinces = data.provinces;
  console.log(provinces);

  const handleSearch = () => {
    if (selectedProvince && city) {
      axios
        .get(`http://localhost:3000/${selectedProvince}/${city}`)
        .then((response) => {
          // Handle the response here
        })
        .catch((error) => {
          console.error("Error making request:", error);
        });
    }
  };

  return (
    <div
      className="container d-flex align-items-center justify-content-center vh-100 mt-3"
      style={{
        backgroundImage:
          "url(https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/e277df109471459.5fd475b7b4dd9.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)", // Nuevo estilo para la capa de opacidad
        padding: "2rem",
        borderRadius: "8px",
      }}
    >
       <div className="text-center">
        <h1 className="mt-5">Encuentra tu nuevo Hogar</h1>
        <p>Tenemos la mejor opcion para vos</p>
        <div className="row mb-3">
          <div className="col">
            <select
              className="form-select"
              value={selectedProvince}
              onChange={(e) => setSelectedProvince(e.target.value)}
            >
              <option value="">Selecciona una provincia</option>
              {provinces.map((province) => (
                <option key={province} value={province}>
                  {province}
                </option>
              ))}
            </select>
          </div>
          <div className="col">
            <input
              className="form-control"
              type="text"
              placeholder="Ciudad"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
          <div className="col" style={{marginRight: 200}}>
            <button className="btn btn-primary"  onClick={handleSearch}>
              Buscar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
