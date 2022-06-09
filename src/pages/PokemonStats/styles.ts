import styled from "styled-components";

interface PokemonAvatarProps {
  pokemonTypeBG:
    | "normal"
    | "fire"
    | "water"
    | "electric"
    | "grass"
    | "ice"
    | "fighting"
    | "poison"
    | "ground"
    | "flying"
    | "psychic"
    | "bug"
    | "rock"
    | "ghost"
    | "dragon"
    | "dark"
    | "steel"
    | "fairy"
    | "shadow"
    | "unknow";
}

interface ColorTypeDisplay extends PokemonAvatarProps {}
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const PokemonStatsContent = styled.div`
  display: flex;
  flex-direction: row;

  width: 100%;
  height: 100%;

  padding: 0 2rem;
  margin-top: 1rem;
`;
//MAIN
export const Main = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 1rem 2rem;

  gap: 5rem;
  height: 100%;
  background-color: white;
  box-shadow: ${(props) => props.theme.shadows};
`;

export const PokemonSpecsHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 4rem;
`;

export const AvatarContainer = styled.div<PokemonAvatarProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  border: 3px solid
    ${(props) => props.theme.pokemonColorTypes[`${props.pokemonTypeBG}`]};
  border-radius: 100%;
  box-shadow: ${(props) => props.theme.shadows};
  img {
    width: 8rem;
  }
`;
export const PokemonInfoWrapper = styled.div<ColorTypeDisplay>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  h1 {
    text-transform: uppercase;
  }
  span {
    opacity: 0.5;
  }

  strong {
    display: flex;
    text-transform: uppercase;
    padding: 0.5rem 1rem;
    justify-content: center;
    align-items: center;
    border: 1px solid
      ${(props) => props.theme.pokemonColorTypes[`${props.pokemonTypeBG}`]};

    width: 100%;
  }
`;

export const PokemonSpecsContent = styled.div`
  div {
    display: flex;
    justify-content: space-between;
  }
`;

export const TextInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  h2 {
    color: ${(props) => props.theme.colors.text.blue200};
  }
  strong {
    font-size: 1.5rem;
  }
`;
//ASIDE
export const Aside = styled.aside`
  display: flex;
  flex: 1;
  background-color: white;
  box-shadow: ${(props) => props.theme.shadows};

  @media (max-width: ${(props) => props.theme.breakpoints.forPhoneOnly}) {
    display: none;
  }
`;
