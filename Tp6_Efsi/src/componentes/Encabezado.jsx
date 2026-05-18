import "./Encabezado.css";

function Encabezado({ setVista }) {
  return (
    <header className="encabezado">
      <h1
        className="logo"
        onClick={() => setVista("feed")}
      >
        Catstagram
      </h1>

      <nav>
        <button
          onClick={() => setVista("feed")}
        >
          Inicio
        </button>

        <button
          onClick={() => setVista("perfil")}
        >
          Perfil
        </button>
      </nav>
    </header>
  );
}

export default Encabezado;