import { EletricTypeSection } from "../../Components/EletricTypeSection";
import { FireTypeSection } from "../../Components/FireTypeSection";
import { SectionHome } from "../../Components/SectionHome";
import { WaterTypeSection } from "../../Components/WaterTypeSection";
import { LayoutPattern } from "../../layouts/LayoutPattern";

function Home() {
  return (
    <LayoutPattern>
      <>
        <SectionHome />
        <WaterTypeSection />
        <FireTypeSection />
        <EletricTypeSection />
      </>
    </LayoutPattern>
  );
}

export { Home };
