import styled from "styled-components";
interface ContainerProps {
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

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: ${(props) =>
    props.theme.pokemonColorTypes[`${props.pokemonTypeBG}`]}1f;

  box-shadow: ${(props) => props.theme.shadows};
  border-radius: 1rem;

  height: 15rem;
  width: 25rem;
  padding: 2rem 0rem;

  transition: all 0.4s;
  :hover {
    cursor: pointer;
    transform: ${(props) => props.theme.animate.elevate};
  }

  @media (max-width: ${(props) => props.theme.breakpoints.forPhoneOnly}) {
    width: 15rem;
  }
`;
export const PokemonAvatar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  img {
    object-fit: contain;
  }
`;
export const TypeContainerInfo = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 0.5rem;
  height: 100%;

  text-transform: uppercase;

  h3 {
    margin-top: 1rem;
    font-weight: bold;
    color: ${(props) => props.theme.colors.text.blue200};
  }

  span {
    opacity: 0.5;
  }
  strong {
    color: ${(props) =>
      props.theme.pokemonColorTypes[`${props.pokemonTypeBG}`]};
    font-weight: bold;
    border: 1px solid
      ${(props) => props.theme.pokemonColorTypes[`${props.pokemonTypeBG}`]};
    padding: 0 1rem;
  }
`;
