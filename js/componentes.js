// Función genérica para cargar cualquier componente en un contenedor por id
function cargarComponente(idContenedor, rutaArchivo) {
    fetch(rutaArchivo)
      .then((res) => res.text())
      .then((html) => {
        document.getElementById(idContenedor).innerHTML = html;
      })
      .catch((error) => {
        console.error("Error al cargar el componente:", error);
      });
  }