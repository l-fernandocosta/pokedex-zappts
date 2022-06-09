import { Stat } from "../../@types/InterfacePokemon";
import { BaseStatsTitle, Container, ProgressBar } from "./styles";

function StatsProgressBar({ base_stat, stat }: Stat) {
  {
    console.log(base_stat);
  }
  return (
    <Container>
      <BaseStatsTitle>{stat.name}</BaseStatsTitle>
      <ProgressBar progressStatus={base_stat} />
    </Container>
  );
}

export { StatsProgressBar };
