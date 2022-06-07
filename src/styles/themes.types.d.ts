import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;

    breakpoints: {
      forPhoneOnly: string;
      forTablet: string;
      forDesktop: string;
    };

    colors: {
      backgrounds: {
        container: string;
        waterContainer: string;
        fireContainer: string;
        eletricContainer: string;
      };
      text: {
        black100: string;
        red100: string;
        blue100: string;
        blue200: string;
      };
    };
    pokemonColorTypes: {
      normal: string;
      fire: string;
      water: string;
      eletric: string;
      grass: string;
      ice: string;
      fighting: string;
      poison: string;
      ground: string;
      flying: string;
      psychic: string;
      bug: string;
      rock: string;
      ghost: string;
      dragon: string;
      dark: string;
      steel: string;
      fairy: string;
      shadow: string;
      unknow: string;
    };
    shadows: string;
    animate: {
      elevate: string;
    };
    buttons: {
      colors: {
        red100: string;
        yellow100: string;
        blue100: string;
      };

      borders: {
        rounded: string;
        default: string;
      };
    };
  }
}
