import { Github } from '@styled-icons/boxicons-logos/Github'
import { signIn } from 'next-auth/react'

import Background from 'components/Background'
import ButtonOutline from 'components/ButtonOutline'
import * as S from './styles'

const Login = () => {
  return (
    <S.Wrapper>
      <Background />

      <S.Title>Login to You Account</S.Title>
      <ButtonOutline
        icon={<Github size={30} />}
        size="medium"
        outline
        onClick={() => signIn('github')}
      >
        Sign In with Github
      </ButtonOutline>
    </S.Wrapper>
  )
}

export default Login
