import styled from "styled-components";

export const StyledButtonPokedex = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  border: 1px solid ${(props) => props.theme.colors.text.red100};
  background-color: transparent;
  color: ${(props) => props.theme.colors.text.red100};
  font-weight: bold;
  width: 50%;
  height: 4rem;

  transition: all 0.4s;
  :hover {
    cursor: pointer;
    background-color: ${(props) =>
      props.theme.colors.backgrounds.fireContainer};
    color: white;

    border: transparent;

    transform: ${(props) => props.theme.animate.elevate};
  }

  @media (max-width: ${(props) => props.theme.breakpoints.forPhoneOnly}) {
    margin-top: 2rem;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.forTablet}) {
    width: 100%;
  }
`;
