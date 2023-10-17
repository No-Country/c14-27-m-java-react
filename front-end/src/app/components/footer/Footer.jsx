import React from 'react';
import logoImage from '../Header/your-logo.png';

function Footer() {
  return (
    <div className="container">
    <section className="mt-5">
      <div className="row text-center d-flex justify-content-between align-items-center pt-5">
        <div className="col-md-2">
          <h6 className="text-uppercase font-weight-bold">
            <a href="#!" className="text-black text-decoration-none">Ayuda</a>
          </h6>
        </div>
        <div className="col-md-2">
          <h6 className="text-uppercase font-weight-bold">
            <a href="#!" className="text-black text-decoration-none">Nosotros</a>
          </h6>
        </div>
        <div className="col-md-2 d-flex flex-wrap justify-content-evenly">
        <div className="rounded-circle overflow-hidden" style={{ width: '25px', height: '25px' }}>
            <img src={logoImage} alt="Your Logo" className="w-100 h-100" />
          </div>
          <h6 className="text-uppercase font-weight-bold">
            <a href="#!" className="text-black text-decoration-none">Nombre</a>
          </h6>
        </div>  
        <div className="col-md-2">
          <h6 className="text-uppercase font-weight-bold">
            <a href="#!" className="text-black text-decoration-none">Términos</a>
          </h6>
        </div>
  
        <div className="col-md-2">
          <h6 className="text-uppercase font-weight-bold">
            <a href="#!" className="text-black text-decoration-none">Mapa de sitio</a>
          </h6>
        </div>
      </div>
    </section>
    <hr class="my-5" />
        <div className='container d-flex justify-content-center py-1'><p><b>seguinos!</b></p></div>
        <div className="container d-flex justify-content-center py-5">
          <button type="button" className="rounded-circle mx-3 overflow-hidden" style={{ width: '50px', height: '50px' }}>
            <i class="bi bi-facebook"></i>
          </button>
          <button type="button" className="rounded-circle mx-3 overflow-hidden" style={{ width: '50px', height: '50px' }}>
            <i class="bi bi-whatsapp"></i>
          </button>
          <button type="button" className="rounded-circle mx-3 overflow-hidden" style={{ width: '50px', height: '50px' }}>
            <i class="bi bi-instagram"></i>
          </button>
          <button type="button" className="rounded-circle mx-3 overflow-hidden" style={{ width: '50px', height: '50px' }}>
            <i class="bi bi-twitter-x"></i>
          </button>
        </div>
        <div className="text-center text-black p-3">
        © Nombre 2023
        </div>

    </div>
  );
}

export default Footer;