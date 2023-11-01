"use client";

import axios from "axios";
import { useState } from "react";
import urlProdu from "@/app/dataHardcodeada/url";

function Register() {
  const [credentials, setCredentials] = useState({
    name: "",
    last_name: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(credentials)
    try{    
    const res = await axios.post(`${urlProdu}/user/save`, credentials)      
    console.log(res)
  }catch(error){
    console.log(error)
  }
  };

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
                  onChange={(e) =>
            setCredentials({
              ...credentials,
              name: e.target.value,
            })
          }
                />
              </div>
              <div className="col-sm-8 mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Apellido"
                  onChange={(e) =>
            setCredentials({
              ...credentials,
              last_name: e.target.value,
            })
          }
                />
              </div>
              <div className="col-sm-8 mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Contraseña"
                  onChange={(e) =>
            setCredentials({
              ...credentials,
              email: e.target.value,
            })
          }
                />
              </div>
              <div className="col-sm-8 mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Contraseña"
                  onChange={(e) =>
            setCredentials({
              ...credentials,
              password: e.target.value,
            })
          }
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
