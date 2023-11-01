"use client";

import axios from "axios";
import { useState } from "react";
import urlProdu from "@/app/dataHardcodeada/url";


function Login() {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(credentials)
    try{    
    const res = await axios.post(`${urlProdu}/user/login`, credentials)      
    console.log(res)
  }catch(error){
    console.log(error)
  }
  };

  return (
    <div className="container d-flex text-center justify-content-center align-items-center" style={{ height: '80vh' }}>
      <form className="p-3 p-3 shadow-lg p-3 mb-5 bg-body rounded" style={{ width: "50%" }}
      onSubmit={handleSubmit}>
        <h2 className="text-center">Bienvenido</h2>
        <div className='form-group row justify-content-center'>
        <div className="form-group justify-content-center col-sm-8 mb-3">
          <input type="email" className="form-control " id="email" placeholder="Correo"
                    onChange={(e) =>
            setCredentials({
              ...credentials,
              email: e.target.value,
            })
          } />
        </div>
        <div className="form-group col-sm-8 mb-3">
          <input type="password" className="form-control " id="password" placeholder="Contraseña"
          onChange={(e) =>
            setCredentials({
              ...credentials,
              password: e.target.value,
            })
          } />
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
