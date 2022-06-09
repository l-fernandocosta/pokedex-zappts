import { useEffect, useState } from "react";
import axios from "redaxios";
import { ResultsInterface, ResultsProps } from "../@types/InterfacePokemon";

function usePokemons(url: string) {
  const [pokemonList, setPokemonList] = useState<ResultsInterface[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [nextPage, setNextPage] = useState(url);
  const [previousPage, setPreviousPage] = useState<string | undefined>();

  async function getAllPokemons() {
    setIsLoading(true);
    const response = await axios.get(url);
    const result: ResultsProps = response.data;

    if (result.results) {
      setPokemonList(result.results);
      setNextPage(result.next);
      setPreviousPage(result.previous);
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getAllPokemons();
  }, [url]);

  return { pokemonList, nextPage, previousPage, isLoading };
}

export { usePokemons };
