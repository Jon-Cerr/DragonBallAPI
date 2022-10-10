export default function getDBSdata() {
  const character_name = document.querySelector(".search-input").value;
  const URL = `https://dragon-ball-super-api.herokuapp.com/api/characters/${character_name}`;

  fetch(URL)
    .then((response) => response.json())
    .then((characters) => {
      showData(characters);
    })
    .catch((err) => {
      console.log(err);
      alert("Este personaje no existe");
    });
}

function showData(characters) {
  document.querySelector(".char-name").innerHTML = characters.name;
  document.querySelector(".character-image").src = characters.imageUrl;
  document.querySelector(
    ".character-origin"
  ).innerHTML = `Planeta de origen: ${characters.originplanet}`;
  document.querySelector(
    ".character-specie"
  ).innerHTML = `Especie: ${characters.specie}`;
  document.querySelector(
    ".character-universe"
  ).innerHTML = `Universo: ${characters.universe}`;
  document.querySelector(
    ".character-role"
  ).innerHTML = `Rol: ${characters.role}`;
}