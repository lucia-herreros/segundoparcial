// Bibliografía 
document.addEventListener("DOMContentLoaded", () => {
  const titulos = [
    "Introducción a la Teoría General de la Administración - Idalberto Chiavenato",
    "Administración de Organizaciones - Ricardo F. Solana",
    "Sistemas Administrativos y Control Interno - José Luis Pungitore",
    "Arquitectura de Computadoras - Patricia Quiroga",
    "Organización y Arquitectura de Computadores - William Stallings",
    "Marketing - Philip Kotler y Gary Armstrong",
    "El Libro de Python - Álvaro Revuelta",
  ];

  let indiceActual = 0;

  function cambiarTitulo() {
    const elementoTitulo = document.getElementById("titulo-libro");
    if (!elementoTitulo) return;
    elementoTitulo.textContent = titulos[indiceActual];
    indiceActual = (indiceActual + 1) % titulos.length;
  }

  cambiarTitulo();
  setInterval(cambiarTitulo, 3000);
});
