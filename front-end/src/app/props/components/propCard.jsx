import Image from "next/image";
import Link from "next/link";

export default function PropCard({ data }) {
  const imageUrl = data.image
    ? data.image
    : "https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/e00f7988125171.5e4c6027139b9.png";

  return (
    <div className="d-flex align-items-center border px-4">
      <div>
        <Image src={imageUrl} width={500} height={300} alt="Foto del inmueble" />
      </div>
      <div className="p-4" style={{ maxWidth: "600px" }}>
        <p style={{ wordWrap: "break-word", fontWeight: "bold" }}>{data.precio ? `$ ${data.precio}` : "Precio"}</p>
        <p>{data.direccion ? data.direccion : "Dirección"}</p>
        <p>{data.tipo ? data.tipo : "Tipo de unidad"}</p>
        <p style={{ wordWrap: "break-word" }}>{data.descripcion ? data.descripcion : "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet, ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus."}</p>
        <div className="d-flex justify-content-center">
          <Link href={"/detail"} className="btn btn-primary mt-4 mb-4">Detalles</Link>
        </div>
      </div>
    </div>
  );
}
