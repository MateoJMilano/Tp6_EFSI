import "./Feed.css";

import Publicacion from "./Publicacion";

function Feed({
  publicaciones,
  abrirPublicacion,
}) {
  return (
    <div className="feed">
      {publicaciones.map((publicacion) => (
        <Publicacion
          key={publicacion.id}
          publicacion={publicacion}
          abrirPublicacion={
            abrirPublicacion
          }
        />
      ))}
    </div>
  );
}

export default Feed;