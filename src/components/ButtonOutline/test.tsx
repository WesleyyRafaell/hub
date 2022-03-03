import { render, screen } from '@testing-library/react'

import ButtonOutline from '.'

describe('<ButtonOutline />', () => {
  it('should render the heading', () => {
    const { container } = render(<ButtonOutline />)

    expect(
      screen.getByRole('heading', { name: /ButtonOutline/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
