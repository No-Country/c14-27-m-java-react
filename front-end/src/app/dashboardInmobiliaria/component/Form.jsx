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
  const [formData, setFormData] = useState({
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
    setFormData({
      ...formData,
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
    setFormData({
      ...formData,
      city: value,
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData({
      ...formData,
      [name]: checked,
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      image: file, // Guarda el archivo en el estado formData
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    const data = {
      property_type_id: formData.propertyType,
      address: {
        street: formData.street,
        number: formData.number,
        complement: formData.complement,
        location_lat: "1",
        location_len: "1",
      },
      province_id: formData.province,
      city_id: formData.city,
      price: formData.price,
      square_meter: formData.square_meter,
      bedrooms: formData.bedrooms,
      bathrooms: formData.bathrooms,
      contract_type: formData.contract_type,
      name: formData.name,
      description: formData.description,
      noted: formData.noted,
      user_id: "3"
    };
    const formDataToSend = new FormData(); // Cambiado el nombre de la variable
    formDataToSend.append("property_type_id", data.property_type_id);
    formDataToSend.append("address", JSON.stringify(data.address)); // Convierte a JSON y agrega
    formDataToSend.append("province_id", data.province_id);
    formDataToSend.append("city_id", data.city_id);
    formDataToSend.append("price", data.price);
    formDataToSend.append("square_meter", data.square_meter);
    formDataToSend.append("bedrooms", data.bedrooms);
    formDataToSend.append("bathrooms", data.bathrooms);
    formDataToSend.append("contract_type", data.contract_type);
    formDataToSend.append("name", data.name);
    formDataToSend.append("description", data.description);
    formDataToSend.append("noted", data.noted);
    formDataToSend.append("user_id", data.user_id);
  
    if (formData.image) {
      formDataToSend.append("image", formData.image);
    }
    try {
      const res = await axiosInstance.post(
        `${urlProdu}/property/add`,
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("datos enviados:", data);
      console.log("resServer:", res);
      displaySuccessMessage("Propiedad Publicada");
    } catch (error) {
      console.log(error);
      displayFailedMessage("No se pudo publicar la propiedad");
      console.log("datos enviados:", formDataToSend);
      console.log("data enviada:", data);
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
          value={formData.name}
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
          value={formData.propertyType}
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
          value={formData.province} // Cambiar de selectedProvince.description a formData.province
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
          value={formData.city}
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
          value={formData.price}
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
          value={formData.square_meter}
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
          value={formData.bedrooms}
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
          value={formData.bathrooms}
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
          value={formData.contract_type}
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
          value={formData.description}
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
          value={formData.street}
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
          value={formData.number}
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
          value={formData.complement}
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
          checked={formData.noted}
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
