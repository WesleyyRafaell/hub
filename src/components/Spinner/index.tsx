import * as S from './styles'

export type SpinnerProps = {
  background?: 'dark' | 'light'
}

const Spinner = ({ background }: SpinnerProps) => (
  <S.Container>
    <S.child background={background}></S.child>
  </S.Container>
)

export default Spinner
