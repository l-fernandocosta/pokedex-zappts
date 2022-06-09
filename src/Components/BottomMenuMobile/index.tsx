import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "styled-components";
import { BottomMenuIcon } from "../../styles/Icons/bottomMenuNavigation";
import {
  BottomMenuNavigationWrapper,
  Container,
  HomeButtonWrapper,
  HomeIcon,
  ImageWrapper,
  PokedexButtonWrapper,
  PokedexIcon,
} from "./styles";

function BottomMenuMobile() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const {
    buttons: { colors },
  } = useTheme();

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  function handleNavigation(path: string) {
    navigate(`${path}`);
  }

  return (
    <Container onClick={toggleMenu}>
      <ImageWrapper className={isMenuOpen ? "isActive" : ""}>
        <img src={BottomMenuIcon} alt={"bottom menu icon"} />
      </ImageWrapper>

      <BottomMenuNavigationWrapper className={isMenuOpen ? "showButtons" : ""}>
        <HomeButtonWrapper onClick={() => handleNavigation("/")}>
          <div>
            <HomeIcon />
          </div>
        </HomeButtonWrapper>

        <PokedexButtonWrapper onClick={() => handleNavigation("/pokedex")}>
          <PokedexIcon />
        </PokedexButtonWrapper>
      </BottomMenuNavigationWrapper>
    </Container>
  );
}

export { BottomMenuMobile };
