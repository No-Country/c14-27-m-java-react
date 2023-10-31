import React from 'react';

function Register() {
  return (
    <div className={`container d-flex justify-content-center align-items-center text-center`} style={{ height: '80vh'  }}>
      <form className="p-3 p-3 shadow-lg p-3 mb-5 bg-body rounded" style={{width: "50%"}}>
      <h2>Registrate!</h2>
            <div className="form-group row justify-content-center">
              <div className="col-sm-8 mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre"
                />
              </div>
              <div className="col-sm-8 mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                />
              </div>
              <div className="col-sm-8 mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Contraseña"
                />
              </div>
              <div className="col-sm-8 mb-3">
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
                  className="btn btn-primary btn-block"
                />
              </div>
            </div>
          </form>
    </div>
  );
}

export default Register;
