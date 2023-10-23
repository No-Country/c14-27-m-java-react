import PropCard from "./PropCard";
import Link from "next/link";

export default function DestacadasPage() {
  return (
    <div className="d-flex justify-content-center h-100 mt-5">
      <div className="ml-10">
        <h2 className="text-center mb-4">Publicaciones Destacadas</h2>
        <div className="row mb-3">
          <div className="col-md-4 mb-3 mr-3">
            <PropCard />
          </div>
          <div className="col-md-4 mb-3 mr-3">
            <PropCard />
          </div>
          <div className="col-md-4 mb-3">
            <PropCard />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-md-4 mb-3 mr-3">
            <PropCard />
          </div>
          <div className="col-md-4 mb-3 mr-3">
            <PropCard />
          </div>
          <div className="col-md-4 mb-3">
            <PropCard />
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <Link href={"/props"} className="btn btn-primary mt-4 mb-4">Ver Más</Link>
        </div>
      </div>
    </div>
  );
}
