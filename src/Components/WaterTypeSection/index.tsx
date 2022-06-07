import { SectionTextField } from "../SectionTextField";
import {
  Aside,
  ButtonDefault,
  Container,
  Main,
  StrengthIcon,
  TextContainer,
  WaterDropIcon,
  WeaknessIcon,
} from "./styles";

function WaterTypeSection() {
  return (
    <Container>
      <Main>
        <div></div>
        <img
          src={
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/8.png"
          }
          alt={"Water Pokemon"}
        />
      </Main>
      <Aside>
        <TextContainer>
          <SectionTextField
            Icon={WaterDropIcon}
            textDescription={"WATER TYPE"}
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

export { WaterTypeSection };
