const characterContainer = document.querySelector(".character-container")

export default function getDBSdata() {
  // const character_name = document.querySelector(".search-input").value;
  const URL = `https://dragon-ball-super-api.herokuapp.com/api/characters/`;

  fetch(URL)
    .then((response) => response.json())
    .then((characters) => {
      characters.forEach(character => {
        showData(character);
      });
      
    })
    .catch((err) => {
      console.log(err);
      alert("Este personaje no existe");
    });
}

function showData(characters) {
  const cardContain = document.createElement("div")
  cardContain.classList.add("character-information")

  const cardBody = document.createElement("div")
  cardBody.classList.add("character-description")

  const nameChar = document.createElement("h3")
  nameChar.classList.add("char-name")
  nameChar.textContent = characters.name;

  const originChar = document.createElement("p")
  originChar.classList.add("character-origin")
  originChar.textContent = `Planeta de origen: ${characters.originplanet}`;

  const specieChar = document.createElement("p")
  specieChar.classList.add("character-specie")
  specieChar.textContent = `Especie: ${characters.specie}`;

  const universeChar = document.createElement("p")
  universeChar.classList.add("character-universe")
  universeChar.textContent = `Universo: ${characters.universe}`;

  const roleChar = document.createElement("p")
  roleChar.classList.add("character-role")
  roleChar.textContent = `Rol: ${characters.role}`;

  const imgChar = document.createElement("img")
  imgChar.classList.add("character-image")
  imgChar.src = characters.imageUrl

  cardBody.appendChild(nameChar)
  cardBody.appendChild(originChar)
  cardBody.appendChild(specieChar)
  cardBody.appendChild(universeChar)
  cardBody.appendChild(roleChar)
  cardContain.appendChild(cardBody)
  cardContain.appendChild(imgChar)
  characterContainer.appendChild(cardContain)

  // document.querySelector(".character-image").src = characters.imageUrl;
  
  
  
  
}