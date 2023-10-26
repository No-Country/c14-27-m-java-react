import React from 'react';

function Register() {
  return (
    <div className={`container text-center p-3 `} style={{ height: '100vh' }}>
      <h2>Registrate!</h2>
      <form className="mb-5">
            <div className="row">
              <div className="col-md-12 form-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre"
                />
              </div>
              <div className="col-md-12 form-group mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                />
              </div>
              <div className="col-md-12 form-group mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Contraseña"
                />
              </div>
              <div className="col-md-12 form-group mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Repetir Contraseña"
                />
              </div>
            </div>
            <div className="row mb-2">
            </div>
            <div className="row justify-content-center">
              <div className="col-md-5 form-group text-center">
                <input
                  type="submit"
                  value="Registrarse"
                  className="btn btn-block btn-primary rounded-0 py-2 px-4"
                />
              </div>
            </div>
          </form>
    </div>
  );
}

export default Register;
