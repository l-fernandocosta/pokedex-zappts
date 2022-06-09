import { useQuery } from "react-query";
import { useLocation } from "react-router-dom";
import axios from "redaxios";
import { PokemonProps } from "../../@types/InterfacePokemon";
import { LoadingComponent } from "../../Components/LoadingComponent";
import { StatsProgressBar } from "../../Components/StatsProgressBar";
import { LayoutPattern } from "../../layouts/LayoutPattern";
import {
  AbilitiesContainer,
  Aside,
  AvatarContainer,
  Main,
  MovementsContainer,
  PokemonInfoWrapper,
  PokemonSpecsContent,
  PokemonSpecsHeader,
  PokemonStatsContainer,
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

    return response as PokemonProps;
  }

  const { data, isLoading } = useQuery<PokemonProps>(
    ["pokemonStats", pokemonName],
    fetchPokemonStats
  );

  const resizedArrayOfMoves = data?.moves.splice(0, 30);

  return (
    <LayoutPattern>
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
                  <TextInfo>
                    <h2>HEIGHT</h2>
                    <strong>{data.height}</strong>
                  </TextInfo>
                  <TextInfo>
                    <h2>WEIGHT</h2>
                    <strong>{data.weight}</strong>
                  </TextInfo>
                  <TextInfo>
                    <h2>BASE EXP. </h2>
                    <strong>{data.base_experience}</strong>
                  </TextInfo>
                </PokemonSpecsContent>

                <PokemonStatsContainer>
                  {data.stats.map((stat) => (
                    <>
                      <StatsProgressBar
                        base_stat={stat.base_stat}
                        stat={stat.stat}
                      />
                    </>
                  ))}
                </PokemonStatsContainer>
              </Main>

              <Aside>
                <MovementsContainer pokemonTypeBG={data.types[0].type.name}>
                  <h1>MOVES</h1>
                  <div>
                    {resizedArrayOfMoves?.map((move) => (
                      <span>{move.move.name}</span>
                    ))}
                  </div>
                </MovementsContainer>
                <AbilitiesContainer pokemonTypeBG={data.types[0].type.name}>
                  <h1>ABILITIES</h1>
                  <div>
                    {data.abilities.map((ability) => (
                      <span>{ability.ability.name}</span>
                    ))}
                  </div>
                </AbilitiesContainer>
              </Aside>
            </>
          )}
        </PokemonStatsContent>
      )}
    </LayoutPattern>
  );
}

export { PokemonStats };
