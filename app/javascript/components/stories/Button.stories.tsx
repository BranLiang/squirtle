import React from 'react'

import { Story, Meta } from '@storybook/react/'

import Button, { Props } from '../Button'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    disabled: {
      control: { type: 'boolean' }
    },
    round: {
      control: { type: 'boolean' }
    },
    block: {
      control: { type: 'boolean' }
    }
  }
} as Meta

const Template: Story<Props> = (args) => <Button {...args} />

export const Basic = Template.bind({})
Basic.args = {
  children: 'Button',
  size: 'md',
  variant: 'primary',
}
