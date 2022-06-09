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
  padding: 2rem 10rem;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 2rem;
  margin-top: 4rem;
`;
export const StyledButton = styled.button<ButtonProps>`
  padding: 1rem;
  background: ${(props) =>
    props.isDesabilited
      ? "gray"
      : props.theme.colors.backgrounds.fireContainer};
  color: white;

  cursor: ${(props) => (props.isDesabilited ? "not-allowed" : "pointer")};
  border-radius: ${(props) => props.theme.buttons.borders.default};
`;
