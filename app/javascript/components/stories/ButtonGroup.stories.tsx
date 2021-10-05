import React from 'react'

import { Story, Meta } from '@storybook/react/'

import { ButtonGroup, ButtonGroupProps, BasicButton, BasicButtonProps, IconButton, StatsButton, CheckboxButton } from '../ButtonGroup'

export default {
  title: 'ButtonGroup',
  component: ButtonGroup
} as Meta

export const Basic: Story<BasicButtonProps> = (args) => (
  <ButtonGroup>
    <BasicButton {...args}>Year</BasicButton>
    <BasicButton>Month</BasicButton>
    <BasicButton icon="CalendarIcon">Day</BasicButton>
  </ButtonGroup>
)


export const IconOnly: Story<ButtonGroupProps> = (args) => (
  <ButtonGroup {...args}>
    <IconButton icon="HeartIcon" variant="solid" />
    <IconButton icon="ArrowDownIcon" />
    <IconButton icon="StarIcon" variant="outline" />
  </ButtonGroup>
)

export const BasicAndIcon: Story<ButtonGroupProps> = (args) => (
  <ButtonGroup {...args}>
    <IconButton icon="HeartIcon" variant="solid" />
    <BasicButton>Vote for me</BasicButton>
  </ButtonGroup>
)

export const Stats: Story<ButtonGroupProps> = (args) => (
  <ButtonGroup {...args}>
    <BasicButton>Total orders</BasicButton>
    <StatsButton>12k</StatsButton>
  </ButtonGroup>
)

export const Checkbox: Story<ButtonGroupProps> = (args) => (
  <ButtonGroup {...args}>
    <CheckboxButton />
    <BasicButton>Select all</BasicButton>
  </ButtonGroup>
)