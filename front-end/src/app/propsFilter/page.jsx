'use client'
import React, { useState, useEffect } from "react";
import axios from "axios";
import PropCard from "../props/components/propCard";
import NavFilter from "./components/navFilter";
import { getSessionStorageLocation } from "../func/sessionStorage";

export default function PropsFilterPage() {
  const dataJ = getSessionStorageLocation();
  const data = dataJ.ubic;
  console.log('session:',data)
  const [properties, setProperties] = useState(data)
  const [filter, setFilter] = useState([]);
  console.log('dataPage:',data)
  console.log('filterPage:',filter)
  


  return (
    <div>
      <NavFilter properties={ data } setFilter={setFilter}/>
      {data?.map((propiedad, index) => ( 
        <PropCard key={index} data={propiedad} />
      ))}
    </div>
  );
}
