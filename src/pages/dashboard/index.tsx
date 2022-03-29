import Sidebar from 'components/Sidebar'
import Spinner from 'components/Spinner'
import { AuthContext } from 'contexts/authContext'
import { useContext, useEffect, useState } from 'react'
import { getUserData } from 'services/getUser'
import * as S from './styles'

type Userdata = {
  login: string
  avatar_url: string
  location: string
  bio: string
  followers: number
  following: number
}

const Dashboard = () => {
  const [userData, setUserData] = useState<Userdata>()
  const { user } = useContext(AuthContext)

  useEffect(() => {
    ;(async () => {
      if (!user?.name) return

      const result = await getUserData(user.name)
      if (result?.data) {
        const { login, avatar_url, location, bio, followers, following } =
          result.data

        const data = {
          login,
          avatar_url,
          location,
          bio,
          followers,
          following
        }

        setUserData(data)
      }
    })()
  }, [user])

  if (!userData) {
    return (
      <S.ContainerLoading>
        <Spinner background="light" />
      </S.ContainerLoading>
    )
  }

  return (
    <S.Wrapper>
      <Sidebar user={userData} />
    </S.Wrapper>
  )
}

export default Dashboard
