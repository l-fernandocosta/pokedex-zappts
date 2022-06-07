import { SectionTextField } from "../SectionTextField";
import {
  Aside,
  ButtonDefault,
  Container,
  FireIcon,
  Main,
  StrengthIcon,
  TextContainer,
  WeaknessIcon,
} from "./styles";

function FireTypeSection() {
  return (
    <Container>
      <Main>
        <div />
        <img
          src={
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/4.png"
          }
          alt={"Fire Pokemon"}
        />
      </Main>
      <Aside>
        <TextContainer>
          <SectionTextField Icon={FireIcon} textDescription={"FIRE TYPE"} />
          <SectionTextField
            Icon={StrengthIcon}
            textDescription={" FIRE |  HATE"}
          />
          <SectionTextField
            Icon={WeaknessIcon}
            textDescription={"ROCK | GRASS"}
          />
        </TextContainer>
        <ButtonDefault>I CHOOSE YOU</ButtonDefault>
      </Aside>
    </Container>
  );
}

export { FireTypeSection };
