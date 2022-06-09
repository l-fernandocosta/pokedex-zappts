import axios from "redaxios";
import { PokemonProps } from "../@types/InterfacePokemon";

interface Props {
  id: string;
}

const api = {
  pokemon: async ({ id }: Props) => {
    const result = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const response = await result.data;
    return response as PokemonProps[];
  },
};

export { api };
