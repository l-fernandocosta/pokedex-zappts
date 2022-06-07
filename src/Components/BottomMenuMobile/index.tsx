import { useState } from "react";
import { useTheme } from "styled-components";
import {
  BiHomeAlt,
  BottomMenuIcon,
  CgPokemon,
} from "../../styles/Icons/bottomMenuNavigation";
import { ButtonNavigation } from "../ButtonNavigation";
import {
  BottomMenuNavigationWrapper,
  Container,
  HomeButtonWrapper,
  ImageWrapper,
  PokedexButtonWrapper,
} from "./styles";

function BottomMenuNavButton() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const {
    buttons: { colors },
  } = useTheme();

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <Container onClick={toggleMenu}>
      <ImageWrapper className={isMenuOpen ? "isActive" : ""}>
        <img src={BottomMenuIcon} alt={"bottom menu icon"} />
      </ImageWrapper>

      <BottomMenuNavigationWrapper className={isMenuOpen ? "showButtons" : ""}>
        <HomeButtonWrapper>
          <ButtonNavigation
            color={colors.red100}
            Icon={BiHomeAlt}
            redirectsTo={"/"}
          />
        </HomeButtonWrapper>

        <PokedexButtonWrapper>
          <ButtonNavigation
            color={colors.red100}
            Icon={CgPokemon}
            redirectsTo={"/"}
          />
        </PokedexButtonWrapper>
      </BottomMenuNavigationWrapper>
    </Container>
  );
}

export { BottomMenuNavButton };
