import * as S from './styles'
import Link from 'next/link'

type RepositoryCardProps = {
  name: string
  description: string
  html_url: string
}

const RepositoryCard = ({
  name,
  description,
  html_url
}: RepositoryCardProps) => (
  <Link href={html_url} passHref={true}>
    <S.Wrapper>
      <S.Title>{name}</S.Title>
      <S.SubTitle>
        {description
          ? description
          : 'Nenhuma descrição disponível para esse repositório'}
      </S.SubTitle>
    </S.Wrapper>
  </Link>
)

export default RepositoryCard
