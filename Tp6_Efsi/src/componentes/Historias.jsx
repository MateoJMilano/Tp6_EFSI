import "./Historias.css";

function Historias() {
  const historias = [
    {
      id: 1,
      usuario: "michi",
      imagen:
        "https://cdn-icons-png.flaticon.com/512/149/149071.png",
    },

    {
      id: 2,
      usuario: "catlover",
      imagen:
        "https://cdn-icons-png.flaticon.com/512/149/149071.png",
    },

    {
      id: 3,
      usuario: "luna",
      imagen:
        "https://cdn-icons-png.flaticon.com/512/149/149071.png",
    },

    {
      id: 4,
      usuario: "simba",
      imagen:
        "https://cdn-icons-png.flaticon.com/512/149/149071.png",
    },

    {
      id: 5,
      usuario: "garfield",
      imagen:
        "https://cdn-icons-png.flaticon.com/512/149/149071.png",
    },

    {
      id: 6,
      usuario: "tom",
      imagen:
        "https://cdn-icons-png.flaticon.com/512/149/149071.png",
    },

    {
      id: 7,
      usuario: "kitty",
      imagen:
        "https://cdn-icons-png.flaticon.com/512/149/149071.png",
    },
  ];

  return (
    <div className="historias">
      {historias.map((historia) => (
        <div
          key={historia.id}
          className="historia"
        >
          <div className="historia-borde">
            <img
              src={historia.imagen}
              alt=""
            />
          </div>

          <p>{historia.usuario}</p>
        </div>
      ))}
    </div>
  );
}

export default Historias;