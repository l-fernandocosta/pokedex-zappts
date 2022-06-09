import { useQuery } from "react-query";
import { useLocation } from "react-router-dom";
import axios from "redaxios";
import { PokemonProps } from "../../@types/InterfacePokemon";
import { Header } from "../../Components/Header";
import { LoadingComponent } from "../../Components/LoadingComponent";
import {
  Aside,
  AvatarContainer,
  Container,
  Main,
  PokemonInfoWrapper,
  PokemonSpecsContent,
  PokemonSpecsHeader,
  PokemonStatsContent,
  TextInfo,
} from "./styles";

function PokemonStats() {
  const { pathname } = useLocation();
  const pokemonName = pathname.split("/")[2];

  async function fetchPokemonStats() {
    const result = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    );
    const response = result.data;
    console.log(response);

    return response as PokemonProps;
  }

  const { data, isLoading } = useQuery<PokemonProps>(
    ["pokemonStats", pokemonName],
    fetchPokemonStats
  );

  return (
    <Container>
      <Header />
      {isLoading ? (
        <LoadingComponent />
      ) : (
        <PokemonStatsContent>
          {data && (
            <>
              <Main>
                <PokemonSpecsHeader>
                  <AvatarContainer pokemonTypeBG={data.types[0].type.name}>
                    <img
                      src={
                        data?.sprites.versions["generation-iv"]["diamond-pearl"]
                          .front_default
                      }
                      alt="Pokemon Imagem "
                    />
                  </AvatarContainer>
                  <PokemonInfoWrapper pokemonTypeBG={data.types[0].type.name}>
                    <h1>{data.forms[0].name}</h1>
                    <span>#{data.id}</span>
                    <strong>{data.types[0].type.name}</strong>
                  </PokemonInfoWrapper>
                </PokemonSpecsHeader>

                <PokemonSpecsContent>
                  <div>
                    <TextInfo>
                      <h2>HEIGHT</h2>
                      <strong>{data.height}</strong>
                    </TextInfo>
                    <TextInfo>
                      <h2>WEIGHT</h2>
                      <strong>{data.weight}</strong>
                    </TextInfo>
                  </div>
                </PokemonSpecsContent>
              </Main>
              <Aside></Aside>
            </>
          )}
        </PokemonStatsContent>
      )}
    </Container>
  );
}

export { PokemonStats };
