import { ReactElement, SVGProps } from "react";
import { TextField } from "./styles";

interface Props {
  textDescription: string;
  Icon: (props: SVGProps<SVGElement>) => ReactElement;
}

function SectionTextField({ textDescription, Icon }: Props) {
  return (
    <TextField>
      <Icon />
      <span>{textDescription}</span>
    </TextField>
  );
}

export { SectionTextField };
