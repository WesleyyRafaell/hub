import { render, screen } from '@testing-library/react'

import RepositoryCard from '.'

describe('<RepositoryCard />', () => {
  it('should render the heading', () => {
    const { container } = render(<RepositoryCard />)

    expect(
      screen.getByRole('heading', { name: /RepositoryCard/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
