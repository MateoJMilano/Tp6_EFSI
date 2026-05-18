import { useEffect, useState } from "react";

import "./App.css";

import Encabezado from "./componentes/Encabezado";
import Feed from "./componentes/Feed";
import ModalPublicacion from "./componentes/ModalPublicacion";
import Perfil from "./componentes/Perfil";

import { getCats } from "./servicios/catApi";

import usuario from "./datos/usuario";
import Historias from "./componentes/Historias";

function App() {
  const [publicaciones, setPublicaciones] = useState([]);
  const [publicacionSeleccionada, setPublicacionSeleccionada] =
    useState(null);

  const [vista, setVista] = useState("feed");

  useEffect(() => {
    const obtenerGatos = async () => {
      const data = await getCats();

      const publicacionesConLikes = data.map(
        (gato, index) => ({
          ...gato,

          likes:
            Math.floor(Math.random() * 500) + 50,

          caption: `Gato número ${index + 1}`,
        })
      );

      setPublicaciones(publicacionesConLikes);
    };

    obtenerGatos();
  }, []);

  const abrirPublicacion = (publicacion) => {
    setPublicacionSeleccionada(publicacion);
  };

  const cerrarModal = () => {
    setPublicacionSeleccionada(null);
  };

  return (
    <div>
      <Encabezado setVista={setVista} />

      {vista === "feed" ? (
  <>
    <Historias />

    <Feed
      publicaciones={publicaciones}
      abrirPublicacion={abrirPublicacion}
    />
  </>
) : (
        <Perfil
          usuario={usuario}
          publicaciones={publicaciones}
        />
      )}

      <ModalPublicacion
        publicacionSeleccionada={
          publicacionSeleccionada
        }
        cerrarModal={cerrarModal}
      />
    </div>
  );
}

export default App;