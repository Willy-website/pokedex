// Sélection de la zone d'affichage des Pokémon
const pokemonContainer = document.querySelector(".pokemon-container");

// API Pokédex
const apiLink = "https://pokebuildapi.fr/api/v1/pokemon";

// Couleurs associées aux types
const typeColors = {
  Normal: "#A8A878",
  Feu: "#F08030",
  Eau: "#6890F0",
  Électrik: "#F8D030",
  Plante: "#78C850",
  Glace: "#98D8D8",
  Combat: "#C03028",
  Poison: "#A040A0",
  Sol: "#E0C068",
  Vol: "#A890F0",
  Psy: "#F85888",
  Insecte: "#A8B820",
  Roche: "#B8A038",
  Spectre: "#705898",
  Dragon: "#7038F8",
  Ténèbres: "#705848",
  Acier: "#B8B8D0",
  Fée: "#EE99AC"
};

let currentIndex = 0;
let pokemonData = [];

// Récupération et affichage des Pokémon
fetch(apiLink)
  .then((res) => res.json())
  .then((data) => {
    pokemonData = data; // Stocke toutes les données des Pokémon

    // Fonction pour afficher un Pokémon
    function displayPokemon(index) {
      // Infos Pokémon
      const { name, image, apiTypes, id } = pokemonData[index];
      const primaryType = apiTypes[0].name;
      const secondaryType = apiTypes[1]?.name;

      // Création de la carte Pokémon
      const card = document.createElement("div");
      card.classList.add("relative", "rounded-lg", "shadow-lg", "p-2", "text-white", "text-center", "transition-all", "duration-300");
      // Gestion des couleurs de fond
      if (secondaryType) {
        card.style.background = `linear-gradient(to right, ${typeColors[primaryType]} 50%, ${typeColors[secondaryType]} 50%)`;
      } else {
        card.style.backgroundColor = typeColors[primaryType];
      }

      // Image Pokémon
      const cardImage = document.createElement("img");
      cardImage.src = image;
      cardImage.classList.add("mx-auto", "w-32", "h-32");

      // Nom du Pokémon
      const cardName = document.createElement("h2");
      cardName.classList.add("text-md", "font-bold", "mt-2");
      cardName.textContent = name;

      // Icônes de type
      const typesContainer = document.createElement("div");
      typesContainer.classList.add("flex", "justify-center", "gap-1", "mt-1");

      apiTypes.forEach((type) => {
        const typeIcon = document.createElement("img");
        typeIcon.src = type.image;
        typeIcon.classList.add("w-6", "h-6");
        typesContainer.appendChild(typeIcon);
      });

      // ID du Pokémon
      const cardId = document.createElement("p");
      cardId.classList.add("text-xs", "italic", "mt-1");
      cardId.textContent = `#${id}`;

      // Ajout des éléments à la carte
      card.append(cardImage, cardName, typesContainer, cardId);

      // Nettoie l'écran et ajoute la nouvelle carte
      pokemonContainer.innerHTML = ""; // Efface les anciens Pokémon affichés
      pokemonContainer.appendChild(card);
    }

    // Afficher le premier Pokémon
    displayPokemon(currentIndex);

    // Gérer le clic pour afficher le Pokémon suivant
    document.querySelector("img[alt='Pokédex']").addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % pokemonData.length; // Passe au Pokémon suivant
      displayPokemon(currentIndex); // Affiche le Pokémon suivant
    });
  })
  .catch((err) => console.log(err));

const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");
const hamburgerImg = document.getElementById("hamburger-img");

// Fonction pour ouvrir et fermer le menu avec animation de rotation
hamburger.addEventListener("click", () => {
  menu.classList.toggle("hidden");
  menu.classList.toggle("flex");

  // Ajouter/retirer la classe de rotation
  hamburgerImg.classList.toggle("rotate-180");
});
// Fonction pour fermer le menu lorsque l'utilisateur scroll
window.addEventListener("scroll", () => {
  if (window.scrollY > 0 && !menu.classList.contains("hidden")) {
    menu.classList.add("hidden");
    menu.classList.remove("flex");

    // Réinitialiser l'animation de rotation
    hamburgerImg.classList.remove("rotate-180");
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const backgroundContainer = document.getElementById("background-container");
  const imageUrl = "Poké_Ball_icon-Photoroom.png";
  const secretUrl = "https://shorturl.at/0QOiF";

  for (let i = 0; i < 20; i++) {
    const bgImage = document.createElement("div");
    bgImage.style.backgroundImage = `url(${Math.floor(Math.random() * 40) == 1 ? secretUrl : imageUrl})`;
    bgImage.style.backgroundSize = "cover";
    bgImage.style.backgroundPosition = "center";
    bgImage.classList.add("absolute", "w-64", "h-64",);

    // Positionnement aléatoire
    bgImage.style.top = `${Math.random() * 100}%`;
    bgImage.style.left = `${Math.random() * 100}%`;
    bgImage.style.transform = `rotate(${Math.random() * 360}deg)`;

    backgroundContainer.appendChild(bgImage);

  }
});
