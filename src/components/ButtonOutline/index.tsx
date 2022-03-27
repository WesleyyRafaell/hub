import * as S from './styles'

export type ButtonOutlineProps = {
  children?: React.ReactNode
  icon?: React.ReactNode
  size?: 'small' | 'medium' | 'large'
  outline?: boolean
  onClick?: () => void
}

const ButtonOutline = ({
  children,
  outline,
  icon,
  size = 'medium',
  ...props
}: ButtonOutlineProps) => (
  <S.Wrapper {...props}>
    <S.Box size={size} hasIcon={!!icon} outline={outline} data-testid="div">
      {!!icon && icon}
      {!!children && <span>{children}</span>}
    </S.Box>
  </S.Wrapper>
)

export default ButtonOutline
