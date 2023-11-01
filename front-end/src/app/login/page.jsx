import React from 'react';

function Login() {
  return (
    <div className="container d-flex text-center justify-content-center align-items-center" style={{ height: '80vh' }}>
      <form className="p-3 p-3 shadow-lg p-3 mb-5 bg-body rounded" style={{ width: "50%" }}>
        <h2 className="text-center">Bienvenido</h2>
        <div className='form-group row justify-content-center'>
        <div className="form-group justify-content-center col-sm-8 mb-3">
          <input type="text" className="form-control " id="email" placeholder="Correo" />
        </div>
        <div className="form-group col-sm-8 mb-3">
          <input type="password" className="form-control " id="password" placeholder="Contraseña" />
        </div>
        </div>
        <div className="form-group ">
          <button type="submit" className="btn btn-primary btn-block ">Ingresar</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
