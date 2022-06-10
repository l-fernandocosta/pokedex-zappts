import { ReactNode } from "react";
import { BottomMenuMobile } from "../Components/BottomMenuMobile";
import { ButtonScrollToTop } from "../Components/ButtonScrollToTop";
import { Header } from "../Components/Header";
import { Container } from "./styles";

interface Props {
  children: ReactNode;
}

function LayoutPattern({ children }: Props) {
  return (
    <Container>
      <ButtonScrollToTop />
      <Header />
      <BottomMenuMobile />
      {children}
    </Container>
  );
}

export { LayoutPattern };
