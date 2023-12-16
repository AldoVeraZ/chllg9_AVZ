console.log(`-----Punto 1-------`);

/* Obtener el elemento del botón */
const botonPresentar = document.getElementById("botonPresentar");

/* Variable para mantener el último personaje visible */
let personajeVisible = null;

/* Añadir un evento click al botón */
botonPresentar.addEventListener("click", () => {
  /* Pedir al usuario que escriba el nombre del personaje */
  let characterUser = prompt(
    `¿Quién se presenta hoy? (Mario, Luigi, Bowser, Peach, Yoshi, Toad, Toadette, Daisy)`
  );

  /* mostrar la respuesta del usuario en consola */
  console.log(`Respuesta del usuario: `, characterUser);

  console.log(`-----Punto 2-------`);
  /* Objeto con los nombres completos de los personajes */
  const characterNames = {
    Mario: "Mario",
    Luigi: "Luigi",
    Bowser: "Bowser Morton Koopa",
    Peach: "Princesa Peach Toadstool",
    Yoshi: "T. Yoshisaur Munchakoopas",
    Toad: "Toad",
    Toadette: "Toadette",
    Daisy: "Princesa Daisy",
  };

  /* obtener el nombre completo del personaje ingresado por el usuario */
  const fullName = characterNames[characterUser] || "(desconocido)";

  /* Mostrar la respuesta del usuario en consola */
  console.log(`Respuesta del usuario: `, fullName);

  console.log(`-----Punto 3-------`);
  /* Verificar si el personaje ingresado por el usuario es válido */
  if (characterNames.hasOwnProperty(characterUser)) {
    console.log(`Personaje válido: `, characterUser);

    /* Ocultar el último personaje visible, si existe */
    if (personajeVisible) {
      personajeVisible.removeAttribute("title");
    }

    /* Obtener el elemento HTML correspondiente al personaje en minúsculas */
    const elementId = characterUser.toLowerCase();
    const characterElement = document.getElementById(elementId);

    /* Verificar si se encontró el elemento y establecer el atributo title */
    if (characterElement) {
      console.log(`Elemento encontrado: `, characterElement);

      // Alternar la visibilidad del personaje en el recuadro
      if (characterElement.hasAttribute("title")) {
        characterElement.removeAttribute("title");
      } else {
        characterElement.setAttribute("title", "Presentado");
        personajeVisible = characterElement;
      }

      console.log(`Visibilidad del personaje alternada`);
    } else {
      console.log(`Elemento no encontrado para el personaje: `, characterUser);
    }
  } else {
    console.log(`Personaje no válido: `, characterUser);

    /* Si el personaje no es válido, mantener visible el último personaje */
    if (personajeVisible) {
      personajeVisible.setAttribute("title", "Presentado");
    }
  }
});

/* Añadir evento click a cada recuadro */
const cajas = document.getElementById("cajas").children;

for (const caja of cajas) {
  caja.addEventListener("click", () => {
    // Obtener el id del recuadro clickeado
    const elementId = caja.id;

    // Obtener el elemento correspondiente al recuadro
    const characterElement = document.getElementById(elementId);

    // Alternar la visibilidad del personaje en el recuadro
    if (characterElement.hasAttribute("title")) {
      characterElement.removeAttribute("title");
    } else {
      characterElement.setAttribute("title", "Presentado");

      // Ocultar el último personaje visible, si existe
      if (personajeVisible && personajeVisible !== characterElement) {
        personajeVisible.removeAttribute("title");
      }

      // Actualizar el personajeVisible
      personajeVisible = characterElement;
    }
  });
}
