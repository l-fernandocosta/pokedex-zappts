import styled from "styled-components";

export const StyledButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  width: 70%;
  height: 5rem;

  border: 2px solid white;
  margin-top: 2rem;

  background-color: transparent;
  font-size: 1.5rem;
  color: white;
  font-weight: bold;

  transition: all 0.2s;
  :hover {
    cursor: pointer;
    filter: brightness(0.3);
  }

  //Media queries

  @media (max-width: ${(props) => props.theme.breakpoints.forTablet}) {
  }
  @media (max-width: ${(props) => props.theme.breakpoints.forPhoneOnly}) {
    height: 3rem;
  }
`;
