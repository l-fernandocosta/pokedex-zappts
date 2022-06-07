import { useTheme } from "styled-components";
import { ashImage } from "../../styles/Icons/homeSectionIcons";
import { ButtonNavigation } from "../ButtonNavigation";
import {
  Aside,
  ButtonPokedex,
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
    pokemonColorTypes: { fire, eletric, water },
  } = useTheme();
  return (
    <Container>
      <Main>
        <TextWrapper>
          <h1>YOUR JOURNEY AS A TRAINER</h1>
          <strong>STARTS NOW!</strong>
        </TextWrapper>

        <NavigationButtonsWrapper>
          <ButtonNavigation
            redirectsTo={"/"}
            color={fire}
            Icon={FireTypeIcon}
            title={"FIRE"}
          />

          <ButtonNavigation
            redirectsTo={"/"}
            color={eletric}
            Icon={EletricTypeIcon}
            title={"ELETRIC"}
          />

          <ButtonNavigation
            redirectsTo={"/"}
            color={water}
            Icon={WaterTypeIcon}
            title={"WATER"}
          />
        </NavigationButtonsWrapper>

        <ButtonPokedex>SEE POKEDEX</ButtonPokedex>
      </Main>
      <Aside>
        <img src={ashImage} alt="" />
        <PokeballIcon />
      </Aside>
    </Container>
  );
}

export { SectionHome };
