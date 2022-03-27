import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.white};
    height: 100%;
  `}
`

export const ContainerLoading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`
