import { ReactElement, SVGProps } from "react";
import { useNavigate } from "react-router-dom";
import { ButtonNavigate } from "./styles";

interface Props {
  color: string;
  Icon: (props: SVGProps<SVGElement>) => ReactElement;
  redirectsTo: string;
  title?: string;
}
function ButtonNavigation({ color, Icon, redirectsTo, title }: Props) {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/${redirectsTo}`);
  };

  return (
    <ButtonNavigate backgroundColor={color} onClick={handleNavigate}>
      <Icon className="iconStyled" />
      <span>{title}</span>
    </ButtonNavigate>
  );
}

export { ButtonNavigation };
