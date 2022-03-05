import styled, { css } from 'styled-components'

export const Wrapper = styled.div``

export const Title = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.Coral};
  `}
`
