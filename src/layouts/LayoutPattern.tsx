import { ReactNode } from "react";
import { BottomMenuMobile } from "../Components/BottomMenuMobile";
import { Header } from "../Components/Header";
import { Container } from "./styles";

interface Props {
  children: ReactNode;
}

function LayoutPattern({ children }: Props) {
  return (
    <Container>
      <Header />
      <BottomMenuMobile />
      {children}
    </Container>
  );
}

export { LayoutPattern };
