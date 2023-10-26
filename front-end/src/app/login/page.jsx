import React from 'react';

function Login() {
  return (
    <div className="container text-center p-3">
      <h2>Bienvenido</h2>
      <form>
        <div className="form-group row justify-content-center">
          <div className="col-sm-4 mb-3">
            <input type="text" className="form-control form-control-sm mx-auto" id="email" placeholder="CORREO" />
          </div>
        </div>
        <div className="form-group row justify-content-center">
          <div className="col-sm-4 mb-3">
            <input type="password" className="form-control form-control-sm mx-auto" id="password" placeholder="CONTRASEÑA" />
          </div>
        </div>
        <div className="form-group row">
          <div>
            <button type="submit" className="btn btn-primary btn-block">ingresar</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
