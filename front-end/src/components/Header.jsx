import React from 'react';
import logoImage from './your-logo.png'; // Import your logo image

const blueColor = "#6DC3FC"; // Define the desired blue color

const Header = () => {
  const registerButtonStyle = {
    backgroundColor: 'white',
    borderColor: blueColor,
    color: blueColor,
  };

  const loginButtonStyle = {
    marginRight: '5%', // Add a 5% right margin to the "Iniciar Sesión" button
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div className="navbar-brand mx-3">
        <div className="rounded-circle overflow-hidden" style={{ width: '50px', height: '50px' }}>
          <img src={logoImage} alt="Your Logo" className="w-100 h-100" />
        </div>
      </div>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link" href="#">
              <span className="text-primary">Comprar</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <span className="text-primary">Alquilar</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <span className="text-primary">Vender</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <span className="text-primary">FAQ</span>
            </a>
          </li>
        </ul>
      </div>
      <div className="ml-3 mr-3 py-2">
        <button className="btn btn-primary mx-2 text-primary" style={registerButtonStyle}>
          Registrarse
        </button>
        <button className="btn btn-primary mx-2" style={loginButtonStyle}>Iniciar Sesión</button>
      </div>
    </nav>
  );
};

export default Header;
