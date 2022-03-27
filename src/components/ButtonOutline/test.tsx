import { render, screen } from '@testing-library/react'
import { Github } from '@styled-icons/boxicons-logos/Github'

import ButtonOutline from '.'

describe('<ButtonOutline />', () => {
  it('should render the medium size by default', () => {
    render(<ButtonOutline>Sign In with Github</ButtonOutline>)

    expect(
      screen.getByRole('button', { name: /Sign In with Github/i })
    ).toBeInTheDocument()

    expect(screen.getByTestId('div')).toHaveStyle({
      width: '365px',
      height: '74px'
    })
  })

  it('should render the small size', () => {
    render(<ButtonOutline size="small">Sign In with Github</ButtonOutline>)

    expect(screen.getByTestId('div')).toHaveStyle({
      width: '255px',
      height: '44px'
    })
  })

  it('should render the large size', () => {
    render(<ButtonOutline size="large">Sign In with Github</ButtonOutline>)

    expect(screen.getByTestId('div')).toHaveStyle({
      width: '445px',
      height: '104px'
    })
  })

  it('should render with icon', () => {
    render(
      <ButtonOutline icon={<Github data-testid="icon" />}>
        Sign In with Github
      </ButtonOutline>
    )

    expect(
      screen.getByRole('button', { name: /Sign In with Github/i })
    ).toBeInTheDocument()
    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })

  it('should render button outline', () => {
    render(<ButtonOutline outline>Sign In with Github</ButtonOutline>)

    expect(screen.getByTestId('div')).toHaveStyle({
      background: '#3a343a'
    })
  })
})
