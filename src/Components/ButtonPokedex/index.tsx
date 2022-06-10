import { useNavigate } from "react-router-dom";
import { StyledButtonPokedex } from "./styles";

function ButtonPokedex() {
  const navigate = useNavigate();
  function handleNavigatePokedex() {
    navigate("/pokedex");
  }
  return (
    <StyledButtonPokedex onClick={handleNavigatePokedex}>
      SEE POKEDEX
    </StyledButtonPokedex>
  );
}

export { ButtonPokedex };
