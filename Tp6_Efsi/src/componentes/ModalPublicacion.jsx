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
        className="modal-content"
        onClick={(e) =>
          e.stopPropagation()
        }
      >
        <img
          src={publicacionSeleccionada.url}
          alt=""
        />

        <div className="modal-info">
          <h2>catlover</h2>

          <p>
            {
              publicacionSeleccionada.caption
            }
          </p>

          <p>
            {
              publicacionSeleccionada.likes
            }{" "}
            likes
          </p>

          <div className="comentarios">
            <p>
              <strong>juan:</strong>{" "}
              hermoso gato
            </p>

            <p>
              <strong>maria:</strong>{" "}
              😍😍😍
            </p>
          </div>
          <button className="like-btn">
  ❤️ Me gusta
</button>

          <button onClick={cerrarModal}>
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
}

export default ModalPublicacion;