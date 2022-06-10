import { Navigate } from "react-router-dom";
import { StyledButtonPokedex } from "./styles";

function ButtonPokedex() {
  function handleNavigatePokedex() {
    Navigate({ to: "/pokedex" });
  }
  return (
    <StyledButtonPokedex onClick={handleNavigatePokedex}>
      SEE POKEDEX
    </StyledButtonPokedex>
  );
}

export { ButtonPokedex };
