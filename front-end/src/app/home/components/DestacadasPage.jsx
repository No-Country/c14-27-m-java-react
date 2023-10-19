import PropCard from "./PropCard"

export default function DestacadasPage() {
    return (
        <div className="container-fluid vh-100 mt-5">
            <div className="ml-10">
              <h2 className="text-center mb-4">Publicaciones Destacadas</h2>
              <div className="row mb-3">
                  <div className="col-md-4">
                      <PropCard />
                  </div>
                  <div className="col-md-4">
                      <PropCard />
                  </div>
                  <div className="col-md-4">
                      <PropCard />
                  </div>
              </div>
              <div className="row mb-3">
                  <div className="col-md-4">
                      <PropCard />
                  </div>
                  <div className="col-md-4">
                      <PropCard />
                  </div>
                  <div className="col-md-4">
                      <PropCard />
                  </div>
              </div>
              <div className="d-flex justify-content-center">
                    <button className="btn btn-primary mt-4 mb-4">Ver Más</button>
                </div>
            </div>
        </div>
    )
}
