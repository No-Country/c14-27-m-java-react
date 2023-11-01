'use client'
import React, { useState } from "react";

const FormComponent = () => {
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
  });

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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
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
          Provincia
        </label>
        <select
          className="form-select"
          id="province"
          name="province"
          value={formData.province}
          onChange={handleInputChange}
        >
          <option value="">Selecciona una provincia</option>
          {/* Aquí puedes agregar las opciones para las provincias */}
        </select>
      </div>
      <div className="mb-3">
        <label htmlFor="city" className="form-label">
          Ciudad
        </label>
        <select
          className="form-select"
          id="city"
          name="city"
          value={formData.city}
          onChange={handleInputChange}
        >
          <option value="">Selecciona una ciudad</option>
          {/* Aquí puedes agregar las opciones para las ciudades */}
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
      {/* Agrega el resto de los campos aquí siguiendo el mismo patrón */}
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
    </form>
  );
};

export default FormComponent;
