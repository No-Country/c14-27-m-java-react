import React from 'react';

const Form = () => {
  return (
    <div className="row align-items-stretch justify-content-stretch">
      <div className="col-md-10">
        <div className="form h-100 contact-wrap p-3">
          <h3 className="text">Contacto</h3>
          <form className="mb-5">
            <div className="row">
              <div className="col-md-6 form-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre"
                />
              </div>
              <div className="col-md-6 form-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Apellido"
                />
              </div>
              <div className="col-md-12 form-group mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Mail"
                />
              </div>
              <div className="col-md-12 form-group mb-3">
                <input
                  type="number"
                  className="form-control"
                  placeholder="Teléfono"
                />
              </div>
            </div>
            <div className="row mb-2">
              <div className="col-md-12 form-group mb-3">
                <textarea
                  className="form-control"
                  name="message"
                  id="message"
                  cols="30"
                  rows="6"
                  placeholder="Mensaje"
                ></textarea>
              </div>
            </div>
            <div className="row mb-2">
            </div>
            <div className="row justify-content-center">
              <div className="col-md-5 form-group text-center">
                <input
                  type="submit"
                  value="Enviar"
                  className="btn btn-block btn-primary rounded-0 py-2 px-4"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;

