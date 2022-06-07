import { ReactElement, SVGProps } from "react";

declare module "*.svg?component" {
  const content: (props: SVGProps<SVGSVGElement>) => ReactElement;
  export default content;
}
