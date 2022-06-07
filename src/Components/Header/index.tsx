import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import pokemonLogoImage from "../../assets/pokemon-logo.png";
import { AnchorWrapper, Navigation, PokemonLogo } from "./styles";

function Header() {
  const { pathname } = useLocation();

  const [isHomeCurrentPath, setIsHomeCurrentPath] = useState(false);
  const [isPokedexCurrentPath, setIsPokedexCurrentPath] = useState(false);

  useEffect(() => {
    if (pathname === "/") {
      setIsHomeCurrentPath(true);
    } else if (pathname === "/pokedex") {
      setIsPokedexCurrentPath(true);
    }
  }, [pathname]);

  return (
    <Navigation>
      <PokemonLogo src={pokemonLogoImage} alt="Pokémon logo" />
      <AnchorWrapper>
        <a className={isHomeCurrentPath ? "isActive" : ""} href={"/"}>
          HOME
        </a>
        <a className={isPokedexCurrentPath ? "isActive" : ""} href={"/pokedex"}>
          POKÉDEX
        </a>
      </AnchorWrapper>
    </Navigation>
  );
}

export { Header };
