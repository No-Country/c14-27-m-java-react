"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import data from "../../dataHardcodeada/home";
import Link from "next/link";
import urlProdu from "@/app/dataHardcodeada/url";

export default function HomeComponent() {
  const [selectedProvince, setSelectedProvince] = useState("");
  const [cities, setCities] = useState([]);
  const [provinces, setProvinces] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    axios
      .get(`${urlProdu}/province`)
      .then((response) => {
        console.log(response.data);
        setProvinces(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleSearch = () => {
    if (selectedProvince && city) {
      axios
        .get(`${urlProdu}/${selectedProvince}/${searchTerm}`)
        .then((response) => {
          // Handle the response here
        })
        .catch((error) => {
          console.error("Error making request:", error);
        });
    }
  };

  const handleProvinceChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedProvince(selectedValue);

    // Hacer la solicitud para obtener las ciudades
    axios
      .get(`${urlProdu}/city/${selectedValue}`)
      .then((response) => {
        setCities(response.data);
        console.log("cities:", response.data);
      })
      .catch((error) => {
        console.error("Error fetching cities:", error);
      });
  };

  const handleInputSearch = (e) => {
    const newSearchTerm = e.target.value;
    setSearchTerm(newSearchTerm);

    const filteredSuggestions = cities.filter((city) =>
      city.description.toLowerCase().startsWith(newSearchTerm.toLowerCase())
    );
    setSuggestions(filteredSuggestions);
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchTerm(suggestion);
    setSuggestions([]);
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
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
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
              onChange={handleProvinceChange} // Cambiado aquí
            >
              <option value="">Selecciona una provincia</option>
              {provinces?.map((province) => (
                <option key={province.id} value={province.id}>
                  {province.description}
                </option>
              ))}
            </select>
          </div>
          <div className="col m-2">
            <select
              className="form-select"
              value={cities}
              onChange={(e) => setCities(e.target.value)}
            >
              <option value="">Selecciona una ciudad</option>
              {cities?.map((city) => (
                <option key={city.id} value={city.id}>
                  {city.description}
                </option>
              ))}
            </select>
          </div>
          <div className="col">
            <Link
              href="/detail"
              className="btn btn-primary"
              onClick={handleSearch}
            >
              Buscar
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
