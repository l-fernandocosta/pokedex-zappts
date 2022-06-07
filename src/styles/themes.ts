const Theme = {
  title: "theme",

  breakpoints: {
    forPhoneOnly: "599px",
    forTablet: "900px",
    forDesktop: "1200px",
  },

  colors: {
    backgrounds: {
      container: "#F6F8FC",
      waterContainer: "#bee0ea",
      fireContainer: "#f8b2b4",
      eletricContainer: "#fbe8b6",
    },
    text: {
      black100: "#383838",
      red100: "#FB6C6C",
      blue100: "#90A7F5",
      blue200: "#3E58AF",
    },
  },
  pokemonColorTypes: {
    normal: "#A8A77A",
    fire: "#FB6C6C",
    water: "#6390F0",
    eletric: "#ed893e",
    grass: "#7AC74C",
    ice: "#96D9D6",
    fighting: "#C22E28",
    poison: "#A33EA1",
    ground: "#E2BF65",
    flying: "#A98FF3",
    psychic: "#F95587",
    bug: "#A6B91A",
    rock: "#B6A136",
    ghost: "#735797",
    dragon: "#6F35FC",
    dark: "#705746",
    steel: "#B7B7CE",
    fairy: "#D685AD",
    shadow: "#383838",
    unknow: "#383838",
  },
  shadows: "0px 4px 4px rgba(0, 0, 0, 0.25)",

  animate: {
    elevate: "translateY(-10px)",
  },
  buttons: {
    colors: {
      red100: "#FB6C6C",
      yellow100: "#FFD86F",
      blue100: "#3CCEEE",
    },
    borders: {
      rounded: "100%",
      default: "5px",
    },
  },
};

export { Theme };
