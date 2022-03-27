import styled, { css } from 'styled-components'
import { ButtonOutlineProps } from '.'

export const Wrapper = styled.button`
  background: linear-gradient(
    90deg,
    #b100bc 20.45%,
    #ff4a6e 62.38%,
    #ff8151 97.75%
  );
  border: none;
  cursor: pointer;
  padding: 3px;
  border-radius: 11px;
`

const wrapperModifiers = {
  small: () => css`
    width: 255px;
    height: 44px;
    font-size: 17.4px;
  `,
  medium: () => css`
    width: 365px;
    height: 74px;
    font-size: 26.3px;
  `,
  large: () => css`
    width: 445px;
    height: 104px;
    font-size: 31px;
  `,
  hasIcon: () => css`
    justify-content: flex-start;
    padding: 10px;

    & span {
      margin-left: 20px;
    }
  `
}

type BoxProps = {
  hasIcon: boolean
} & Pick<ButtonOutlineProps, 'size' | 'outline'>

export const Box = styled.div<BoxProps>`
  ${({ size, hasIcon, outline }) => css`
    background: ${outline ? '#3a343a' : 'transparent'};
    color: #fff;
    border-radius: 11px;
    display: flex;
    justify-content: center;
    align-items: center;
    ${!!size && wrapperModifiers[size]}
    ${hasIcon && wrapperModifiers.hasIcon}
  `}
`
