// Modo claro-oscuro

document.addEventListener('DOMContentLoaded', () => {
  const botonTema = document.getElementById('botonTema');
  const icono = botonTema.querySelector('i');

  // Mantiene el modo oscuro incluso refrescando la página
  if (localStorage.getItem('modoOscuro') === 'true') {
    document.body.classList.add('modo-oscuro');
    icono.classList.remove('bi-moon-stars-fill');
    icono.classList.add('bi-sun-fill');
  }

  botonTema.addEventListener('click', () => {
    document.body.classList.toggle('modo-oscuro');
    const modoOscuroActivo = document.body.classList.contains('modo-oscuro');

    if (modoOscuroActivo) {
      icono.classList.remove('bi-moon-stars-fill');
      icono.classList.add('bi-sun-fill');
      localStorage.setItem('modoOscuro', 'true');
    } else {
      icono.classList.remove('bi-sun-fill');
      icono.classList.add('bi-moon-stars-fill');
      localStorage.setItem('modoOscuro', 'false');
    }
  });
});