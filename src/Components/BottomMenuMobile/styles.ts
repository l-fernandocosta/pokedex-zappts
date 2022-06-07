import styled from "styled-components";
export const Container = styled.div`
  display: none;
  @media (max-width: ${(props) => props.theme.breakpoints.forPhoneOnly}) {
    display: flex;

    position: fixed;
    bottom: 0;
    right: 1rem;
  }
`;

export const ImageWrapper = styled.div`
  transition: all 0.4s;
  img {
    max-width: 3rem;
    max-height: 3rem;
  }
  &.isActive {
    position: relative;
    transform: rotate(45deg);
  }
`;

export const BottomMenuNavigationWrapper = styled.div`
  display: none;

  &.showButtons {
    display: flex;
    position: relative;
    right: 1rem;
  }
`;

export const HomeButtonWrapper = styled.div`
  transition: all 0.4s;
  position: absolute;
  top: -4rem;
`;
export const PokedexButtonWrapper = styled.div`
  position: absolute;
  left: -4rem;
  bottom: 0.5rem;
`;
