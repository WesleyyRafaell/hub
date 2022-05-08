import * as S from './styles'
import { PeopleOutline } from '@styled-icons/evaicons-outline/PeopleOutline'
import { Heart } from '@styled-icons/bootstrap/Heart'
import ButtonOutline from 'components/ButtonOutline'
import { signOut } from 'next-auth/react'
import { useContext } from 'react'
import { AuthContext } from 'contexts/authContext'

const Sidebar = () => {
  const { userData } = useContext(AuthContext)

  return (
    <S.Wrapper>
      <S.ContainerAvatar>
        <S.UserAvatar
          src={
            userData?.avatar_url
              ? userData.avatar_url
              : 'https://media.discordapp.net/attachments/855429663677087805/956618494689026078/ikari-shinji-shinji-ikari-23205664-600-450.jpg'
          }
        />
      </S.ContainerAvatar>
      <S.Title>{userData?.login ? userData?.login : 'Sem nome'}</S.Title>
      <S.SubTitle>
        {userData?.location ? userData?.location : 'Sem endereço'}
      </S.SubTitle>
      <S.Text marginTop={30}>
        {userData?.bio ? userData?.bio : 'Sem bio'}
      </S.Text>
      <S.ContainerRow>
        <S.Box>
          <PeopleOutline color="#fff" width={25} />
          <S.Text marginLeft={10}>
            {userData?.followers ? userData?.followers : '-'} followers
          </S.Text>
        </S.Box>
        <S.Box>
          <Heart color="#fff" width={20} />
          <S.Text marginLeft={10}>
            {userData?.following ? userData?.following : '-'} following
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
