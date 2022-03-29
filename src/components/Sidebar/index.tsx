import * as S from './styles'
import { PeopleOutline } from '@styled-icons/evaicons-outline/PeopleOutline'
import { Heart } from '@styled-icons/bootstrap/Heart'
import ButtonOutline from 'components/ButtonOutline'
import { signOut } from 'next-auth/react'

type User = {
  user: {
    login?: string | null
    avatar_url?: string | null
    location?: string | null
    bio?: string | null
    followers?: number | null
    following?: number | null
  }
}

const Sidebar = ({ user }: User) => {
  return (
    <S.Wrapper>
      <S.ContainerAvatar>
        <S.UserAvatar
          src={
            user.avatar_url
              ? user.avatar_url
              : 'https://media.discordapp.net/attachments/855429663677087805/956618494689026078/ikari-shinji-shinji-ikari-23205664-600-450.jpg'
          }
        />
      </S.ContainerAvatar>
      <S.Title>{user.login ? user.login : 'Sem nome'}</S.Title>
      <S.SubTitle>{user.location ? user.location : 'Sem endereço'}</S.SubTitle>
      <S.Text marginTop={30}>{user.bio ? user.bio : 'Sem bio'}</S.Text>
      <S.ContainerRow>
        <S.Box>
          <PeopleOutline color="#fff" width={25} />
          <S.Text marginLeft={10}>
            {user.followers ? user.followers : '-'} followers
          </S.Text>
        </S.Box>
        <S.Box>
          <Heart color="#fff" width={20} />
          <S.Text marginLeft={10}>
            {user.following ? user.following : '-'} following
          </S.Text>
        </S.Box>
      </S.ContainerRow>
      <S.ContainerCenter>
        <ButtonOutline size="small" onClick={() => signOut()}>
          signOut
        </ButtonOutline>
      </S.ContainerCenter>
    </S.Wrapper>
  )
}

export default Sidebar
