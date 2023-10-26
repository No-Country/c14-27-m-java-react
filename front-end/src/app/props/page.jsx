'use client'
import React, { useState, useEffect } from "react";
import axios from "axios";
import PropCard from "./components/propCard";
import NavFilter from "./components/navFilter";

export default function PropsPage() {
  const desarrolloApp = "http://localhost:8080";
  const [propiedades, setPropiedades] = useState([]);

  useEffect(() => {
    axios
      .get(`${desarrolloApp}/property`)
      .then((response) => {
        console.log(response.data.content);
        setPropiedades(response.data.content);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      <NavFilter />
      {propiedades.map((propiedad, index) => (
        <PropCard key={index} data={propiedad} />
      ))}
    </div>
  );
}
