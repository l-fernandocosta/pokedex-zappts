import loadingImage from "../../assets/loading.png";
import { Container } from "./styles";

function LoadingComponent() {
  return (
    <Container>
      <img src={loadingImage} alt="Pokeball rotating image" />
    </Container>
  );
}

export { LoadingComponent };
