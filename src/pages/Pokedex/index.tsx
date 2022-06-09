import { useEffect, useState } from "react";
import axios from "redaxios";
import { PokemonProps } from "../../@types/InterfacePokemon";
import { LoadingComponent } from "../../Components/LoadingComponent";
import { PokemonCard } from "../../Components/PokemonCard";
import { usePokemons } from "../../hooks/usePokemons";
import { LayoutPattern } from "../../layouts/LayoutPattern";
import { ButtonWrapper, StyledButton, Wrapper } from "./styles";

function Pokedex() {
  const [pageURL, setPageURL] = useState("https://pokeapi.co/api/v2/pokemon/");
  const [isLoading, setIsLoading] = useState(true);
  const [defaultURL, setDefaultURL] = useState(
    "https://pokeapi.co/api/v2/pokemon/"
  );

  const { pokemonList, nextPage, previousPage } = usePokemons(defaultURL);
  const [pokemonsSpecs, setPokemonsSpecs] = useState<PokemonProps[]>([]);

  async function fetchPokemonSpec(name: string) {
    const response = await axios.get(pageURL + name);
    const result: PokemonProps = response.data;

    return result;
  }

  async function getAllPokemonSpec() {
    setIsLoading(true);
    if (pokemonList) {
      Promise.all(pokemonList.map(({ name }) => fetchPokemonSpec(name))).then(
        (data: PokemonProps[]) => {
          setIsLoading(false);
          setPokemonsSpecs(data);
          return data;
        }
      );
    }
  }

  function handleGetNextPage() {
    setDefaultURL(nextPage);
  }

  function handleGetPreviousPage() {
    if (previousPage) {
      setDefaultURL(previousPage);
    }
  }

  useEffect(() => {
    getAllPokemonSpec();
  }, [pokemonList]);

  return (
    <LayoutPattern>
      {isLoading ? (
        <LoadingComponent />
      ) : (
        <>
          <ButtonWrapper>
            <StyledButton
              isDesabilited={!previousPage}
              disabled={!previousPage}
              onClick={handleGetPreviousPage}
            >
              PREVIOUS PAGE
            </StyledButton>
            <StyledButton onClick={handleGetNextPage}>NEXT PAGE</StyledButton>
          </ButtonWrapper>
          <Wrapper>
            {pokemonsSpecs.map((pokemon) => (
              <>
                <PokemonCard
                  id={pokemon.id}
                  pokemonImage={pokemon.sprites}
                  pokemonName={pokemon.forms}
                  pokemonType={pokemon.types}
                />
              </>
            ))}
          </Wrapper>
        </>
      )}
    </LayoutPattern>
  );
}

export { Pokedex };
