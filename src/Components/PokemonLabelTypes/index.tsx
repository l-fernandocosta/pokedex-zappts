import { ReactElement, SVGProps } from "react";
import { ButtonNavigate } from "./styles";

interface Props {
  color: string;
  Icon: (props: SVGProps<SVGElement>) => ReactElement;

  title?: string;
}
function PokemonLabelTypes({ color, Icon, title }: Props) {
  return (
    <ButtonNavigate backgroundColor={color}>
      <Icon className="iconStyled" />
      <span>{title}</span>
    </ButtonNavigate>
  );
}

export { PokemonLabelTypes };
