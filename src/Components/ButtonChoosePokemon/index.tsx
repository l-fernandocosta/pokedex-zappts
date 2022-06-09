import { useNavigate } from "react-router-dom";
import { StyledButton } from "./styles";

interface Props {
  pokemonName: string;
}

function ButtonChoosePokemon({ pokemonName }: Props) {
  const navigate = useNavigate();

  function handleNavigatePokemonPage() {
    navigate(`/pokedex/${pokemonName}`);
  }
  return (
    <StyledButton onClick={handleNavigatePokemonPage}>
      I CHOOSE YOU!
    </StyledButton>
  );
}

export { ButtonChoosePokemon };
