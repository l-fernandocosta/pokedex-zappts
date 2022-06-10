import styled from "styled-components";

interface ButtonProps {
  isDesabilited?: boolean;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const Wrapper = styled.div`
  display: flex;

  align-items: center;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 5rem;
  padding: 2rem 4rem;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 4rem;
  margin-top: 4rem;

  div {
    display: flex;
    gap: 5rem;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.forPhoneOnly}) {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    div {
      align-items: center;
      justify-content: center;
      gap: 1rem;
    }

    select {
      width: 60%;
    }
  }
`;
export const StyledButton = styled.button<ButtonProps>`
  padding: 0.5rem 1rem;
  background: ${(props) =>
    props.isDesabilited
      ? "gray"
      : props.theme.colors.backgrounds.fireContainer};
  color: white;

  cursor: ${(props) => (props.isDesabilited ? "not-allowed" : "pointer")};
  border-radius: ${(props) => props.theme.buttons.borders.default};
`;

export const Select = styled.select`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  width: 50%;
  padding: 0.5rem 1rem;
  color: ${(props) => props.theme.colors.text.blue200};
  border-radius: ${(props) => props.theme.buttons.borders.default};
`;
