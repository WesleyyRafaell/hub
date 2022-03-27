import Sidebar from 'components/Sidebar'
import Spinner from 'components/Spinner'
import { AuthContext } from 'contexts/authContext'
import { useContext } from 'react'
import * as S from './styles'

const Dashboard = () => {
  const { user } = useContext(AuthContext)

  if (!user) {
    return (
      <S.ContainerLoading>
        <Spinner background="light" />
      </S.ContainerLoading>
    )
  }

  return (
    <S.Wrapper>
      <Sidebar user={user} />
    </S.Wrapper>
  )
}

export default Dashboard
