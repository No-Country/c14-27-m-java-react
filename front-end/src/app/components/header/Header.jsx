import React from 'react';
import logoImage from './your-logo.png'; // Import your logo image

const blueColor = "#6DC3FC"; // Define the desired blue color


const Header = () => {
  const registerButtonStyle = {
    backgroundColor: 'white',
    borderColor: blueColor,
    color: blueColor,
  };

    return (
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-blue text-decoration-none">
          <div className="rounded-circle overflow-hidden" style={{ width: '50px', height: '50px' }}>
            <img src={logoImage} alt="Your Logo" className="w-100 h-100" />
          </div>
          </a>

          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li><a href="#" className="nav-link px-2 text-secondary">Nombre</a></li>
            <li><a href="#" className="nav-link px-2 text-blue">Comprar</a></li>
            <li><a href="#" className="nav-link px-2 text-blue">Alquilar</a></li>
            <li><a href="#" className="nav-link px-2 text-blue">Vender</a></li>
            <li><a href="#" className="nav-link px-2 text-blue">FAQ</a></li>
          </ul>

            <div className="ml-3 mr-3 py-2">
              <button className="btn btn-primary mx-1 text-primary" style={registerButtonStyle}>
              Iniciar Sesión
              </button>
              <button className="btn btn-primary mx-4" >Registrarse</button>
            </div>
        </div>
      </div>
    );
  }

  export default Header;