import styled, { css } from 'styled-components'

type TextProps = {
  marginTop?: number
  marginLeft?: number
}

export const Wrapper = styled.main`
  ${({ theme }) => css`
    background: ${theme.colors.Black};
    width: 30%;
    height: 100%;
    padding: 30px 20px;
  `}
`
export const ContainerAvatar = styled.div`
  display: flex;
  justify-content: center;
`

export const UserAvatar = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 50%;
`
export const Title = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.white};
  `}
  margin-top: 30px;
  font-size: 28.5px;
`
export const SubTitle = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.white};
  `}
  margin-top: 7.1px;
  font-size: 12.5px;
`
export const Text = styled.p<TextProps>`
  ${({ marginTop, marginLeft }) => css`
    margin-top: ${marginTop ? `${marginTop}px` : '0'};
    margin-left: ${marginLeft ? `${marginLeft}px` : '0'};
  `}
  color: #e1e1e1;
  font-size: 12.4px;
`
export const ContainerRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`
export const Box = styled.div`
  display: flex;
  align-items: center;
`

export const ContainerCenter = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`
