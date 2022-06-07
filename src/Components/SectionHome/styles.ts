import styled, { css } from "styled-components";
import {
  AiFillThunderbolt,
  AiOutlineFire,
  CgPokemon,
  MdOutlineWaterDrop,
} from "../../styles/Icons/homeSectionIcons";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  width: 100%;
  height: 100%;
`;

//MAIN
export const Main = styled.main`
  display: flex;
  flex: 1;

  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 5rem;
  padding: 0 0.5rem;
  width: 100%;

  //MEDIA QUERIES
  @media (max-width: ${(props) => props.theme.breakpoints.forPhoneOnly}) {
    gap: 4rem;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.forTablet}) {
    justify-content: flex-start;
    align-items: flex-start;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  justify-content: center;
  align-items: center;
  margin-top: 5rem;

  h1 {
    font-weight: lighter;
  }
  strong {
    font-size: 4rem;
    color: ${(props) => props.theme.colors.text.red100};
  }

  //MEDIA QUERIES
  @media (max-width: ${(props) => props.theme.breakpoints.forPhoneOnly}) {
    line-height: 1.5rem;

    justify-content: center;
    align-items: center;

    h1 {
      align-self: center;
      font-size: 1rem;
    }
    strong {
      align-self: center;
      font-size: 2.5rem;
    }
  }

  @media (max-width: ${(props) => props.theme.breakpoints.forTablet}) {
    justify-content: flex-start;
    align-items: flex-start;
    margin-top: 3rem;
    h1 {
      font-size: 1rem;
    }

    strong {
      font-size: 2.5rem;
      white-space: nowrap;
    }
  } ;
`;
export const NavigationButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 3rem;

  @media (max-width: ${(props) => props.theme.breakpoints.forTablet}) {
    height: 1rem;
  }
`;

export const ButtonPokedex = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  border: 1px solid ${(props) => props.theme.colors.text.red100};
  background-color: transparent;
  color: ${(props) => props.theme.colors.text.red100};
  font-weight: bold;
  width: 50%;
  height: 4rem;

  transition: all 0.4s;
  :hover {
    cursor: pointer;
    background-color: ${(props) =>
      props.theme.colors.backgrounds.fireContainer};
    color: white;

    border: transparent;

    transform: ${(props) => props.theme.animate.elevate};
  }

  @media (max-width: ${(props) => props.theme.breakpoints.forPhoneOnly}) {
    margin-top: 2rem;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.forTablet}) {
    width: 100%;
  }
`;

//ASIDE
export const Aside = styled.aside`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  flex: 1;

  padding: 0 1rem 1rem 1rem;
  width: 100%;
  height: 40rem;
  img {
    object-fit: contain;
    height: 90%;
  }
  //MEDIA QUERY
  @media (max-width: ${(props) => props.theme.breakpoints.forPhoneOnly}) {
    display: none;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.forTablet}) {
    img {
      height: 60%;
      margin-top: -5rem;
    }
  }
`;

//ICONS
const iconCss = css`
  font-size: 1.5rem;
`;

export const FireTypeIcon = styled(AiOutlineFire)`
  ${iconCss}
`;
export const EletricTypeIcon = styled(AiFillThunderbolt)`
  ${iconCss}
`;
export const WaterTypeIcon = styled(MdOutlineWaterDrop)`
  ${iconCss}
`;
export const PokeballIcon = styled(CgPokemon)`
  position: absolute;
  width: 90%;
  height: 90%;

  right: 3rem;
  top: 1rem;

  opacity: 0.5;
  @media (max-width: ${(props) => props.theme.breakpoints.forTablet}) {
    max-width: 90%;
    max-height: 90%;
    top: -2rem;
    right: 0;
  }
`;
