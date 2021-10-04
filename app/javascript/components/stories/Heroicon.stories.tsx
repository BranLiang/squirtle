import React from 'react'

import { Story, Meta } from '@storybook/react/'

import Heroicon, { Props } from '../Heroicon'

export default {
  title: 'Heroicon',
  component: Heroicon,
} as Meta

const Template: Story<Props> = (args) => <Heroicon {...args} />

export const Outline: Story<Props>  = Template.bind({})
Outline.args = {
  icon: "HeartIcon",
  variant: "outline",
  className: "h-6 w-6 text-red-500",
}

export const Solid: Story<Props>  = Template.bind({})
Solid.args = {
  icon: "HeartIcon",
  variant: "solid",
  className: "h-6 w-6 text-red-500",
}
