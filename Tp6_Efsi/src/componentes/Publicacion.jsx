import { useState } from "react";

import "./Publicacion.css";

function Publicacion({
  publicacion,
  abrirPublicacion,
}) {
  const [like, setLike] = useState(false);

  return (
    <div className="publicacion">
      <div className="publicacion-header">
        <img
          src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
          alt=""
        />

        <span>catlover</span>
      </div>

      <img
        className="publicacion-img"
        src={publicacion.url}
        alt="gato"
        onClick={() =>
          abrirPublicacion(publicacion)
        }
      />

      <div className="publicacion-actions">
        <button
          onClick={() => setLike(!like)}
        >
          {like ? "❤️" : "🤍"}
        </button>
      </div>

      <p className="likes">
        {like
          ? publicacion.likes + 1
          : publicacion.likes}{" "}
        likes
      </p>

      <p className="caption">
        <strong>catlover</strong>{" "}
        {publicacion.caption}
      </p>
    </div>
  );
}

export default Publicacion;