import styled from "styled-components";

interface ButtonNavigateProps {
  backgroundColor: string;
}

export const ButtonNavigate = styled.button<ButtonNavigateProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 4rem;
  padding: 0 1rem;
  width: 30%;

  color: ${(props) => props.backgroundColor};

  font-weight: bold;
  font-size: 1rem;

  border: 1px solid ${(props) => props.backgroundColor};
  border-radius: ${(props) => props.theme.buttons.borders.default};
  background-color: transparent;

  box-shadow: ${(props) => props.theme.shadows};
  gap: 1rem;

  transition: all 0.4s;
  :hover {
    cursor: pointer;
    background-color: ${(props) => props.backgroundColor};
    color: white;
    transform: ${(props) => props.theme.animate.elevate};
  }

  .iconStyled {
    font-size: 1.5rem;
  }
  //MEDIA QUERIES
  @media (max-width: ${(props) => props.theme.breakpoints.forPhoneOnly}) {
    width: 10%;

    background-color: ${(props) => props.backgroundColor};
    color: white;

    span {
      display: none;
    }
  }
  @media (max-width: ${(props) => props.theme.breakpoints.forTablet}) {
    width: 15%;
    border-radius: ${(props) => props.theme.buttons.borders.rounded};
    padding: 0 0.5rem;
    background-color: ${(props) => props.backgroundColor};
    color: white;
    span {
      display: none;
    }
  }
`;
