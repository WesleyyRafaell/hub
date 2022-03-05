import * as S from './styles'

export type ButtonOutlineProps = {
  children?: React.ReactNode
  icon?: React.ReactNode
  size?: 'small' | 'medium' | 'large'
  onClick?: () => (event: React.MouseEvent<HTMLButtonElement>) => void
}

const ButtonOutline = ({
  children,
  icon,
  size = 'medium',
  ...props
}: ButtonOutlineProps) => (
  <S.Wrapper {...props}>
    <S.Box size={size} hasIcon={!!icon} data-testid="div">
      {!!icon && icon}
      {!!children && <span>{children}</span>}
    </S.Box>
  </S.Wrapper>
)

export default ButtonOutline
