import React from 'react';
import styles from './navFilter.module.css';

export default function NavFilter() {
  return (
    <div className={styles.navbar}>
      <div className={styles.filter}>
        <select id="property_type" name="property_type" class="form-select" aria-label="Default select example">
          <option value="property_type" disabled selected>Tipo de propiedad</option>
          <option value="casa">Casa</option>
          <option value="departamento">Departamento</option>
          <option value="terreno">Terreno</option>
        </select>
      </div>
      <div className={styles.filter}>
        <select id="contract_type" name="contract_type" class="form-select" aria-label="Default select example">
          <option value="contract_type" disabled selected>Tipo de contrato</option>
          <option value="venta">Venta</option>
          <option value="alquiler">Alquiler</option>
        </select>
      </div>
      <div className={styles.filter}>
        <select id="bedrooms" name="bedrooms" class="form-select" aria-label="Default select example">
          <option value="bedrooms" disabled selected>Habitaciones</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>
      <div className={styles.filter}>
        <select id="bathrooms" name="bathrooms" class="form-select" aria-label="Default select example">
          <option value="bathrooms" disabled selected>Baños</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </div>
    </div>
  );
}
