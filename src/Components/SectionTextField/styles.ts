import styled from "styled-components";

export const TextField = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: ${(props) => props.theme.shadows};
  gap: 1rem;
  width: 70%;
  background-color: white;
  font-size: 1rem;
  padding: 1rem 2rem;

  border-radius: ${(props) => props.theme.buttons.borders.default};
  //Media queries

  @media (max-width: ${(props) => props.theme.breakpoints.forTablet}) {
  }
  @media (max-width: ${(props) => props.theme.breakpoints.forPhoneOnly}) {
    font-size: 1rem;
    padding: 0.5rem 1rem;
  }
`;
