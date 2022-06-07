import styled, { keyframes } from "styled-components";
import {
  AiOutlineFire,
  GiBroadsword,
  IoSkullOutline,
} from "../../styles/Icons/textFieldComponentIcons";

//Animations
const SuspenseImage = keyframes`
  0% {transform: translateY(0px)}
  50% {transform:translateY(-30px)}
  100% {transform:translateY(0px)}

`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 1rem 2rem;

  width: 100%;
  background-color: ${(props) => props.theme.colors.backgrounds.fireContainer};

  @media (max-width: ${(props) => props.theme.breakpoints.forPhoneOnly}) {
    display: flex;
    flex-direction: column;
    gap: 5rem;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.forTablet}) {
    display: flex;
    flex-direction: column;
    gap: 5rem;
  }
`;

//MAIN
export const Main = styled.main`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  width: 100%;
  height: 45rem;

  position: relative;
  flex: 1;

  img {
    width: 70%;
    z-index: 2;
  }

  div {
    width: 60%;
    height: 25rem;
    background-color: white;
    border: 1px solid white;
    position: absolute;
    top: 40%;
    border-radius: 100%;
    z-index: 1;
    box-shadow: ${(props) => props.theme.shadows};
  }

  //Media queries
  @media (min-width: ${(props) => props.theme.breakpoints.forDesktop}) {
    img {
      animation: 5s infinite ${SuspenseImage};
    }
  }
  @media (max-width: ${(props) => props.theme.breakpoints.forTablet}) {
    height: 30rem;
    div {
      height: 20rem;
    }
  }

  @media (max-width: ${(props) => props.theme.breakpoints.forPhoneOnly}) {
    height: 25rem;
    div {
      width: 50%;
      height: 10rem;
      top: 40%;
    }
    img {
      width: 70%;
    }
  }
`;

//ASIDE
export const Aside = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;

  flex: 1;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;
  gap: 2rem;
  width: 100%;
  //Media queries

  @media (max-width: ${(props) => props.theme.breakpoints.forTablet}) {
  }
  @media (max-width: ${(props) => props.theme.breakpoints.forPhoneOnly}) {
    gap: 1rem;
  }
`;

export const ButtonDefault = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  width: 70%;
  height: 5rem;

  border: 2px solid white;
  margin-top: 2rem;

  background-color: transparent;
  font-size: 1.5rem;
  color: white;
  font-weight: bold;

  transition: all 0.2s;
  :hover {
    cursor: pointer;
    filter: brightness(0.3);
  }

  //Media queries

  @media (max-width: ${(props) => props.theme.breakpoints.forTablet}) {
  }
  @media (max-width: ${(props) => props.theme.breakpoints.forPhoneOnly}) {
    height: 3rem;
  }
`;

//ICONS
export const FireIcon = styled(AiOutlineFire)`
  color: ${(props) => props.theme.pokemonColorTypes.fire};
`;

export const WeaknessIcon = styled(IoSkullOutline)``;
export const StrengthIcon = styled(GiBroadsword)``;
