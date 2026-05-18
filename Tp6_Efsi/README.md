# Catstagram - Clon de Instagram con React

## Descripción del proyecto

Catstagram es una aplicación web desarrollada con React inspirada en la interfaz visual de Instagram.  
El proyecto consume imágenes de gatos desde una API externa y las muestra en formato de publicaciones dentro de un feed dinámico similar al de una red social moderna.

La aplicación permite:
- visualizar publicaciones,
- interactuar mediante likes,
- abrir publicaciones individualmente,
- navegar entre el feed y un perfil de usuario emulado.

---

# Tecnologías utilizadas

- React
- JavaScript
- Axios
- CSS
- Vite

---

# API utilizada

Se utilizó:

## The Cat API

:contentReference[oaicite:0]{index=0}

La API se utiliza para obtener imágenes de gatos dinámicamente mediante peticiones HTTP realizadas con Axios.

---

# Diseño de referencia utilizado

El diseño del proyecto fue inspirado en el siguiente diseño de Figma:

:contentReference[oaicite:1]{index=1}

La aplicación intenta mantener una estructura visual similar a Instagram:
- feed central,
- publicaciones tipo tarjeta,
- perfil de usuario,
- modal de publicaciones,
- diseño minimalista y moderno.

---

# Estructura del proyecto

```txt
src
│
├── assets
│
├── componentes
│   ├── Encabezado.jsx
│   ├── Encabezado.css
│   │
│   ├── Feed.jsx
│   ├── Feed.css
│   │
│   ├── Publicacion.jsx
│   ├── Publicacion.css
│   │
│   ├── ModalPublicacion.jsx
│   ├── ModalPublicacion.css
│   │
│   ├── Perfil.jsx
│   └── Perfil.css
│
├── datos
│   └── usuario.js
│
├── servicios
│   └── catApi.js
│
├── App.jsx
├── App.css
├── main.jsx
└── index.css
```

# Figma de referencia

https://www.figma.com/es-es/comunidad/file/1235135369163092252/instagram-web-ui-recreated