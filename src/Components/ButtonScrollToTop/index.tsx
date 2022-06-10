import { useEffect, useState } from "react";
import { BiUpArrowAlt } from "react-icons/bi";
import { Button } from "./styles";

function ButtonScrollToTop() {
  const [backToTopButton, setBackToTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        setBackToTopButton(true);
      } else {
        setBackToTopButton(false);
      }
    });
  }, []);

  function scrollTopFunction() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  return (
    <div>
      {backToTopButton && (
        <Button onClick={scrollTopFunction}>
          <BiUpArrowAlt fontSize={20} />
        </Button>
      )}
    </div>
  );
}

export { ButtonScrollToTop };
