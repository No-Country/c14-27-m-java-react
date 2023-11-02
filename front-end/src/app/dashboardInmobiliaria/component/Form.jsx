"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import urlProdu from "@/app/dataHardcodeada/url";
import { ToastContainer } from "react-toastify";
import {
  displaySuccessMessage,
  displayFailedMessage,
} from "@/app/components/Toastify";
import axiosInstance from "@/app/func/Func";

const Form = () => {
  const [selectedProvince, setSelectedProvince] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [cities, setCities] = useState([]);
  const [provinces, setProvinces] = useState([]);
  const [data, setData] = useState({
    name: "",
    province: "",
    city: "",
    price: "",
    square_meter: "",
    bedrooms: "",
    bathrooms: "",
    contract_type: "",
    description: "",
    noted: false,
    street: "",
    number: "",
    complement: "",
    propertyType: "",
  });
  const propertyType = [
    { id: 1, description: "Casa" },
    { id: 2, description: "Departamento" },
    { id: 3, description: "Terreno" },
  ];

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

  const handleProvinceChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
    const selectedValue = provinces.find(
      (province) => province.id === parseInt(e.target.value, 10)
    );
    setSelectedProvince(value); // Aquí cambia para almacenar solo el id
    console.log("Provincia select:", value);

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
    const { value } = e.target;
    setData({
      ...data,
      city: value,
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setData({
      ...data,
      [name]: checked,
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setData({
      ...data,
      image: file, // Guarda el archivo en el estado data
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const dataSubm = {
      property_type_id: data.propertyType,
      address: {
        street: data.street,
        number: data.number,
        complement: data.complement,
        location_lat: "1",
        location_len: "1",
      },
      province_id: data.province,
      city_id: data.city,
      price: data.price,
      square_meter: data.square_meter,
      bedrooms: data.bedrooms,
      bathrooms: data.bathrooms,
      contract_type: data.contract_type,
      name: data.name,
      description: data.description,
      noted: data.noted,
      user_id: "3",
      registration_date: "2023-10-07",
      registration_time: "12:48",
      state: true,
      img: data.image
    };
    console.log("Form submitted:", dataSubm);
    console.log("Form data:", data);

    const formData = new FormData();

    formData.append("property_type_id", dataSubm.property_type_id);
    formData.append("address", JSON.stringify(dataSubm.address));
    formData.append("province_id", dataSubm.province_id);
    formData.append("city_id", dataSubm.city_id);
    formData.append("price", dataSubm.price);
    formData.append("square_meter", dataSubm.square_meter);
    formData.append("bedrooms", dataSubm.bedrooms);
    formData.append("bathrooms", dataSubm.bathrooms);
    formData.append("contract_type", dataSubm.contract_type);
    formData.append("name", dataSubm.name);
    formData.append("description", dataSubm.description);
    formData.append("noted", dataSubm.noted);
    formData.append("user_id", dataSubm.user_id);
    formData.append("registration_date", dataSubm.registration_date);
    formData.append("registration_time", dataSubm.registration_time);
    formData.append("state", dataSubm.state);

    if (dataSubm.img) {
      formData.append("image", dataSubm.img);
    }
    console.log('formData:',formData)
    try {
      const response = await axios.post(`${urlProdu}/property/add`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          "Authorization": `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJnb256YXN1YXJlejEwMEBnbWFpbC5jb20iLCJyb2xlIjoic2VsbGVyIiwiZXhwIjoxNjk4OTQxODkzLCJpYXQiOjE2OTg5MzgyOTN9.Auq8jOdIcOH6sM9PUlbwyrCIV4dw49ZBaQmK0yni3tE`
        },
      });
      console.log("Response:", response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Nombre
        </label>
        <input
          type="text"
          className="form-control"
          id="name"
          name="name"
          value={data.name}
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="province" className="form-label">
          Tipo de Propiedad
        </label>
        <select
          className="form-select"
          id="propertyType"
          name="propertyType"
          value={data.propertyType}
          onChange={handleInputChange}
        >
          <option value="">Selecciona un tipo de propiedad</option>
          {propertyType.map((type) => (
            <option key={type.id} value={type.id}>
              {type.description}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-3">
        <label htmlFor="province" className="form-label">
          Provincia
        </label>
        <select
          className="form-select"
          value={data.province} // Cambiar de selectedProvince.description a data.province
          onChange={handleProvinceChange}
          name="province"
        >
          <option value="">Selecciona una provincia</option>
          {provinces?.map((province) => (
            <option key={province.id} value={province.id}>
              {province.description}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-3">
        <label htmlFor="city" className="form-label">
          Ciudad
        </label>
        <select
          className="form-select"
          value={data.city}
          name="city"
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
      <div className="mb-3">
        <label htmlFor="price" className="form-label">
          Precio
        </label>
        <input
          type="text"
          className="form-control"
          id="price"
          name="price"
          value={data.price}
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="square_meter" className="form-label">
          Metros Cuadrados
        </label>
        <input
          type="text"
          className="form-control"
          id="square_meter"
          name="square_meter"
          value={data.square_meter}
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="bedrooms" className="form-label">
          Habitaciones
        </label>
        <input
          type="text"
          className="form-control"
          id="bedrooms"
          name="bedrooms"
          value={data.bedrooms}
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="bathrooms" className="form-label">
          Baños
        </label>
        <input
          type="text"
          className="form-control"
          id="bathrooms"
          name="bathrooms"
          value={data.bathrooms}
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="contract_type" className="form-label">
          Tipo de Contrato
        </label>
        <select
          className="form-select"
          id="contract_type"
          name="contract_type"
          value={data.contract_type}
          onChange={handleInputChange}
        >
          <option value="">Selecciona un tipo de contrato</option>
          <option value="alquiler">Alquiler</option>
          <option value="venta">Venta</option>
        </select>
      </div>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Descripción
        </label>
        <textarea
          className="form-control"
          id="description"
          name="description"
          value={data.description}
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="street" className="form-label">
          Calle
        </label>
        <input
          type="text"
          className="form-control"
          id="street"
          name="street"
          value={data.street}
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="number" className="form-label">
          Número
        </label>
        <input
          type="text"
          className="form-control"
          id="number"
          name="number"
          value={data.number}
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="complement" className="form-label">
          Complemento
        </label>
        <input
          type="text"
          className="form-control"
          id="complement"
          name="complement"
          value={data.complement}
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="image" className="form-label">
          Subir Imágenes
        </label>
        <input
          type="file"
          className="form-control"
          id="image"
          name="image"
          accept="image/*" // Acepta solo archivos de tipo imagen
          onChange={handleFileChange}
        />
      </div>
      <div className="mb-3 form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="noted"
          name="noted"
          checked={data.noted}
          onChange={handleCheckboxChange}
        />
        <label className="form-check-label" htmlFor="noted">
          Publicación destacada
        </label>
      </div>
      <button type="submit" className="btn btn-primary">
        Enviar
      </button>
      <ToastContainer style={{ marginTop: "100px" }} />
    </form>
  );
};

export default Form;
