const nav = document.querySelector('#nav');
const abrir = document.querySelector('#abrir');
const cerrar = document.querySelector('#cerrar');

abrir.addEventListener('click', () => {
    nav.classList.add('visible');
});

cerrar.addEventListener('click', () => {
    nav.classList.remove('visible');
});


function cambiarPagina(id) {
  const paginas = document.querySelectorAll(".pagina");
  paginas.forEach(pagina => pagina.classList.remove("activa"));

  const paginaActiva = document.getElementById(id);
  if (paginaActiva) {
    paginaActiva.classList.add("activa");
  }
}

function enviarMensaje(event) {
  event.preventDefault();
  alert("¡Gracias por tu mensaje! Nos pondremos en contacto pronto.");
}