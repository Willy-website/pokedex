// Sélection de la section qui contiendra les cartes Pokémon
const pokedex = document.querySelector(".pokedex");

// Lien vers l'API
let apiLink = "https://pokebuildapi.fr/api/v1/pokemon";

// Objet associant chaque type à une couleur Tailwind CSS
const typeColors = {
  Normal: "bg-gray-400",
  Feu: "bg-red-500",
  Eau: "bg-blue-500",
  Électrik: "bg-yellow-400",
  Plante: "bg-green-500",
  Glace: "bg-blue-300",
  Combat: "bg-red-700",
  Poison: "bg-purple-500",
  Sol: "bg-yellow-700",
  Vol: "bg-indigo-400",
  Psy: "bg-pink-500",
  Insecte: "bg-green-700",
  Roche: "bg-gray-700",
  Spectre: "bg-purple-700",
  Dragon: "bg-indigo-700",
  Ténèbres: "bg-gray-800",
  Acier: "bg-gray-500",
  Fée: "bg-pink-300",
};
// Fonction pour récupérer les Pokémon et les afficher
fetch(apiLink)
  .then((res) => res.json())
  .then((data) => {
    data.forEach((pokemon) => {
      // On récupère les infos du Pokémon
      const name = pokemon.name;
      const imageURL = pokemon.image;
      const types = pokemon.apiTypes;
      const id = pokemon.id;

      // Création de la carte Pokémon
      const card = document.createElement("div");
      card.classList.add("card", "p-4", "rounded-lg", "shadow-lg", "text-white", "text-center");

      // Récupération du premier type pour la couleur de fond
      const primaryType = types[0].name; // Ex: "Feu", "Eau", "Plante"...
      const bgClass = typeColors[primaryType] || "bg-gray-200"; // Si le type n'existe pas, mettre gris
      card.classList.add(bgClass); // Appliquer la classe de fond

      // Création des éléments HTML pour la carte
      const cardName = document.createElement("h2");
      cardName.classList.add("text-xl", "font-bold");
      cardName.textContent = name;

      const cardImage = document.createElement("img");
      cardImage.src = imageURL;
      cardImage.classList.add("mx-auto", "w-32", "h-32");

      const cardTypes = document.createElement("h3");
      cardTypes.classList.add("text-sm", "mt-2", "font-semibold");
      cardTypes.textContent = types.map((type) => type.name).join(", ");

      const cardId = document.createElement("p");
      cardId.classList.add("text-xs", "mt-1", "italic");
      cardId.textContent = `#${id}`;

      // Ajout des éléments à la carte
      card.append(cardName, cardImage, cardTypes, cardId);

      // Ajout de la carte à la section Pokedex
      pokedex.append(card);
    });
  })

  .catch((err) => console.log(err));