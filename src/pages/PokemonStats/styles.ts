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
  border-radius: 10px;
  width: 100%;
  height: 100%;

  padding: 0 2rem;
  margin-top: 1rem;

  justify-content: center;
  align-items: center;
`;
//MAIN
export const Main = styled.main`
  display: flex;
  flex-direction: column;

  flex: 1;
  padding: 1rem 4rem;

  gap: 5rem;
  height: auto;
  background-color: white;
  @media (max-width: ${(props) => props.theme.breakpoints.forPhoneOnly}) {
    justify-content: center;
    align-items: center;
  }
`;

export const PokemonSpecsHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 4rem;

  @media (max-width: ${(props) => props.theme.breakpoints.forPhoneOnly}) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
  }
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
  display: flex;
  justify-content: space-between;

  @media (max-width: ${(props) => props.theme.breakpoints.forPhoneOnly}) {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    h2 {
      font-size: 1rem;
      white-space: nowrap;
    }
  }
`;

export const TextInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h2 {
    color: ${(props) => props.theme.colors.text.blue200};
  }
  strong {
    font-size: 1.5rem;
  }
`;

export const PokemonStatsContainer = styled.div`
  align-items: flex-start;
  justify-content: flex-start;
  width: 50%;
  margin-bottom: 5rem;
`;

//ASIDE
export const Aside = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  flex: 1;
  height: 53rem;
  padding: 1rem;
  width: 100%;
  gap: 2rem;

  @media (max-width: ${(props) => props.theme.breakpoints.forPhoneOnly}) {
    display: none;
  }
`;

export const MovementsContainer = styled.div<ColorTypeDisplay>`
  display: none;
  @media (min-width: ${(props) => props.theme.breakpoints.forDesktop}) {
    display: flex;
    flex: 1;
    flex-direction: column;
    width: 100%;
    height: 100%;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 1rem;

    h1 {
      color: ${(props) => props.theme.colors.text.blue200};
    }
    div {
      display: flex;
      flex-basis: 10%;
      flex-direction: row;
      flex-wrap: wrap;
      height: 100%;
      gap: 1rem;
      span {
        margin-bottom: 1rem;
        padding: 0.5rem;
        border: 2px solid
          ${(props) => props.theme.pokemonColorTypes[`${props.pokemonTypeBG}`]};
        color: ${(props) =>
          props.theme.pokemonColorTypes[`${props.pokemonTypeBG}`]};
      }
    }
  }
`;
export const AbilitiesContainer = styled.div<ColorTypeDisplay>`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  gap: 1rem;
  h1 {
    color: ${(props) => props.theme.colors.text.blue200};
    margin-bottom: 1rem;
  }

  div {
    display: flex;
    gap: 1rem;
    span {
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      padding: 1rem 2rem;
      border: 2px solid
        ${(props) => props.theme.pokemonColorTypes[`${props.pokemonTypeBG}`]};
      color: ${(props) =>
        props.theme.pokemonColorTypes[`${props.pokemonTypeBG}`]};
    }
  }
`;
