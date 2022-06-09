import { useNavigate } from "react-router-dom";
import { Form, Sprite, Type } from "../../@types/InterfacePokemon";
import { Container, PokemonAvatar, TypeContainerInfo } from "./styles";

interface Props {
  id: string;
  pokemonName: Form[];
  pokemonType: Type[];
  pokemonImage: Sprite;
}

function PokemonCard({ id, pokemonName, pokemonType, pokemonImage }: Props) {
  const navigate = useNavigate();

  function handleNavigatePokemonStats() {
    navigate(`/pokedex/${pokemonName[0].name}`);
  }

  return (
    <Container
      pokemonTypeBG={pokemonType[0].type.name}
      onClick={handleNavigatePokemonStats}
    >
      <PokemonAvatar>
        <img
          src={
            pokemonImage.versions["generation-v"]["black-white"].animated
              .front_default
          }
          alt="Animated Pokemon GIF"
        />
      </PokemonAvatar>
      <TypeContainerInfo pokemonTypeBG={pokemonType[0].type.name}>
        <h3>{pokemonName[0].name}</h3>
        <span>#{id}</span>
        <strong>{pokemonType[0].type.name}</strong>
      </TypeContainerInfo>
    </Container>
  );
}

export { PokemonCard };
