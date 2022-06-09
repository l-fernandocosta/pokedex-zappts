import { useTheme } from "styled-components";
import { ashImage } from "../../styles/Icons/homeSectionIcons";
import { ButtonPokedex } from "../ButtonPokedex";
import { PokemonLabelTypes } from "../PokemonLabelTypes";
import {
  Aside,
  Container,
  EletricTypeIcon,
  FireTypeIcon,
  Main,
  NavigationButtonsWrapper,
  PokeballIcon,
  TextWrapper,
  WaterTypeIcon,
} from "./styles";

function SectionHome() {
  const {
    pokemonColorTypes: { fire, electric, water },
  } = useTheme();
  return (
    <Container>
      <Main>
        <TextWrapper>
          <h1>YOUR JOURNEY AS A TRAINER</h1>
          <strong>STARTS NOW!</strong>
        </TextWrapper>

        <NavigationButtonsWrapper>
          <PokemonLabelTypes color={fire} Icon={FireTypeIcon} title={"FIRE"} />

          <PokemonLabelTypes
            color={electric}
            Icon={EletricTypeIcon}
            title={"ELETRIC"}
          />

          <PokemonLabelTypes
            color={water}
            Icon={WaterTypeIcon}
            title={"WATER"}
          />
        </NavigationButtonsWrapper>
        <ButtonPokedex />
      </Main>
      <Aside>
        <img src={ashImage} alt="" />
        <PokeballIcon />
      </Aside>
    </Container>
  );
}

export { SectionHome };
