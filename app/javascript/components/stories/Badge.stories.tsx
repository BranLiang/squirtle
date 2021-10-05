import React from 'react'

import { Story, Meta } from '@storybook/react/'

import Badge, { Props } from '../Badge'

export default {
  title: 'Badge',
  component: Badge,
  argTypes: {
    removable: {
      control: { type: 'boolean' }
    },
    rounded: {
      control: { type: 'boolean' }
    },
    dot: {
      control: { type: 'boolean' }
    }
  }
} as Meta

const Template: Story<Props> = (args) => <Badge {...args} />

export const Neutral: Story<Props> = Template.bind({})
Neutral.args = {
  children: 'Badge',
  size: 'sm',
  variant: 'neutral',
}

export const Primary: Story<Props> = Template.bind({})
Primary.args = {
  children: 'Badge',
  size: 'sm',
  variant: 'primary',
}

export const Large: Story<Props> = Template.bind({})
Large.args = {
  children: 'Badge',
  size: 'lg',
  variant: 'success',
}

export const Dot: Story<Props> = Template.bind({})
Dot.args = {
  children: 'Badge',
  size: 'lg',
  dot: true,
  variant: 'danger',
}

export const Rounded: Story<Props> = Template.bind({})
Rounded.args = {
  children: 'Badge',
  size: 'lg',
  rounded: true,
  variant: 'warning',
}

export const Removable: Story<Props> = Template.bind({})
Removable.args = {
  children: 'Badge',
  size: 'lg',
  removable: true,
  variant: 'primary',
}
