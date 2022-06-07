import styled from "styled-components";

export const Navigation = styled.nav`
  display: flex;
  width: 100%;
  position: sticky;
  align-items: center;
  justify-content: space-between;
  z-index: 9999;
  padding: 0 4rem;
  top: 0;

  height: 5rem;
  box-shadow: ${(props) => props.theme.shadows};
  background-color: white;
  @media (max-width: ${(props) => props.theme.breakpoints.forPhoneOnly}) {
    display: none;
  }
`;

export const AnchorWrapper = styled.div`
  display: flex;
  flex-direction: row;

  gap: 2rem;

  a {
    cursor: pointer;
    position: relative;

    transition: all 0.2s;

    &.isActive {
      color: ${(props) => props.theme.colors.text.red100};
    }
    :hover {
      color: ${(props) => props.theme.colors.text.red100};
    }
    &.isActive {
      ::after {
        position: absolute;
        content: "";

        bottom: -1.7rem;
        left: 0;
        height: 4px;
        width: 100%;
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
        background-color: ${(props) => props.theme.colors.text.red100};
      }
    }
  }
`;

export const PokemonLogo = styled.img``;
