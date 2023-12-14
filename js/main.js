console.log(`-----Punto 1-------`);
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

/* Obtener el elemento <span> dentro del <h1> */
const spanElement = document.querySelector("h1 span");

/* Rellenar el <span> con el nombre completo del personaje */
spanElement.textContent = fullName;

/* Obtener el elemento <h1> y actualizar el texto completo */
const h1Element = document.querySelector("h1");
h1Element.textContent = `Hoy se presenta ${fullName} `;

console.log(`-----Punto 3-------`);
/* Verificar si el personaje ingresado por el usuario es válido */
if (characterNames.hasOwnProperty(characterUser)) {
  console.log(`Personaje válido: `, characterUser);

  /* Obtener el elemento HTML correspondiente al personaje en minúsculas */
  const elementId = characterUser.toLowerCase();
  const characterElement = document.getElementById(elementId);

  /* Verificar si se encontró el elemento y establecer el atributo title */
  if (characterElement) {
    console.log(`Elemento encontrado: `, characterElement);
    characterElement.setAttribute("title", "Presentado");
    console.log(`Atributo title establecido en "Presentado"`);
  } else {
    console.log(`Elemento no encontrado para el personaje: `, characterUser);
  }
} else {
  console.log(`Personaje no válido: `, characterUser);
}
