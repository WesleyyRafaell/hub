import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.white};
    height: 100%;
    display: flex;
  `}
`

export const ContainerLoading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`

export const RepositoriesContainer = styled.div`
  flex: 1;
  flex-direction: column;
  padding: 20px;
  background: #3a343a70;
  overflow: scroll;
  overflow-x: hidden;
`
