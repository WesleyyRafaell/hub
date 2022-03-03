import { Story, Meta } from '@storybook/react'
import { Github } from '@styled-icons/boxicons-logos/Github'
import ButtonOutline from '.'

export default {
  title: 'ButtonOutline',
  component: ButtonOutline,
  argTypes: {
    children: {
      type: 'string'
    }
  }
} as Meta

export const Default: Story = (args) => <ButtonOutline {...args} />

Default.args = {
  children: 'Sign In with Github ',
  icon: <Github size={30} />
}
