import * as S from './styles'
import { PeopleOutline } from '@styled-icons/evaicons-outline/PeopleOutline'
import { Heart } from '@styled-icons/bootstrap/Heart'
import { Star } from '@styled-icons/bootstrap/Star'
import ButtonOutline from 'components/ButtonOutline'
import { signOut } from 'next-auth/react'
import { useContext } from 'react'
import { AuthContext } from 'contexts/authContext'

const Sidebar = () => {
  const { user } = useContext(AuthContext)

  if (!user) return <p></p>

  return (
    <S.Wrapper>
      <S.ContainerAvatar>
        <S.UserAvatar
          src={
            user.image
              ? user.image
              : 'https://media.discordapp.net/attachments/855429663677087805/956618494689026078/ikari-shinji-shinji-ikari-23205664-600-450.jpg'
          }
        />
      </S.ContainerAvatar>
      <S.Title>{user.name}</S.Title>
      <S.SubTitle>{user.email}</S.SubTitle>
      <S.Text marginTop={30}>
        has been the industrys standard dummy text ever since the 1500s, when an
        unknown printer took a galley of type and scrambled it to make a type
      </S.Text>
      <S.ContainerRow>
        <S.Box>
          <PeopleOutline color="#fff" width={25} />
          <S.Text marginLeft={10}>200 followers</S.Text>
        </S.Box>
        <S.Box>
          <Heart color="#fff" width={20} />
          <S.Text marginLeft={10}>200 fllowing</S.Text>
        </S.Box>
        <S.Box>
          <Star color="#fff" width={20} />
          <S.Text marginLeft={10}>200 stars</S.Text>
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
