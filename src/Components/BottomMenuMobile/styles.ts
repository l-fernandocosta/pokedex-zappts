import styled from "styled-components";
import { BiHomeAlt, CgPokemon } from "../../styles/Icons/bottomMenuNavigation";

export const Container = styled.div`
  display: none;
  @media (max-width: ${(props) => props.theme.breakpoints.forPhoneOnly}) {
    display: flex;

    position: fixed;
    z-index: 10;
    bottom: 0;
    right: 1rem;
  }
`;

export const ImageWrapper = styled.div`
  transition: all 0.4s;
  img {
    max-width: 3rem;
    max-height: 3rem;
  }
  &.isActive {
    position: relative;
    transform: rotate(45deg);
  }
`;

export const BottomMenuNavigationWrapper = styled.div`
  display: none;

  &.showButtons {
    display: flex;
    position: relative;
    right: 1rem;
  }
`;

export const HomeButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  transition: all 0.4s;
  position: absolute;
  background-color: ${(props) => props.theme.colors.backgrounds.fireContainer};
  padding: 0.5rem;
  border-radius: ${(props) => props.theme.buttons.borders.rounded};
  box-shadow: ${(props) => props.theme.shadows};
  right: -1rem;
  top: -4rem;
`;
export const PokedexButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.colors.backgrounds.fireContainer};
  padding: 0.5rem;
  box-shadow: ${(props) => props.theme.shadows};

  border-radius: ${(props) => props.theme.buttons.borders.rounded};
  position: absolute;
  right: 3rem;
  bottom: 0.5rem;
`;

//icons

export const HomeIcon = styled(BiHomeAlt)`
  font-size: 2rem;
  color: white;
`;

export const PokedexIcon = styled(CgPokemon)`
  font-size: 2rem;
  color: white;
`;
