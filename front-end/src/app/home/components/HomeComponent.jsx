'use client'
import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import data from "../../dataHardcodeada/home";
import Link from "next/link";

export default function HomeComponent() {
  const [selectedProvince, setSelectedProvince] = useState("");
  const [city, setCity] = useState("");
  const provinces = data.provinces;

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
      className="d-flex align-items-center justify-content-center vh-100 mt-3 position-relative"
      style={{
        backgroundImage:
          "url(https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/e277df109471459.5fd475b7b4dd9.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
      />
      <div className="text-center position-relative z-index-2">
        <h1 className="mt-5 text-white">Encuentra tu nuevo Hogar</h1>
        <p className="text-white">Tenemos la mejor opción para vos</p>
        <div className="d-flex justify-content-center align-items-center mb-3">
          <div className="col m-2">
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
          <div className="col m-2">
            <input
              className="form-control"
              type="text"
              placeholder="Ciudad"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
          <div className="col">
            <Link href="/detail" className="btn btn-primary" onClick={handleSearch}>
              Buscar
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
