import "./ModalPublicacion.css";

function ModalPublicacion({
  publicacionSeleccionada,
  cerrarModal,
}) {
  if (!publicacionSeleccionada)
    return null;

  return (
    <div
      className="modal-overlay"
      onClick={cerrarModal}
    >
      <div
        className="modal-instagram"
        onClick={(e) =>
          e.stopPropagation()
        }
      >
        <div className="modal-imagen-container">
          <img
            src={publicacionSeleccionada.url}
            alt=""
            className="modal-imagen"
          />
        </div>

        <div className="modal-derecha">
          <div className="modal-header">
            <div className="usuario-info">
              <img
                src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                alt=""
              />

              <div>
                <h4>catlover</h4>
                <p>Argentina</p>
              </div>
            </div>

            <button
              className="cerrar-btn"
              onClick={cerrarModal}
            >
              ×
            </button>
          </div>

          <div className="modal-caption">
            <img
              src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
              alt=""
            />

            <div>
              <p>
                <strong>catlover</strong>{" "}
                {
                  publicacionSeleccionada.caption
                }
              </p>

              <span>Hace 3 días</span>
            </div>
          </div>

          <div className="modal-comentarios">
            <div className="comentario">
              <strong>juan</strong>
              <p>Hermoso gato 😍</p>
            </div>

            <div className="comentario">
              <strong>maria</strong>
              <p>Necesito adoptarlo</p>
            </div>

            <div className="comentario">
              <strong>lucas</strong>
              <p>Muy tierna la foto 🐱</p>
            </div>
          </div>

          <div className="modal-actions">
            <div className="iconos">
              <span>🤍</span>
              <span>💬</span>
              <span>📤</span>
            </div>

            <span>🔖</span>
          </div>

          <div className="modal-likes">
            <strong>
              {
                publicacionSeleccionada.likes
              }{" "}
              likes
            </strong>

            <p>Hace 3 días</p>
          </div>

          <div className="modal-input">
            <input
              type="text"
              placeholder="Agrega un comentario..."
            />

            <button>Publicar</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalPublicacion;