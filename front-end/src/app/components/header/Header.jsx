import React from 'react';


const blueColor = "#6DC3FC";


const Header = () => {
  const registerButtonStyle = {
    backgroundColor: 'white',
    borderColor: blueColor,
    color: blueColor,
  };

    return (
      <div className="">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-blue text-decoration-none">
          <div className="rounded-circle overflow-hidden" style={{ width: '50px', height: '50px' }}>
            <img src={'https://previews.123rf.com/images/glopphy/glopphy1509/glopphy150900071/45542269-grupo-inmobiliario-de-dise%C3%B1o-de-negocios-logotipo-de-casas.jpg'} alt="Your Logo" className="w-100 h-100" />
          </div>
          </a>
      
          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li><a href="#" className="nav-link px-2 text-black">Multiplace</a></li>
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