"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import data from "../../dataHardcodeada/home";
import Link from "next/link";
import urlProdu from "@/app/dataHardcodeada/url";

export default function HomeComponent() {
  const [selectedProvince, setSelectedProvince] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [cities, setCities] = useState([]);
  const [provinces, setProvinces] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [error, setError] = useState('');
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
    if (selectedProvince && selectedCity) {
      axios
        .get(`${urlProdu}/property/filter?province=${selectedProvince.description}&&city=${selectedCity.description}`)
        .then((response) => {
          console.log('res:',response)
          console.log('res.content:',response.data.content)
          const location = {
            ubic: response.data.content,
            provinceDescription: selectedProvince.description,
            cityDescription: selectedCity.description
          };
          sessionStorage.setItem('location', JSON.stringify(location));
          window.location.href = '/propsFilter';
        })
        .catch((error) => {
          if (error.response && error.response.status === 404) {
            console.error("No se encontraron propiedades con estos filtros");
            setError('Por ahora no tenemos propiedades disponibles en esa ubicaccion, lo siento')
          } else {
            console.error("Error making request:", error);
          }
        });
    }
  };

  const handleProvinceChange = (e) => {
    const selectedValue = provinces.find(province => province.id === parseInt(e.target.value, 10));     
    setSelectedProvince(selectedValue);
    console.log('Provincia select:', selectedValue)

    // Hacer la solicitud para obtener las ciudades
    axios
      .get(`${urlProdu}/city/${selectedValue.id}`)
      .then((response) => {
        setCities(response.data);
        console.log("cities:", response.data);
      })
      .catch((error) => {
        console.error("Error fetching cities:", error);
      });
  };

  const handleCityChange = (e) => {
    const selectedValue = cities.find(city => city.id === parseInt(e.target.value, 10));
    setSelectedCity(selectedValue)
    console.log('City select:',selectedValue)
  }


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
              value={selectedCity}
              onChange={handleCityChange}
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
            <button
              className="btn btn-primary"
              onClick={handleSearch}
            >
              Buscar
            </button>
          </div>
        </div>
        {error && (
            <div className="flex justify-center text-danger mt-2 mb-2 bg-white p-1" >
              {error}
            </div>
          )}
      </div>
    </div>
  );
}
