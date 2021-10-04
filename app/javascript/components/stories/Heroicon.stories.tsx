import React from 'react'

import { Story, Meta } from '@storybook/react/'

import Heroicon, { Props } from '../Heroicon'

export default {
  title: 'Heroicon',
  component: Heroicon,
} as Meta

const Template: Story<Props> = (args) => <Heroicon {...args} />

export const Heart: Story<Props>  = Template.bind({})
Heart.args = {
  icon: "HeartIcon",
  variant: "outline",
  className: "h-6 w-6 text-red-500",
}
