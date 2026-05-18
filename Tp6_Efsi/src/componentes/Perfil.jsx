import "./Perfil.css";

function Perfil({
  usuario,
  publicaciones,
}) {
  return (
    <div className="perfil">
      <div className="perfil-header">
        <img
          src={usuario.profileImage}
          alt=""
        />

        <div>
          <h2>{usuario.username}</h2>

          <button>
            Editar perfil
          </button>

          <div className="stats">
            <p>
              <strong>
                {usuario.posts}
              </strong>{" "}
              publicaciones
            </p>

            <p>
              <strong>
                {usuario.followers}
              </strong>{" "}
              seguidores
            </p>

            <p>
              <strong>
                {usuario.following}
              </strong>{" "}
              seguidos
            </p>
          </div>

          <p>{usuario.bio}</p>
        </div>
      </div>

      <div className="perfil-posts">
        {publicaciones.map(
          (publicacion) => (
            <img
              key={publicacion.id}
              src={publicacion.url}
              alt=""
            />
          )
        )}
      </div>
    </div>
  );
}

export default Perfil;