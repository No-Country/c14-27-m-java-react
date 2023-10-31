'use client'
import React, { useState, useEffect } from "react";
import axios from "axios";
import PropCard from "./components/propCard";
import NavFilter from "./components/navFilter";

export default function PropsPage() {
  const desarrolloApp = "https://c14-27-m-java-react-production.up.railway.app";
  const [propiedades, setPropiedades] = useState([]);

  useEffect(() => {
    axios
      .get(`${desarrolloApp}/property/all`)
      .then((response) => {
        console.log(response.data);
        setPropiedades(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      <NavFilter setPropiedades={setPropiedades}/>
      {propiedades?.map((propiedad, index) => (
        <PropCard key={index} data={propiedad} />
      ))}
    </div>
  );
}
