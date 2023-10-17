const Image = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img
            src="imagen_grande.jpg"
            alt="Imagen grande"
            className="img-fluid"
          />
        </div>
        <div className="col-md-6">
          <div className="row">
            <div className="col-6">
              <img
                src="imagen_pequena1.jpg"
                alt="Imagen pequeña 1"
                className="img-fluid"
              />
            </div>
            <div className="col-6">
              <img
                src="imagen_pequena2.jpg"
                alt="Imagen pequeña 2"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Image;