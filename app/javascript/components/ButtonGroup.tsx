import React from "react";
import classNames from "classnames";
import Heroicon, { IconName, IconVariant } from './Heroicon';

const theme = {
  base: 'relative inline-flex items-center border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500',
  basic: 'px-4 py-2',
  iconOnly: 'px-2 py-2',
  stats: 'px-3 py-2',
  icon: '-ml-1 mr-2 h-5 w-5 text-gray-400',
  position: {
    leading: 'rounded-l-md',
    tailing: '-ml-px rounded-r-md',
    middle: '-ml-px'
  }
}

type Position = 'leading' | 'middle' | 'tailing'

export type ButtonGroupProps = React.HTMLAttributes<HTMLDivElement>

export const ButtonGroup = ({
  children
}: ButtonGroupProps) => {
  const childrenCount = React.Children.count(children);
  return (
    <span className="relative z-0 inline-flex shadow-sm rounded-md">
      {React.Children.map(children, (child, index) => {
        let position: Position = 'middle';
        if (index === 0) {
          position = 'leading'
        } else if (index === childrenCount - 1) {
          position = 'tailing'
        }
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {position});
        }
        return child;
      })}
    </span>
  )
}

export interface BasicButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  position?: Position
  icon?: IconName
  variant?: IconVariant
}

export const BasicButton = ({
  position,
  children,
  icon,
  variant,
}: BasicButtonProps) => {
  const styles = classNames(
    theme.base,
    theme.basic,
    theme.position[position],
  )

  let iconElement: undefined | JSX.Element = undefined;
  if (icon) {
    iconElement = (
      <Heroicon
        icon={icon}
        variant={variant}
        className={theme.icon}
      />
    )
  }

  return (
    <button
      type="button"
      className={styles}
    >
      {icon && iconElement}
      {children}
    </button>
  )
}

export interface IconButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  position?: Position
  icon: IconName
  variant?: IconVariant
}

export const IconButton = ({
  icon,
  variant,
  position,
}: IconButtonProps) => {
  const styles = classNames(
    theme.base,
    theme.iconOnly,
    theme.position[position],
  )
  return (
    <button className={styles}>
      <Heroicon
        icon={icon}
        variant={variant}
        className="h-5 w-5"
      />
    </button>
  )
}

export interface StatsProps extends React.HTMLAttributes<HTMLButtonElement> {
  position?: Position
}

export const StatsButton = ({
  children,
  position,
}: StatsProps) => {
  const styles = classNames(
    theme.base,
    theme.stats,
    theme.position[position],
  )
  return (
    <button className={styles}>
      {children}
    </button>
  )
}