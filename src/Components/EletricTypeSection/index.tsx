import { SectionTextField } from "../SectionTextField";
import {
  Aside,
  ButtonDefault,
  Container,
  EletricIcon,
  Main,
  StrengthIcon,
  TextContainer,
  WeaknessIcon,
} from "./styles";

function EletricTypeSection() {
  return (
    <Container>
      <Main>
        <div />
        <img
          src={
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/80.png"
          }
          alt={"Fire Pokemon"}
        />
      </Main>
      <Aside>
        <TextContainer>
          <SectionTextField
            Icon={EletricIcon}
            textDescription={"ELETRIC TYPE"}
          />
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

export { EletricTypeSection };
