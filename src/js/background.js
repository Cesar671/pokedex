const contenedorImagen = document.querySelector('.contenedor-imagen');
const scrollThreshold = 200;

window.addEventListener('scroll', () => {
  if (window.scrollY > scrollThreshold) {
    contenedorImagen.classList.add('reducir');
  } else {
    contenedorImagen.classList.remove('reducir');
  }
});