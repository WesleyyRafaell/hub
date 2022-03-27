import styled, { keyframes } from 'styled-components'
import { SpinnerProps } from '.'

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  background: linear-gradient(
    90deg,
    #b100bc 20.45%,
    #ff4a6e 62.38%,
    #ff8151 97.75%
  );
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: ${spin} 1s linear infinite;
`
export const child = styled.div<SpinnerProps>`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${({ background }) =>
    background === 'dark' ? '#3a343a' : '#fff'};
`
