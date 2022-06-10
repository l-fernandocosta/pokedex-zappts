import { ButtonChoosePokemon } from "../ButtonChoosePokemon";
import { SectionTextField } from "../SectionTextField";
import {
  Aside,
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
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/25.png"
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
            textDescription={" FLYING |  WATER"}
          />
          <SectionTextField
            Icon={WeaknessIcon}
            textDescription={"GRASS | GROUND"}
          />
        </TextContainer>
        <ButtonChoosePokemon pokemonName="pikachu" />
      </Aside>
    </Container>
  );
}

export { EletricTypeSection };
