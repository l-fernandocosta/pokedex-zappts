import styled, { keyframes } from "styled-components";

const loadingAnimation = keyframes`
 0% {
   transform: rotate(0deg);
 }

 100% {
   transform: rotate(359deg)
 }
`;

export const Container = styled.div`
  display: flex;
  position: absolute;
  top: 40%;
  left: 45%;
  width: 100%;
  height: 100%;
  img {
    animation: 2s infinite ${loadingAnimation};
    width: 15rem;
    height: 15rem;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.forPhoneOnly}) {
    img {
      width: 5rem;
      height: 5rem;
    }
  }
  @media (max-width: ${(props) => props.theme.breakpoints.forTablet}) {
    img {
      width: 10rem;
      height: 10rem;
    }
  }
`;
