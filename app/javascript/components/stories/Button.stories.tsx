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

export const Primary: Story<Props> = Template.bind({})
Primary.args = {
  children: 'Button',
  size: 'md',
  variant: 'primary',
}

export const Secondary: Story<Props> = Template.bind({})
Secondary.args = {
  children: 'Button',
  size: 'md',
  variant: 'secondary',
}

export const White: Story<Props> = Template.bind({})
White.args = {
  children: 'Button',
  size: 'md',
  variant: 'white',
}

export const Round: Story<Props> = Template.bind({})
Round.args = {
  children: 'Button',
  size: 'md',
  variant: 'primary',
  round: true,
}

export const Disabled: Story<Props> = Template.bind({})
Disabled.args = {
  children: 'Button',
  size: 'md',
  variant: 'primary',
  disabled: true,
}

export const Block: Story<Props> = Template.bind({})
Block.args = {
  children: 'Button',
  size: 'md',
  variant: 'primary',
  block: true,
}

export const Icon: Story<Props> = Template.bind({})
Icon.args = {
  children: 'Button',
  size: 'md',
  variant: 'primary',
  icon: 'HeartIcon',
}
