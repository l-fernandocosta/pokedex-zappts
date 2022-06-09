import styled from "styled-components";

interface ProgressBarProps {
  progressStatus: number;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 2rem;
`;
export const BaseStatsTitle = styled.strong`
  color: ${(props) => props.theme.colors.text.blue200};
  text-transform: uppercase;
`;
export const ProgressBar = styled.div<ProgressBarProps>`
  transition: all 0.4s;
  display: flex;
  flex-direction: row;
  width: ${(props) => props.progressStatus}%;
  height: 5px;
  background-color: ${(props) => props.theme.colors.text.red100};
`;
