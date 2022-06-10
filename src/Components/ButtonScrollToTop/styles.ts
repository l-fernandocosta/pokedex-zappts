import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  bottom: 1rem;
  left: 2rem;

  width: 2rem;
  height: 2rem;
  border-radius: 9rem;
  border: transparent;
  cursor: pointer;

  background-color: ${(props) => props.theme.pokemonColorTypes.electric};
  box-shadow: ${(props) => props.theme.shadows};
  color: white;
  z-index: 999999;
`;
