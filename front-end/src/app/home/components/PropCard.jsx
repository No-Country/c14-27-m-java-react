export default function PropCard() {
    return (
      <div className="card" style={{ width: '18rem' }}>
        <img
          src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/1236a471085657.5bb93caa3d77c.png"
          className="card-img-top"
          alt="Inmueble"
        />
        <div className="card-body">
          <h5 className="card-title">Inmueble</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" className="btn btn-primary">
            Detalles
          </a>
        </div>
      </div>
    );
  }
  