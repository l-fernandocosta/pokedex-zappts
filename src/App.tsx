import { BottomMenuNavButton } from "./Components/BottomMenuMobile";
import { EletricTypeSection } from "./Components/EletricTypeSection";
import { FireTypeSection } from "./Components/FireTypeSection";
import { Header } from "./Components/Header";
import { SectionHome } from "./Components/SectionHome";
import { WaterTypeSection } from "./Components/WaterTypeSection";
import { Container } from "./index.styles";

function App() {
  return (
    <Container>
      <Header />
      <BottomMenuNavButton />
      <SectionHome />
      <WaterTypeSection />
      <FireTypeSection />
      <EletricTypeSection />
    </Container>
  );
}

export default App;
