import { ButtonChoosePokemon } from "../ButtonChoosePokemon";
import { SectionTextField } from "../SectionTextField";
import {
  Aside,
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
        <div />
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
            textDescription={" GROUND |  ROCK"}
          />
          <SectionTextField
            Icon={WeaknessIcon}
            textDescription={"ELECTRIC | GRASS"}
          />
          <ButtonChoosePokemon pokemonName="wartortle" />
        </TextContainer>
      </Aside>
    </Container>
  );
}

export { WaterTypeSection };
