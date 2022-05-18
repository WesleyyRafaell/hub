import RepositoryCard from 'components/RepositoryCard'
import Sidebar from 'components/Sidebar'
import Spinner from 'components/Spinner'
import { AuthContext } from 'contexts/authContext'
import { useContext } from 'react'

import * as S from './styles'

type ArrayProps = {
  id: number
  name: string
  description: string
  html_url: string
}

const Dashboard = () => {
  const { userData } = useContext(AuthContext)
  console.log(`userData`, userData)
  if (!userData) {
    return (
      <S.ContainerLoading>
        <Spinner background="light" />
      </S.ContainerLoading>
    )
  }

  return (
    <S.Wrapper>
      <Sidebar />
      <S.RepositoriesContainer>
        {userData.repos.map(
          ({ id, name, description, html_url }: ArrayProps) => (
            <RepositoryCard
              key={id}
              name={name}
              description={description}
              html_url={html_url}
            />
          )
        )}
      </S.RepositoriesContainer>
    </S.Wrapper>
  )
}

export default Dashboard
